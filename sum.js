/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order. */

/* Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. 
target = num1 + num2
9 = 7 + 2
*/

function start(nums, target) {
  nums = [2, 7, 11, 15];
  target = 9;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        console.log([nums[i], nums[j]]);
      }
    }
  }
  return null;
}
start();
