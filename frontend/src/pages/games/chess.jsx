import React from 'react'
import {Header} from "@/pages/componentPages/Header.jsx";


import {motion} from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";


 const Chess = () => {
    return (

        <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.9}}
            transition={{duration: 0.5}}
            className='w-full min-h-screen mx-auto flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 backdrop-filter backdrop-blur-lg'>
            <Header/>

            <div className="container  mx-auto px-4 justify-center items-center" >
                <Card className={"w-1/2 mx-auto bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 backdrop-filter backdrop-blur-lg"}>
                    <CardContent className={"w-1/2 mx-auto"}>
                        <h1>Chess</h1>
                    </CardContent>
                </Card>
            </div>
        </motion.div>

    )
 }
export default Chess;