// //Bài 1
let arr1 = [1, 2, 3, 4, 5, 67, 8, 7];
arr1.forEach((value) => {
    console.log(`${value}`);
});ß

//Bài 2:
//a. Tìm số lớn nhất trong mảng
let arr2 = [1, 2, 3, 4, 5, 67, 8, 7];
let maxArray = 0;
arr2.forEach((value) => {
    if (value > maxArray) {
        maxArray = value // Tìm phần tử lớn nhất trong mảng
    };
});
console.log(maxArray);
//b. Tính tổng của mảng
let total = 0;
arr2.forEach((value) => {
    total += value // tính tổng tất cả các phần tử
});
console.log(total);

// Bài 3
let arr3 = [1, 3, 4, 56, 78, 8, 9, 7];
let arrNew = [];
arr3.forEach((value) => {
    arrNew.push(value * 2) // Nhân đôi phần tử khi thêm vào mảng mới

});
console.log(arrNew);

