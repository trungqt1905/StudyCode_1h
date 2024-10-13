/*
Given an integer n, return a counter function. This counter function initially 
returns n and then returns 1 more than the previous value every subsequent 
time it is called (n, n + 1, n + 2, etc).
*/

/*
/*
### Hướng dẫn giải bài toán

Để giải bài toán này, chúng ta cần tạo một hàm `createCounter` nhận vào một số nguyên [`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition") và trả về một hàm đếm. Hàm đếm này sẽ trả về giá trị ban đầu là [`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition") và sau đó mỗi lần gọi tiếp theo sẽ trả về giá trị tăng thêm 1 so với giá trị trước đó.

### Các bước thực hiện

1. **Tạo hàm `createCounter`**: Hàm này sẽ nhận vào một số nguyên [`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition").
2. **Sử dụng closure**: Sử dụng closure để lưu trữ giá trị hiện tại của bộ đếm.
3. **Trả về hàm đếm**: Hàm đếm sẽ trả về giá trị hiện tại và sau đó tăng giá trị này lên 1.

### Pseudocode

1. Tạo hàm `createCounter` nhận vào một số nguyên [`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition").
2. Khởi tạo một biến `current` bằng [`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition") để lưu trữ giá trị hiện tại của bộ đếm.
3. Trả về một hàm đếm:
   - Hàm này sẽ trả về giá trị của `current`.
   - Tăng giá trị của `current` lên 1.

### Code Implementation

```javascript
function createCounter(n) {
  let current = n; // Khởi tạo giá trị hiện tại của bộ đếm bằng n

  // Trả về hàm đếm
  return function() {
    return current++; // Trả về giá trị hiện tại và sau đó tăng giá trị này lên 1
  };
}

// Ví dụ kiểm tra
const counter = createCounter(10);
console.log(counter()); // Kết quả: 10
console.log(counter()); // Kết quả: 11
console.log(counter()); // Kết quả: 12
```

### Giải thích

- **Tạo hàm `createCounter`**: Hàm này nhận vào một số nguyên 
[`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition") và khởi tạo biến `current` bằng [`n`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FASUS%2FDesktop%2FStudyCode_1h%2Fcouter.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A17%7D%7D%5D%2C%22786a623a-7704-4742-bf2e-1a95bc4e92dc%22%5D "Go to definition").
- **Closure**: Closure cho phép hàm đếm truy cập và thay đổi giá trị của biến `current` ngay cả sau khi hàm `createCounter` đã kết thúc.
- **Hàm đếm**: Hàm đếm trả về giá trị hiện tại của `current` và sau đó tăng giá trị này lên 1.

### Cách chạy đoạn mã

1. **Lưu mã vào tệp**: Lưu đoạn mã vào một tệp có tên là `counter.js`.
2. **Mở Terminal trong VS Code**: Mở terminal bằng cách nhấn `Ctrl + ` (dấu huyền) hoặc vào menu `View` và chọn `Terminal`.
3. **Điều hướng đến thư mục chứa tệp**: Sử dụng lệnh `cd` để điều hướng đến thư mục chứa tệp `counter.js`.
4. **Chạy tệp bằng Node.js**: Sử dụng lệnh `node counter.js` để chạy tệp.
5. **Kiểm tra kết quả**: Terminal sẽ hiển thị kết quả của các ví dụ kiểm tra.

Hy vọng hướng dẫn này giúp bạn hiểu rõ cách giải bài toán và cách chạy đoạn mã!
*/

const createCounter = (n) => {
  let current = n; // Khởi tạo biến n để lưu giá trị hiện tại
  return function () {
    return current++;
  };
};
const counter = createCounter(10);
console.log(counter()); // Kết quả: 10
console.log(counter()); // Kết quả: 11
console.log(counter()); // Kết quả: 12
