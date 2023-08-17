const arr = [1,2,3,4]

function calculateTotalTicketPrice(arr){
    let cost = 0, totalCost = 0;
    for (const age of arr) {
        if (age<12) cost = 5;
        else if (age > 12 && age < 17) cost = 10;
        else if (age > 18 && age < 59) cost = 15;
        else cost = 8;
        totalCost += cost;
    }
    return totalCost;
}

console.log(calculateTotalTicketPrice(arr));