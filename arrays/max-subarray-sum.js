/* you are given an array of integers(positive + negative)
    Find the contiguous subarray that return the maximum sum.
    Input = [-2,1,-3,4-1,2,1,-5,4]

*/

// Let us see the brute force approach where the time complexity is O(n2)

function maxSubArrSum(arr){
    let maxSum = -Infinity;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum += arr[j];
            maxSum = Math.max(sum, maxSum);
        }
    }
    return maxSum;
}
console.log(maxSubArrSum([-2,1,-3,4,-1,2,1,-5,4]));

// Now let's proceed the with the optimal solution where time complexity is O(n) and space 
// complexity is O(1) -------> Kadane's Algorithm;


function maxSubArray(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    for(let i=1;i<arr.length;i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

const givenArr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(givenArr));

// return the max sum subarray from the given array using brute force technique;

function subArray(arr){
    let maxSum = -Infinity;
    let start = 0;
    let end = 0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum += arr[j];
            if(sum > maxSum){
                maxSum = sum;
                start = i;
                end = j;
            }
        }
    }
    return arr.slice(start, end+1);
}
console.log(subArray(givenArr));

// return the max sum subarray from the given array using Kadane's technique;

function subarrayKadane(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];


    let start = 0;
    let end = 0;
    let tempStart = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i] > currentSum + arr[i]){
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if(currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    return arr.slice(start, end + 1);

}