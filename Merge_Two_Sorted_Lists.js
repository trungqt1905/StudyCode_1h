var mergeTwoLists = function (list1, list2) {
  let mergedList = [];
  let i = 0;
  let j = 0;
  // So sánh hai phần tử từ danh sách và thêm phần tử nhỏ hơn vào danh sách kết quả
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      mergedList.push(list1[i]);
      i++;
    } else {
      mergedList.push(list2[j]);
      j++;
    }
  }

  while (i < list1.length) {
    mergedList.push(list1[i]);
    i++;
  }
  while (j < list2.length) {
    mergedList.push(list2[j]);
    j++;
  }
  return mergedList;
};

console.log(mergeTwoLists([1, 3, 5, 7], [2, 4, 6, 8]));
