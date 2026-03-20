// Given an integer array(nums) return an array such that each element at
//  index i is the product of all elements except self

// Here the Time Complexity is O(n2) and space Complexity is O(n);

function productExceptSelfBrute(nums){
    const n = nums.length;
    const result = [];
    for(let i=0; i< n;i++){
        let product = 1;
        for(let j=0;j<n;j++){
            if(i!==j){
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
}

console.log(productExceptSelfBrute([1,2,3,4]));



// The Above Problem can be solved using division 
//  but the issue is this works only for non-zero integer arrays
// for now we see using division , if any integer is product becomes zero , and any division over zero gives zero

// Time Complexity is O(n), and space Complexity also

function productsArraysExcSelf(arr){
    const resultArr = [];
    const n = arr.length;
    let product = 1;
    for(let i=0;i<n;i++){
        product *= arr[i]
    }
    for(let i=0;i<n;i++){
        let item = product/arr[i];
       resultArr.push(item); 
    }
    return resultArr;
}

console.log(productsArraysExcSelf([1,2,3,4]));


// The above logic misses zero's handling situation we can add that logic as well 
function productExceptSelf(nums) {
    let zeroCount = 0;
    let product = 1;

    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            product *= num;
        }
    }

    return nums.map(num => {
        if (zeroCount > 1) return 0;
        if (zeroCount === 1) return num === 0 ? product : 0;
        return product / num;
    });
}
console.log(productExceptSelf([1,2,3,4]));
