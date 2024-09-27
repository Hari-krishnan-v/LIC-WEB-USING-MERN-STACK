import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
   planName:{
    type:String,
    required:true,
   },
   productName:{
    type:String,
    required:true,
   },
   planNo:{
    type:Number,
    required:true,
   },
   uinNo:{
    type:String,
    required:true,
   },
},
{ timestamps: true });
export const Plan = mongoose.model("Plan",planSchema);