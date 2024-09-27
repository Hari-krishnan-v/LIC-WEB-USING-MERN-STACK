import { motion } from "framer-motion";
import {  useState } from 'react';
import { useAuthStore } from "../../store/authStore";
import { 
         Loader,
         ChartNoAxesGantt,
         StretchHorizontal,
         FileDigit,
         Hash, } from "lucide-react"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from "../../components/Input.jsx";
import { Header } from "../componentPages/Header.jsx";
const AddPlans = () => {
    const { AddPlans,error,isLoading  } = useAuthStore();
    const [planName, setplanName] = useState("");
    const [productName, setproductName] = useState("");
    const [planNo, setplanNo] = useState("");
    const [uinNo, setuinNo] = useState("");

    

    const handleAddPlan = async (e) => {
        e.preventDefault();
        try {
            await AddPlans(planName,productName,planNo,uinNo);
            toast.success("Plan added successfully!");
        } catch (error) {
            toast.error("Error adding plan.");
        }
    };
   

    

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='w-full min-h-screen mx-auto flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 backdrop-filter backdrop-blur-lg'>
            <Header/>
            <div className="pt-4 m-4">
                {/* <h2 className='text-2xl md:text-xl font-semibold text-white mb-4'>Add Plans</h2> */}
             
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5 }}
                className="overflow-x-auto">
                                <ToastContainer />

                    
                    <div className='p-8 '>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
					Create plan
				</h2>

				<form onSubmit={handleAddPlan}>
					<Input
						icon={ChartNoAxesGantt}
						type='text'
						placeholder='Plan Name'
						value={planName}
						onChange={(e) => setplanName(e.target.value)}
					/>
					<Input
						icon={StretchHorizontal}
						type='text'
						placeholder='Product name'
						value={productName}
						onChange={(e) => setproductName(e.target.value)}
					/>
					<Input
						icon={FileDigit}
						type='text'
						placeholder='Plan number'
						value={planNo}
						onChange={(e) => setplanNo(e.target.value)}
					/>
                    <Input
						icon={Hash}
						type='text'
						placeholder='UIN NO'
						value={uinNo}
						onChange={(e) => setuinNo(e.target.value)}
					/>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					

					<motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Submit"}
					</motion.button>
				</form>
			</div>
			
                </motion.div>
            </div>
        </motion.div>
    );
}

export default AddPlans;
