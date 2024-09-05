/* You are given an integer array height of length n. 
There are n vertical lines drawn such that the two 
endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form 
a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container. */

/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49
*/

/*
Khởi tạo hai con trỏ: Một con trỏ ở đầu mảng và một con trỏ ở cuối mảng.
Tính diện tích: Tính diện tích container giữa hai con trỏ.
Cập nhật diện tích lớn nhất: So sánh và cập nhật diện tích lớn nhất nếu cần.
Di chuyển con trỏ: Dựa trên chiều cao của đường thẳng, di chuyển con trỏ để 
kiểm tra các diện tích khác.
Kết thúc: Khi hai con trỏ gặp nhau, diện tích lớn nhất đã được tìm thấy. 
*/

function run(height) {
  height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

  let left = 0; //Con trỏ ở đầu mảng
  let right = height.length - 1; //Con trỏ ở cuối mảng
  let maxArea = 0; //Biến lưu trữ diện tích lớn nhất
  while (left < right) {
    const width = right - left; // Chiều rộng sẽ bằng đầu mảng - cúi mảng
    // Tính chiều cao của đầu mảng bên trái và đầu mảng bên phải
    const minHeight = Math.min(height[left], height[right]);
    //Tính diện tích hiện tại
    const currentArea = width * minHeight;

    //Tính diện tích lớn nhất = Diện tích ban đầu , diện tich hiện tại
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left += 1; // Di chuyển con trỏ sang trái
    } else {
      right -= 1; // Di chuyển con trỏ sang phải
    }
  }
  return console.log("Diện tích lớn nhất: " + maxArea); // Trả về diện tích lớn nhất
}
run();
