// Given an integer array, find the maximum sum of a non-empty subarray, where array is circular


function maxSubarrayCircular(nums){
    let total = 0;
    let maxSum = nums[0], currMax = 0;
    let minSum = nums[0], currMin = 0;

    for(let num of nums){
         total += num;
         currMax = Math.max(num, currMax + num);
         maxSum = Math.max(maxSum, currMax);

         currMin = Math.min(num, currMin + num);
         minSum = Math.min(minSum, currMin);
    }
    if(maxSum < 0) return maxSum;
    return Math.max(maxSum, total - minSum);
}

console.log(maxSubarrayCircular([5,-3,5]));