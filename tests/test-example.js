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