/**
3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
 */

let arr2 = [1, 2, 3, 1, 2, 4, 5];
let result = [];
arr2.forEach((value) => {
    if (arr2.indexOf(value) === arr2.lastIndexOf(value)) {
result.push(value);
    }
});
console.log(result);
