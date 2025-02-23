// Roll Function

import { calculateNewBalance } from "../Backend/newBalance.js"
import { results } from "../interfaces/types.js";
import { initialBalance } from "./userInfo.js";

let currentBalance = initialBalance;

export const letsRoll = (rollPrice:number) => {
   
    
    let result:results = "Pierdes!";
    const random:number = Math.random() * (100 - 1) + 1; 

    if(random >= 1 && random <= 73) {
        result = "Pierdes!"
        console.log(result, random)
    } 
    
    else if ( random >= 74 && random <= 89 ) {
        result = "Match1"
        console.log(result, random)
    } 
    
    else if (random >= 90 && random <= 100) {
        result = "Match2"
        console.log(result, random)
    } 
    
    else {
        throw new Error("Error random: " + random)
    }

    
    
    const finalBalance:number = calculateNewBalance(currentBalance, result, rollPrice);
    currentBalance = finalBalance   
    
    return {
        finalBalance,
        message: result
    };
    
}

/* 

76.67% de las veces, el jugador pierde.
13.33% de las veces, el jugador gana x2 su apuesta.
10% de las veces, el jugador gana x5 su apuesta.
*/