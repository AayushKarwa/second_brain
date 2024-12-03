import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const app = express()
import bcrypt, { hash } from 'bcrypt'
import { ContentModel, LinkModel, UserModel } from './db'
import {middleware} from './middleware'
import { generateHash } from './utils'

const JWT_SECRET = process.env.JWT_SECRET

if(!JWT_SECRET){
    throw new Error("jwt secret is not defined in env variables...")
}


app.use(express.json())
// app.use('/api/v1/user',UserRouter)

app.post('/api/v1/signup',async (req,res)=>{

    const {username,password} = req.body;

    

    if(!username||!password){
        res.status(403).json({
            message:'username and password are required..'
        })
    }

    const user = await UserModel.findOne({
        username:username
    })

    if(user){
        res.status(403).json({
            message:'user already exists!'
        })
        return;
    }

    const hashedPassword = await bcrypt.hash(password,10);
try{
    await UserModel.create({
        username:username,
        password:hashedPassword
    })
}catch(e){
    res.status(403).json({
        message:"username already exists"
    })
}
    
    res.json({
        message:"user signed up successfully..."
    })

    console.log(`username: ${username} password: ${hashedPassword}`)


})

app.post('/api/v1/signin',async(req,res)=>{
    
    const {username,password} = req.body;

    try{
       const user = await UserModel.findOne({
            username:username
        })

        

        if(user?.password){
            console.log(`user is: ${user.username} user id is: ${user._id}`)
            const decodedPass = await bcrypt.compare(password,user.password);
            if(decodedPass){
                const token = jwt.sign({
                    id: user._id
                },JWT_SECRET)
                console.log(`token is: ${token}`)
                res.json({
                    message:"user signed in successfully",
                    token:token
                })
            }
        }
    }catch{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
   }
)

app.post('/api/v1/content',middleware(JWT_SECRET),async(req,res)=>{
    
    const {link,type,title} = req.body;
    //@ts-ignore
    const userId = req.userId

    await ContentModel.create({
        type:type,
        link:link,
        title:title,
        
        userId: userId
    })

    res.json({
        message:'content added'
    })
})

app.get('/api/v1/content',middleware(JWT_SECRET),async(req,res)=>{

    //@ts-ignore
    const userId = req.userId

    const content = await ContentModel.find({
        userId:userId
    }).populate('userId','username')
    res.json({
        content:content,
        userId:userId
    })
})

app.delete('/api/v1/content',middleware(JWT_SECRET),async(req,res)=>{

    const contentId = req.body.contentId;
    //@ts-ignore
    const userId = req.userId

    await ContentModel.deleteMany({
        _id:contentId,
        userId:userId
    })

    res.json({
        message:`content with id: ${contentId} has been deleted!`
    })
   
    
})

app.post('/api/v1/brain/share', middleware(JWT_SECRET), async(req,res)=>{    
    const share = req.body.share as boolean;
    
    //@ts-ignore
    const userId = req.userId;

    if(share){

        const existingLink = await LinkModel.findOne({
            userId:userId
        })

        if(existingLink){
            
            res.json({
                message:'link exists already!',
                link:`/api/v1/brain/${existingLink.hash}`
            })
            return;
        }
       
        const linkHash = generateHash();
        await LinkModel.create({
            hash:linkHash,
            userId:userId
        })
        res.json({
            message:"link is generated!",
            link: `/api/v1/brain/${linkHash}`
        })
        return

}else{
    await LinkModel.deleteOne({
        userId:userId
    })
    res.json('Link is deleted!')
}
return;
// res.json({
//     message:'updated the shareable link'
// })
})

app.get('/api/v1/brain/:sharelink',middleware(JWT_SECRET),async(req,res)=>{    

    const link = req.params.sharelink;
    //@ts-ignore
    

    if(!link){
      res.status(403).json({
        message:'link is not provided'
      })
      return;  
    }
        const links = await LinkModel.findOne({
            hash:link
        })

        if(!links){
            res.status(403).json({
                message:'invalid link'
            })
            return;
        }
         const content = await ContentModel.find({
             userId:links.userId
         })

         if(!content){
            res.status(403).json({
                message:'no content found of the user'
            })
            return;
         }

         const user = await UserModel.findOne({
            _id:links.userId
          })

          res.json({
            username:user?.username,
            content:content
           
          })
        
        
    


    
})

async function main(){
    const MongoUrl: string|undefined = process.env.MONGO_URI

    if(!MongoUrl){
        throw new Error('monogo url is not defined in env variables...')
    }

    console.log("mongodb url is: "+ MongoUrl)
    
    await mongoose.connect(MongoUrl)
    .then(()=>{
        console.log("DB connected")
    });

    app.listen(3000,()=>{
        console.log("server is running on port 3000...")
    })
}

main();