// Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
// 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.

let arr6 = [1, 2, 3, 4, 3, 55, 23];

let value = 55;

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] == value) {
        console.log(arr6[i - 1], arr6[i + 1]);
    }
};
/**
2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
“y”, “a”, “l”, “P”] => dua vao bai tap for
 */

let arr7 = "Playwright";
let arr8 = [];
for (let i = arr7.length - 1; i >= 0; i--) {
    arr8.push(arr7[i]);
};
console.log(arr8);

/**
3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
 */

let arr9 = [1, 2, 3, 1, 2, 4, 5];
let result = [];
arr2.forEach((value) => {
    if (arr9.indexOf(value) === arr9.lastIndexOf(value)) {
        result.push(value);
    }
});
console.log(result);