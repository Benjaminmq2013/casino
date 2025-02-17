// Roll Function

import { calculateNewBalance } from "../Backend/newBalance.js"
import { currentBalance } from "./userInfo.js";

export const letsRoll = (rollPrice:number) => {
   
    let result:"Pierdes!" | "Ganaste!" = "Pierdes!";
    

    const random:number = Math.random() * (10 - 1) + 1; 
    if(random >= 5 ) result = "Ganaste!"

    const finalBalance = calculateNewBalance(currentBalance, result, rollPrice)
    
    return {
        finalBalance,
        message: result
    };
    
}