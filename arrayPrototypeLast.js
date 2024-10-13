/* 
    Write code that enhances all arrays such that you can call the array.last() method on any 
    array and it will return the last element. If there are no elements in the array, it should return -1.
*/
// Bước 1 : Thêm phương thức last vào Array prototype
Array.prototype.last = function () {
  // Bước 2 : Kiểm tra độ dài mảng
  if (this.length === 0) {
    return -1;
    // Nếu mảng rỗng thì trả về phần tử cuối cùng
  } else {
    return this[this.length - 1];
  }
};

const arr1 = [1, 2, 3, 4];
console.log(arr1.last()); // Kết quả: 4

const arr2 = [];
console.log(arr2.last()); // Kết quả: -1

// Thêm phương thức last để kiểm tra độ dài của mảng
