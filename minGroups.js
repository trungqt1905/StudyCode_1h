// Đây là bài toán phân nhóm các khoảng thời gian sao cho không có hai khoảng nào trong
// cùng một nhóm giao nhau. Mục tiêu là tìm số lượng nhóm nhỏ nhất cần thiết để phân chia các khoảng này.

/* 
Bạn có một mảng 2D intervals với mỗi phần tử là một khoảng thời gian [lefti, righti], 
đại diện cho một khoảng thời gian từ lefti đến righti. Nhiệm vụ của bạn là chia các khoảng 
này thành nhiều nhóm sao cho không có hai khoảng nào trong cùng một nhóm giao nhau. 
Giao nhau xảy ra khi hai khoảng có ít nhất một điểm chung, ví dụ [1, 5] và [5, 8] giao nhau tại điểm 5
*/

const minGroups = (intervals) => {
  // Bước 1 : Xắp xếp theo thời gian bắt đầu
  intervals.sort((a, b) => a[0] - b[0]);
  // Bước 2 : Khởi tạo hàng đợi ưu tiên (min-help)
  const minHelp = [];
  // Bước 3 : Duyệt qua từng khoản thời gian
  for (const [start, end] of intervals) {
    if (minHelp.length > 0 && minHelp[0] <= start) {
      // Loại bỏ phần tử đầu tiên trong hàng đợi
      minHelp.shift();
    }
    // Thêm thời gian kết thúc của khoảng hiện tại vào hàng đợi
    minHelp.push(end);
    // Sắp xếp lại hàng đợi để duy trì tính chất của min-help
    minHelp.sort((a, b) => a - b);
  }
  // Bước 4 : Trả về kích thước của hàng đợi
  return minHelp.length;
};

intervals = [
  [5, 10],
  [6, 8],
  [1, 5],
  [2, 3],
  [1, 10],
];
console.log(minGroups(intervals)); // Kết quả: 2
