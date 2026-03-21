/* Given an integer array "nums" Move all 0's to the end while maintaining the relative
order of non-zero elements
Do this in-place withoutmaking a copy of the array */

const zeroedArr = [0,1,3,0,2,5,0];

function moveZeroes(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            for(let j=i+1; j<arr.length;j++){
                if(arr[j] !== 0){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    break;
                }
            }
        }
    }
    return arr;
}

console.log(moveZeroes(zeroedArr));

// This is a brute force approach where the time complexity is O(n2)

/* What You Should Say in Interview

“This works but has O(n²) due to repeated scanning. I can optimize it to O(n) using two pointers.”*/


const nums = [1,3,0,0,2,0,4,1];

function optimizedMoveZeroes(arr){
    let left = 0;
    for(let right = 0; right < arr.length; right++){
        if(arr[right] !== 0){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
    }
    return arr;
}
console.log(optimizedMoveZeroes(nums));