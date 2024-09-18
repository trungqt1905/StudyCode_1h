const removeElement = (nums, val) => {
  let k = 0; // Biến này đếm số lượng phần tử không bằng val
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Đặt phần tử hiện tại ở vị trí k
      k++; // Tăng số lượng phần tử nếu hợp lê
    }
  }
  return k; //Trả về số lượng phần tử không bằng value
};

let nums1 = [3, 3, 4, 5];
let val1 = 1;
let k1 = removeElement(nums1, val1);
console.log(k1, nums1.slice(0, k1)); // Kết quả: 2, [2, 2]
