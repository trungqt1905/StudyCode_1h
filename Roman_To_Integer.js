function start(s) {
  // Khai báo romanMap để ánh xạ các ký tự số La Mã
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0; // Lưu tổng giá trị số nguyên
  let prevValue = 0; // Lưu trữ giá trị la mã trước đó

  for (let index = 0; index < s.length; index++) {
    const currentChar = s[index];
    // Lấy kí tự hiện tại của chuỗi s
    const currentValue = romanMap[currentChar];
    // Lấy giá trị tương ứng từ romanMap

    //Xử lí giá trị kí tự hiện tại
    if (currentValue > prevValue) {
      //Nếu giá trị hiện tại lớn hơn giá trị trước đó thì cấn trừ
      total += currentValue - 2 * prevValue;
    } else {
      // Nếu giá trị hiện tại nhỏ hơn hoặc bằng giá trị trước đó thì cộng vào tổng
      total += currentValue;
      console.log("total:", total);
    }

    console.log("prevValue = currentValue", (prevValue = currentValue));
  }
  // Bước 4: Trả về tổng giá trị
  return console.log(total);
}
start("MCMXCIV");
