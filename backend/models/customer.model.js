import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    phoneNo: {
        type: String, 
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    photo: {
        type: String, 
        required: true,
    },
    adhaar: {
        type: String,  
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
}, 
{ timestamps: true });

export const Customer = mongoose.model("Customer", customerSchema);
