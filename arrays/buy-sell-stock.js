/*Problem Statement

You are given an array prices where:

prices[i] = stock price on day i

You must buy on one day and sell on a later day

Return the maximum profit

If no profit is possible → return 0. */

const stockPrices = [7,1,5,3,6,4];

function maximumProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let price of prices){
        if(price < minPrice){
            minPrice = price;
        }
        let profit = price - minPrice;
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    return maxProfit;
}

// Space Complexity is O(1) and Time complexity is O(n);
console.log(maximumProfit(stockPrices));


/* Best Time to Buy and Sell Stock II (Multiple Transactions)
Problem

You are given an array prices.
 
prices[i] = price on day i

You can buy and sell multiple times

But you must sell before buying again

Find the maximum profit */

const itemPrices =  [7,1,5,3,6,4];

function maxProfitMultiple(prices){
    let profit = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1];
        }

    }
    return profit;
}

// Time Complexity is O(n) and space complexity is O(1)
console.log(maxProfitMultiple(itemPrices));




/*Harder versions

1️⃣ Stock III — At most 2 transactions
2️⃣ Stock with Cooldown
3️⃣ Stock with Transaction Fee

These move from Greedy → Dynamic Programming.*/