import { Plan } from "../models/plans.model.js";

export const AddPlans = async (req,res) => {
    const {planName,productName,planNo,uinNo} = req.body;

    try {
        
        if( !planName || !productName || !planNo || !uinNo){
            throw new Error("All fields are required");
        }

        const planAlreadyExist = await Plan.findOne({productName});
        console.log("Plan already exist");

        if(planAlreadyExist){
            return res.status(400).json({ success: false, message: "Plan already exists" });
        }

        const plan = new Plan({
            planName,
            productName,
            planNo,
            uinNo

        });

        await plan.save();
        res.status(201).json({
            success:true,
            message:"plan created successfully",
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
        
    }
};

export const showPlan = async (req,res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json({
            success: true,
            data: plans,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
        
    }
}