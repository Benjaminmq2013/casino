// Three params:
// 1- Current Money: Number
// 2- Result: String
// 3- rollPrice: Number

import { results } from "../interfaces/types"

export const calculateNewBalance = (currentBalance:number, result:results, rollPrice:number) => {
      
    if(result === "Match1") {
        return currentBalance += (rollPrice * 2);
    }

    else if(result === "Match2") {
        return currentBalance += (rollPrice * 3);
    }   

    else if(result === "Pierdes!") {
        return currentBalance -= rollPrice;        
    } 
    
    else {
        return 0
    }
}