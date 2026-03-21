/* Given an array of size n containing distinct numbers from 0 to n, find the missing number. */

function missingNum(arr){
    let set = new Set(arr);

    for(let i=0;i<=arr.length;i++){
        if(!set.has(i)){
            return i;
        }
    }
}
console.log(missingNum([1,0,2]));

//the approach has Both Time--> O(n) and Space --> O(n)

// We can Furthure Optimize this


function OptMissingNum(nums){
    let n = nums.length;
    
    let expected = (n*(n+1))/2;
    let actual = nums.reduce((accu, num) => {
        return accu + num
    }, 0);
    return expected - actual;
}

// In the latest one the Time --> O(n) and Space ---> O(1)