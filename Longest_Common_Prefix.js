/*
- Write a function to find the longest common prefix string amongst an array of strings.
- If there is no common prefix, return an empty string ""
*/

// Tìm tiền tố chung dài nhất

/*
Input: strs = ["flower","flow","flight"]
Output: "fl
*/

// Cách 1 : Sử dụng phương pháp so sánh dần
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  // Khởi tạo tiền tố chung bằng chuỗi đầu tiên
  let prefix = strs[0]; // Log ra flower

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Cắt bớt tiền tố cho đến khi khớp
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return console.log(prefix);
};
longestCommonPrefix(["flower", "flow", "flight"]);
