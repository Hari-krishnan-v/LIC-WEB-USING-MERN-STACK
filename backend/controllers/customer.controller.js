import { Customer } from "../models/customer.model.js";


export const CustomerReg = async (req, res) => {
    const { name, email, phoneNo, address, photo, adhaar, plan,} = req.body;

    try {

        if(!name || !email || !phoneNo || !address || !photo || !adhaar || !plan) {
            throw new Error("All fields are required");
        }

        const userAlreadyExists = await Customer.findOne({ name, email,phoneNo,address });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}
        
        const customer = new Customer({
            name,
            email, 
            phoneNo, 
            address, 
            photo, 
            adhaar, 
            plan,
        });

        await customer.save();

        res.status(201).json({
			success: true,
			message: "customer created successfully",
			
		});
    }
    catch (error){
        res.status(400).json({ success: false, message: error.message });
    }
};

export const GetCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();

        res.status(200).json({
            success: true,
            data: customers,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};