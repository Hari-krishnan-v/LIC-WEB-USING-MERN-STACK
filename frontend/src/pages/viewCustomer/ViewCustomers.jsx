import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { useAuthStore } from "../../store/authStore";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Input
} from "@/components/ui/input";
import { Header } from "../componentPages/Header";

const ViewCustomers = () => {
    const {   customers, GetCustomers } = useAuthStore();
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        GetCustomers();
    }, [GetCustomers]);


    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phoneNo.includes(searchTerm) ||
        customer.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='w-full min-h-screen mx-auto flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 backdrop-filter backdrop-blur-lg'>
           <Header/>
            <div className="pt-4 m-4">
                <h2 className='text-2xl md:text-xl font-semibold text-white mb-4'>Customer List</h2>
                <Input
                    type="text"
                    placeholder="Search customers..."
                    className="mb-4 p-6 w-full md:w-1/3 border bg-transparent text-white border-gray-300 rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5 }}
                className="overflow-x-auto">
                    
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Plan</TableHead>
                                {/* <TableHead>Photo</TableHead>
                                <TableHead>Adhaar</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody className='text-white'>
                            {filteredCustomers.length ? (
                                filteredCustomers.map(customer => (
                                    <TableRow key={customer._id}>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell>{customer.email}</TableCell>
                                        <TableCell>{customer.phoneNo}</TableCell>
                                        <TableCell>{customer.address}</TableCell>
                                        <TableCell>{customer.plan}</TableCell>
                                        {/* <TableCell>{customer.adhaar}</TableCell>
                                        <TableCell>{customer.photo}</TableCell> */}

                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan="5" className='text-center'>No customers found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ViewCustomers;
