// Move Zeroes, Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const nums = [0,1,0,3,12]

function moveZeroes(nums){
    for (let i = nums.length-1; i > 1; i--) {
        for (let j = i; j > 1; j--) {
            if(nums[j]!==0){
                const temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
            }            
        }        
    }
    return nums;
}

console.log(moveZeroes(nums));