//Chữa bài 1:
/*
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
*/
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
