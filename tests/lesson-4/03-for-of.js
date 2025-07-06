// Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
// 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
/*
let arr6 = [1, 2, 3, 4, 3, 55, 23];

let value = 55;

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] == value) {
        console.log(arr6[i - 1], arr6[i + 1]);
    }
};
*/
//Chữa bài 1:
 //Chữa bài 1:
 const arrNumbers = [1,2,3,4,3,55,3,23];
 function findIndex (arr, number) {
    let firstIndex = -1;
    let lastIndex = -1;
    let index=0;
    for (element of arr) {
        if (element === number) {
            if (firstIndex ===-1) {
                firstIndex = index;
            }
            lastIndex = index
        }
        index ++
    }
    if (firstIndex === -1 && lastIndex === -1) {
        console.log(`số ${number} không tồn tại trong mảng`);}
        else {
            console.log(`firstIndex : ${firstIndex} - lastIndex : ${lastIndex}`)
        }
    }

 findIndex(arrNumbers,3);



 // In ra các vị trí nó có
  const arr1Numbers = [1,2,3,4,3,55,3,23];
  const newArray =[];
  function convertNewArray (number) {
    for (let [index,val] of arr1Numbers.entries()) {
        if(val===number) {
            newArray.push(index);
        }
    }
     return newArray;
  }

  console.log(convertNewArray(3));
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

// chữa bài 2:
//cách 1:
let str = "playwright";
let reversedArray = [];
for (let char of str) {    // for .. of biến mới <char> sẽ duyệt lần lượt các giá trị của chuỗi "playwright"
    reversedArray.unshift(char) // push thứ tự từ sau ra trước mảng > đọc đến p > ghi cuối. l đẩy dần nhau
}
console.log(reversedArray);


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
// lặp các phần tử chỉ xuất hiện 1 lần duy nhất
let arr = [1,2,3,1,2,4,5];
const map = {};
const result = [];
for (let element of arr) {
    map[element] = (map[element]|| 0) + 1; // sao biết trả về string hay number để dùng giá trị của nó sử dụng
    // có 2 cách lấy giá trị 'value' lấy dấu chấm
    //value lấy bằng mọc nhọn []
    // key mặc định của object kà string
}
// mục đích vòng for gán cho element 1 giá trị tạm để so sánh , mỗi lần xuất hiện sẽ cộng thêm 1
for (let element in map) {
    if (map[element]===1) {
        result.push(Number(element)) // object thì luôn luôn là string > push theo kiểu "number" => ép kiểu  (number(tenbien))
    }
}
console.log(result);
console.log(map);

// for in >  lặp xong thao tác trên "key" của nó
// for of > lặp xong thao tác trên "value" của nó
// forEach> lấy value, index

/*const { console } = require("inspector");

const number = [1, 2, 3, 1, 2, 4, 5];
const result = [];
for (let element of number) {
    if (number.indexOf(element) === number.lastIndexOf(element)) {
        result.push(element)
    }
}

console.log(result);
*/

const arr = [1, 2, 3, 1, 2, 4, 5];
function findUniqueElements(arr) {
    // lọc qua phần tử > keỉem tra số lần xuấthiene
    // count + lọc thì + thêm 1
    // kiểm tra nếu phần từ chỉ xuất hiện 1 lần hay count =1 thì push vào mảng kết quả
    let result = [];
    for (let num of arr) {
        let count = 0;
        for (let x of arr) {
            if (num === x) {
                count++;
            }
        }
        if (count === 1) {
            result.push(num)
        }

    }
     return result;

}
let uniqueElements = findUniqueElements(arr);
console.log(uniqueElements);