/**
1. Chuyển đổi hệ thập phân sang hệ thập lục phân
Trong JavaScript, bạn có thể sử dụng phương thức toString(16) để chuyển đổi một số thập
phân sang hệ thập lục phân. Ví dụ:
let decimalNumber = 120;
let hexadecimalNumber = decimalNumber.toString(16);
console.log(hexadecimalNumber); // Output: 78
2. Hàm toLowerCase và toUpperCase trong JavaScript
toLowerCase(): Chuyển đổi chuỗi thành chữ thường.
toUpperCase(): Chuyển đổi chuỗi thành chữ hoa.
Ví dụ:
let text = "K11 Challenge";
let lowercaseText = text.toLowerCase();
let uppercaseText = text.toUpperCase();
console.log(lowercaseText); // Output: k11 challenge
 */
// Bài 1
// let departturePlanet = "Trái Đất";
// let mission = "Khám phá Vũ trụ K11";
// let crew = ["Thu", "Anh", "Hân", "Nam"];
// function launchShip() {
//     console.log(`Chuẩn bị khởi động ! Phi hành đoàn gồm : ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}! `);
// }
// launchShip();
//Bài 2:
// function calculateDistance(speed, time) {
//     let result = speed * time;
//     console.log(" khoảng cách là: " + result + "km");
// }
// calculateDistance(1000, 24);
// Bài 3
// function convertTimeToHex(time) {
//     let result = time.toString(16);
//     console.log(result);
// };
// convertTimeToHex(120);
// Bài 4
// function decryptCode(code) {
//     let result = '';
//     for (let char of code) {
//         if (char === char.toLowerCase()) {
//             result += char.toUpperCase();
//         } else if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char;
//         }
//     }
//     return result;
// }
// let decrypted = decryptCode("K11 Challenge");
// console.log(decrypted);
// Bài 5
function returnToEarth() {
    console.log("Chuẩn bị trở về trái đất");
};
returnToEarth();
