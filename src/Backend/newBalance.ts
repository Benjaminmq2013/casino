// Three params:
// 1- Current Money: Number
// 2- Result: String
// 3- rollPrice: Number

import { results } from "../interfaces/types"

export const calculateNewBalance = (currentBalance:number, result:results, rollPrice:number) => {
      
    if(result === "Ganaste!") {
        return currentBalance += (rollPrice);
    } else {
        return currentBalance -= rollPrice;
    }
}