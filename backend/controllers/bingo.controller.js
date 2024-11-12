// import { Bingo } from "../models/bingo.model";

export const BingoGet = async (req, res) => {
    // const{num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15,num16,num17,num18,num19,num20,num21,num22,num23,num24,num25} = req.body;

    try {
        // if(!num1 || !num2 || !num3 || !num4 || !num5 || !num6 || !num7 || !num8 || !num9 || !num10 || !num11 || !num12 || !num13 || !num14 || !num15 || !num16 || !num17|| !num18 || !num19 ||!num20 || !num21 || !num22 || !num23|| !num24 || !num25){
        //     throw new Error("All Fields are required!")
        // }
        const num1 = []
        const num2 = []
        const maxlen = 26;
       

        for (let i = 1; i < maxlen; i++) {

            num1.push(i)

        };for (let i = 1; i < maxlen; i++) {

            num2.push(i)

        };
        let unsortnum1 = num1.sort(() => Math.random() - 0.5);
        let unsortnum2 = num2.sort(() => Math.random() - 0.5)

        res.status(200).json({
            success: true,
            unsortnum1: unsortnum1,
            unsortnum2: unsortnum2,
        });
        

        // console.log(unsortnum)
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const CheckWin = async (req,res) => {
    const{ value } = req.body;
    const winPs = [
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [0,5,10,15,20],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,13,18,23],
        [4,9,14,19,24],
        
    ]
    try {
        if(!value){
        throw new Error("All fields are required");
    }   
        const bing = ["B","I","N","G","O"]
        if(value==winPs){
            return res.status(200).json({
                success: true,
                data: bing,
            });
        }
    } catch (error) {
        
    }
   
    console.log(value);
}
// CheckWin();
// export default BingoGet();

// BingoGet();