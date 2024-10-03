import { Bingo } from "../models/bingo.model";

export const BingoGet = async (req,res) => {
    const{num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15,num16,num17,num18,num19,num20,num21,num22,num23,num24,num25} = req.body;

    try {
        if(!num1 || !num2 || !num3 || !num4 || !num5 || !num6 || !num7 || !num8 || !num9 || !num10 || !num11 || !num12 || !num13 || !num14 || !num15 || !num16 || !num17|| !num18 || !num19 ||!num20 || !num21 || !num22 || !num23|| !num24 || !num25){
            throw new Error("All Fields are required!")
        }
    } catch (error) {
        
    }
}