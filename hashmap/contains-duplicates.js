// Given an array nums, return true if 
// any value appears atleast twice, otherwise false

const givenArr = [1,2,3,4,6];

function containsDuplicates(arr){
    const seen = new Set();
    for(let num of arr){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

console.log(containsDuplicates(givenArr));