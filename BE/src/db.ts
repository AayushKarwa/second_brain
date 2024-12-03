import dotenv from 'dotenv'
dotenv.config();
import mongoose,{model}  from 'mongoose';
import { contentSchema, linkSchema, tagSchema, userSchema } from './schema';

const ObjectId = mongoose.Types.ObjectId


export const UserModel = model('User',userSchema)

export const ContentModel = model('Content',contentSchema)

export const LinkModel = model('Link',linkSchema)

export const TagModel = model('Tag',tagSchema)

// const tagSchema = new Schema({
//     _id: ObjectId,
//     title: String
// });

// const linkSchema = new Schema({
//     _id: ObjectId,
//     hash: String,
//     userId:   ,
// });

// const contentSchema = new Schema({
//     _id: ObjectId,
//     link: String,
//     type: String |enum:,
//     title: String,
//     tags:   ,
//     userId:
// });



