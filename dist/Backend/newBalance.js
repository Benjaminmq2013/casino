// Three params:
// 1- Current Money: Number
// 2- Result: String
// 3- rollPrice: Number
export const calculateNewBalance = (currentBalance, result, rollPrice) => {
    if (result === "Ganaste!") {
        return currentBalance += (rollPrice);
    }
    else {
        return currentBalance -= rollPrice;
    }
};
