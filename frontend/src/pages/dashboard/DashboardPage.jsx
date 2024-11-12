import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";

import { Mail, Loader,User, Phone, Image } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Header } from "../componentPages/Header";

const DashboardPage = () => {
    const { showPlan, plan } = useAuthStore();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");
    const [adhaar, setAdhaar] = useState("");
    const [selectedPlan, setSelectedPlan] = useState("");
    const { CustomerReg, error, isLoading } = useAuthStore();

    const handleLogout = () => {
        logout();
        toast.success("Logout Successfully");
    };

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                await showPlan();
            } catch (error) {
                toast.error("Error fetching plans.");
            }
        };
        fetchPlans();
    }, [showPlan]);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await CustomerReg(name, email, phoneNo, address, photo, adhaar, selectedPlan);
            toast.success("Customer registered successfully!");
        } catch (error) {
            toast.error("Error registering customer.");
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

            <Carousel plugins={[Autoplay({ delay: 2000 })]} className=" w-3/4 mx-auto mt-10  ">
                <CarouselContent className={"rounded-2xl"}>
                    <CarouselItem><img src="../public/banner1.jpg" className={"rounded-2xl"} alt="" /></CarouselItem>
                    <CarouselItem><img src="../public/banner2.jpg" className={"rounded-2xl"} alt="" /></CarouselItem>
                    <CarouselItem><img src="../public/banner3.jpg" className={"rounded-2xl"} alt="" /></CarouselItem>
                    <CarouselItem><img src="../public/banner4.jpg" className={"rounded-2xl"} alt="" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="pt-4 items-center m-5">
                <div className='gap-4 flex-wrap justify-center'>
                    <center>
                        <Dialog >
                            <DialogTrigger>
                                <motion.div
                                    className='lg:p-10 p-4 m-1 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3'>Add Customer</h3>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className={" bg-transparent backdrop-blur-3xl text-white"}>
                                <ToastContainer />
                                <DialogHeader>
                                    <DialogTitle>Add Customer</DialogTitle>
                                    <DialogDescription>
                                        Fill in the details below.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <form onSubmit={handleRegister}>
                                            <Label htmlFor="name" className="text-right">Name</Label>
                                            <Input
                                                icon={User}
                                                type='text'
                                                className="mt-2 mb-2"
                                                placeholder='Full Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <Label htmlFor="email" className="text-right">Email</Label>
                                            <Input
                                                icon={Mail}
                                                type='email'
                                                className="mt-2 mb-2"
                                                placeholder='Email Address'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <Label htmlFor="phone" className="text-right">Phone</Label>
                                            <Input
                                                icon={Phone}
                                                type='tel'
                                                className="mt-2 mb-2"
                                                placeholder='Phone number'
                                                value={phoneNo}
                                                onChange={(e) => setPhoneNo(e.target.value)}
                                            />
                                            <Label htmlFor="address" className="text-right">Address</Label>
                                            <Textarea
                                                value={address}
                                                className="mt-2 mb-2"
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            <Label htmlFor="photo" className="text-right">Photo</Label>
                                            <Input
                                                icon={Image}
                                                className="mt-2 mb-2"
                                                type='file'
                                                onChange={(e) => setPhoto(e.target.files[0])}
                                            />
                                            <Label htmlFor="adhaar" className="text-right">Adhaar</Label>
                                            <Input
                                                icon={Image}
                                                className="mt-2 mb-2"
                                                type='file'
                                                onChange={(e) => setAdhaar(e.target.files[0])}
                                            />
                                            <Label htmlFor="plan" className="text-right">Plan</Label>
                                            <Select onValueChange={setSelectedPlan}>
                                                <SelectTrigger className="w-full mt-2 mb-2">
                                                    <SelectValue placeholder="Select a plan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {plan.map(planItem => (
                                                        <SelectItem key={planItem._id} value={planItem.planName}>
                                                            {planItem.planName}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <Button className="mt-2" type='submit' disabled={isLoading}>
                                                {isLoading ? <Loader className='animate-spin mx-auto' size={24} /> : "Register"}
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">Close</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <button>
                            <Link to="/viewCustomer">
                                <motion.div
                                    className='lg:p-10 p-4 m-1 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3'>View Customer</h3>
                                </motion.div>
                            </Link>
                        </button>
                        <button>
                            <Link to="/showPlans">
                                <motion.div
                                    className='lg:p-10 p-4 m-1 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3'>View Plans</h3>
                                </motion.div>
                            </Link>
                        </button>
                        <button>
                            <Link to="/addPlans">
                                <motion.div
                                    className='lg:p-10 p-4 m-1 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3'>Add Plans</h3>
                                </motion.div>
                            </Link>
                        </button>
                        <button>
                            <Link to="/bingo">
                                <motion.div
                                    className='lg:p-10 p-4 m-1 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3'>BINGO</h3>
                                </motion.div>
                            </Link>
                        </button><button>
                            <Link to="/chess">
                                <motion.div
                                    className='lg:p-10 p-4 m-1 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className='text-xl font-semibold text-white mb-3'>Chess</h3>
                                </motion.div>
                            </Link>
                        </button>
                    </center>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className='mt-4 mb-3 flex'
                >

                </motion.div>
            </div>
        </motion.div>
    );
};

export default DashboardPage;
