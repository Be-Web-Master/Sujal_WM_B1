// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const nums1 = [1,3], nums2 = [2,4,5];
function findMedian(nums1,nums2) {
    const length = Math.max(nums1.length,nums2.length);
    const newArr = [];
    for (let i = 0; i < length; i++) {
        if ((nums1[i] ??= 0) !== 0) newArr.push(nums1[i]);
        if ((nums2[i] ??= 0) !== 0) newArr.push(nums2[i]);
    }
    let median = 0;
    if(newArr.length%2!==0) {
        median = newArr[Math.floor(newArr.length/2)].toFixed(5);
    }
    else {
      median = ((newArr[Math.floor(newArr.length / 2) - 1] +
      newArr[Math.floor(newArr.length / 2)])/2).toFixed(5)
    }
    return median;
}

console.log(findMedian(nums1,nums2));