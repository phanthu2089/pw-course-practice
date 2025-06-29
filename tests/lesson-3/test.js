// bài 2:
let arr3 = [];
function oddArray() {
    for (let n = 0; n < 100; n++) {
        if (n % 2 !== 0) {
            arr3.push(n);
    }
}
}
oddArray();
console.log(arr3);
