// cân nặng lý tưởng = số lẻ của chiều cao *9/10
// mức cân tối đav= số lẻ của chiều cao
// mức cân tối thiểu = số lẻ chiểu chiều cao *8/10

let height = 155;
let targetWeight = (height-100) *9/10;
let maxWeight = height -100;
let minWeight = (height-100)*8/10;

console.log (targetWeight + " là cân nặng lý tưởng ," + maxWeight + " là cân nặng tối đa," + minWeight + " là cân nặng tối thiểu.");
