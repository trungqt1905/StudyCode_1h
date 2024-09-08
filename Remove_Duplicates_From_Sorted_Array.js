var removeDuplicates = function (nums) {
  //  Nếu mảng trống hoặc chỉ có 1 phần tử thì không loại bỏ gì
  if (nums.length === 0) return 0;
  // `uniqueIndex` là chỉ số của phần tử duy nhất cuối cùng trong mảng nums
  let uniqueIndex = 0;

  // Bắt đầu với phần tử thứ 2 so sánh với phần tử trước đó
  for (let index = 1; index < nums.length; index++) {
    // Nếu phần tử hiện tại khác với phần tử duy nhất cuối cùng
    if (nums[index] !== nums[uniqueIndex]) {
      // Kiểm tra phần tử trùng lặp nếu không trùng thì đây là phần tử duy nháta mới
      //Di chuyển chỉ số duy nhất và cập nhật phần tử cuối cùng
      uniqueIndex++;
      nums[uniqueIndex] = nums[index];
    }
  }
  return uniqueIndex + 1;
  //Trả về uniqueIndex + 1 vì uniqueIndex 
  //là chỉ số (bắt đầu từ 0), nên độ dài thực tế của mảng là uniqueIndex + 1.
};

const nums = [1, 1, 2, 3, 3, 4, 5, 5, 6];
const length = removeDuplicates(nums);

console.log("Length", length); // Kết quả: 6
console.log(nums.slice(0, length)); // Kết quả: [1, 2, 3, 4, 5, 6]
