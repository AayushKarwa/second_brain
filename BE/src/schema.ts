import mongoose, {Schema} from 'mongoose'
import { contentTypes } from './dto';

export const userSchema = new Schema({
    username: {
        type:String,
        unique: true
    },
    password: String
});

export const contentSchema = new Schema({
    title: {type:String,required:true},
    link: {type:String,required:true},
    type:{type:String, enum:contentTypes,required:true},
    tags: [{type:mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type:mongoose.Types.ObjectId, ref: 'User', required:true}
})

export const tagSchema = new Schema({
    title: {
        type:String,
        required:true
    }
});

export const linkSchema = new Schema({
    hash:{type:String,required:true},
    userId: {
        type:mongoose.Types.ObjectId,
         ref:'User',
         required:true,
         unique:true
        }

});
