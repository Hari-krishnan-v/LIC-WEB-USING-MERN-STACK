import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { Card, CardContent } from "../../components/ui/card";
import { Table, TableHead, TableRow, TableCell } from "../../components/ui/table";
import { Header } from "../componentPages/Header";

const Bingo = () => {
    const { unsortnum1,unsortnum2, BingoGet } = useAuthStore();

    const [clickedNumbers, setClickedNumbers] = useState(new Set());
    const [winMessage, setWinMessage] = useState('');
    const [message, setMessage] = useState('');
    // Winning patterns based on the indices
    const winPs = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
    ];

    useEffect(() => {
        BingoGet();
    }, [BingoGet]);

    useEffect(() => {
        checkWin();
    }, [clickedNumbers]);

    const handleClick = (number) => {
        setClickedNumbers(prev => {
            const newClicked = new Set(prev);
            if (newClicked.has(number)) {
                newClicked.delete(number);
            } else {
                newClicked.add(number);
            }
            return newClicked;
        });
    };
    const messageValue = ["B", "I", "N", "G", "O"]

    const checkWin = () => {
        let clickedArray = Array.from(clickedNumbers);
        let satisfiedPatterns = 0;
        let indexVal=1
        for (const pattern of winPs) {
            if (pattern.every(index => clickedArray.includes(unsortnum1[index]))) {
            setMessage( messageValue.slice(0,indexVal));
                indexVal++;
                satisfiedPatterns++;
                if (satisfiedPatterns >= 5) {
                    break;
                }
            }
        }

        if (satisfiedPatterns >= 5) {
            setWinMessage('you win');
        } else {
            setWinMessage('');
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='w-full min-h-screen mx-auto flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 backdrop-filter backdrop-blur-lg'>
            <Header />

            <div className="container mx-auto px-4 flex gap-4 justify-center items-center">
                <Card className={"w-1/2 mx-auto"}>
                    <CardContent>
                        <Table>
                            <TableRow>
                                <TableHead  id='b'><h1>{message[0]}</h1></TableHead>
                                <TableHead  id='b'><h1>{message[1]}</h1></TableHead>
                                <TableHead  id='b'><h1>{message[2]}</h1></TableHead>
                                <TableHead  id='b'><h1>{message[3]}</h1></TableHead>
                                <TableHead  id='b'><h1>{message[4]}</h1></TableHead>

                            </TableRow>
                            {unsortnum1.length ? (
                                Array.from({ length: 5 }).map((_, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {unsortnum1.slice(rowIndex * 5, rowIndex * 5 + 5).map((number, index) => (
                                            <TableCell key={index}>
                                                <button
                                                    className={`w-full h-12 rounded ${clickedNumbers.has(number) ? 'strickout' : 'bg-green-600 text-white hover:bg-sky-700'}`}
                                                    onClick={() => handleClick(number)}
                                                >
                                                    {number}
                                                </button>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <h1>No numbers available</h1>
                            )}
                        </Table>
                        <div className="flex">
                            {winMessage && <h2 className="text-black">{winMessage}</h2>}
                        </div>
                    </CardContent>
                </Card>
                <Card className={"w-1/2 mx-auto"}>
                    <CardContent>
                        <Table>
                            <TableRow>
                                <TableHead colSpan={"5"} id='b'><h1>computer</h1></TableHead>

                            </TableRow>
                            {unsortnum2.length ? (
                                Array.from({ length: 5 }).map((_, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {unsortnum2.slice(rowIndex * 5, rowIndex * 5 + 5).map((number, index) => (
                                            <TableCell key={index}>
                                                <button
                                                    className={`w-full h-12 rounded ${clickedNumbers.has(number) ? 'strickout' : 'bg-green-600 text-white hover:bg-sky-700'}`}
                                                    onClick={() => handleClick(number)}
                                                >
                                                    {number}
                                                </button>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <h1>No numbers available</h1>
                            )}
                        </Table>
                        <div className="flex">
                            {winMessage && <h2 className="text-black">{winMessage}</h2>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

export default Bingo;
