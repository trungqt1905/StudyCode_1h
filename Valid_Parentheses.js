/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'
, determine if the input string is valid.
An input string is valid if:

( + ) Bạn cần kiểm tra tính hợp lệ của một chuỗi chứa các dấu ngoặc mở 
(, {, [, và dấu ngoặc đóng ), }, ]. Một chuỗi được coi là hợp lệ nếu:
 1 . Dấu ngoặc mở hoặc đóng bằng các dấu ngoặc cùng loại
 2 . Các dấu ngoặc mở hoặc đóng theo đúng thứ tự
 3 . Mỗi dấu ngoặc đóng phải có dấu ngoặc tương ứng cùng loại
 
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

let Valid_Parentheses = (s) => {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      // Nếu char là một dấu mở ngoặc, đẩy dấu đóng tương ứng vào stack
      stack.push(map[char]);
    } else {
      // Nếu char là một dấu đóng ngoặc, kiểm tra xem nó có khớp với dấu mở ngoặc trên cùng của stack không
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  // Nếu stack rỗng, tất cả các dấu ngoặc đều khớp
  return stack.length === 0;
};

console.log(Valid_Parentheses("()")); // true
console.log(Valid_Parentheses("()[]{}")); // true
console.log(Valid_Parentheses("(]")); // false
console.log(Valid_Parentheses("([)]")); // false
console.log(Valid_Parentheses("{[]}")); // true
