/*
    Given an integer x, return true if x is a palindrome, and false otherwise.
    Để kiểm tra xem một số nguyên x có phải là số đối xứng (palindrome) 
    hay không, bạn có thể làm theo các bước sau:
*/

function start(x) {
  // B1 : Ta phải sử lí số âm
  if (x < 0) {
    return false;
  }
  // B2: Chuyển đổi số thành chuối
  let str = x.toString();

  // B3: Đảo ngược chuối
  let revertStr = str.split("").reverse().join("");
  // str.split('') chia chuỗi thành mảng các ký tự.
  // reverse() đảo ngược mảng các ký tự.
  // join('') nối các ký tự trong mảng thành một chuỗi mới.
  return console.log(str === revertStr ? true : false);
}
start(10);
start(20);
start(121);
