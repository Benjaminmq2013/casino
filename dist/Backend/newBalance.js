// Three params:
// 1- Current Money: Number
// 2- Result: String
// 3- rollPrice: Number
export const calculateNewBalance = (currentBalance, result, rollPrice) => {
    if (result === "Match1") {
        return currentBalance += (rollPrice * 2);
    }
    else if (result === "Match2") {
        return currentBalance += (rollPrice * 3);
    }
    else if (result === "Pierdes!") {
        return currentBalance -= rollPrice;
    }
    else {
        return 0;
    }
};
