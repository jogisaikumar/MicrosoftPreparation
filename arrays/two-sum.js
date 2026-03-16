/* You are given an array of integers nums and an integer target.
Return the indices of the two numbers such that they add up to the target.

Conditions

Each input has exactly one solution
You may not use the same element twice
 You can return the answer in any order */

//  Brute Force Code

// time complexity is O(n2) , space complexity - O(1)
function twoSum(arr, tar) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === tar) return [i,j];
        }
    }
    return [];
}

console.log(twoSum([2,4,6,3,11,9], 9));


// Optimized solution 
// space complexity O(n) and time complexity O(n)

function optTwoSum(nums, tar){
    const map = {};
    for(let i=0;i<nums.length;i++){
        let complement = tar - nums[i];
        if(complement in map){
            return [map[complement], i]; 
        }
        map[nums[i]] = i;
    }
    return [];
}

console.log(optTwoSum([2,3,4,5,1,6], 6));

/* You are given an array of integers nums and an integer target.
Return the two numbers such that they add up to the target.

Conditions

Each input has exactly one solution
You may not use the same element twice
 You can return the answer in any order */


// Brute force + complexity O(n2)
 function twoSumNums(arr, tar){
    for(let i=0;i < arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === tar){
                return [arr[i], arr[j]];
            }
        }
    }
 }

 console.log(twoSumNums([2,4,6,3,11,9], 9));


//  Optimized solution for the same

function optTwoSumNums(nums, tar){
    const map = {};
    for(let i=0;i<nums.length;i++){
        let complement = tar - nums[i];
        if(complement in map){
            return [complement,nums[i]];
        }
        map[nums[i]] = i;
    }
    return [];
}

console.log(optTwoSumNums([2,3,4,5,1,6], 6));


// return the numbers that add up to a target in a  sorted array

// Two Pointer Approach

function pointerTwoSum(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let sum = nums[left]+ nums[right];
        if(sum === target) return [nums[left], nums[right]];
        if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];
}
console.log(pointerTwoSum([1,2,3,4,5,6,7], 10));