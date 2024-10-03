import React from 'react'
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

import {
    Card,
    CardContent,

} from "../../components/ui/card"
import {
    Table,

    TableHead,

    TableRow,
} from "../../components/ui/table";

import { Header } from "../componentPages/Header";
//  setBingo] = useState("");


const Bingo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='w-full min-h-screen mx-auto flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 backdrop-filter backdrop-blur-lg'>
            <Header />


            <div class="container mx-auto px-4">
                <Card>
                    <CardContent>
                        <Table>
                            <TableRow>
                                <TableHead>
                                    <Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1 text-black"
                                    />

                                </TableHead>
                                <TableHead> 
                                    <Input
                                    type='number'
                                    placeholder='Password'
				
                            // onChange={(e) => setBingo(e.target.value)}    
                                    className="w-fit p-6 m-1"
                                />
                                </TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead>B</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead>I</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead>N</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead>G</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}    
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='Passwo'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead><Input
                                        type='number'
                                        placeholder='number'
						
                                    // onChange={(e) => setBingo(e.target.value)}
                                        className="w-fit p-6 m-1"
                                    /></TableHead>
                                <TableHead>O</TableHead>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </motion.div>


    )
}

export default Bingo;