
//Bài 1:
let student = {
  student1: { name: "Alex", age: 10 },
  student2: { name: "Bella", age: 11 },
  student3: { name: "Charlie", age: 12 }
};
// Hàm in ra tên và tuổi của sinh viên
for (let check in student) {
    // console.log("name= ", student[check].name, ", age= " ,student[check].age)
    //cách 2:
    //cách 2:
    console.log(`${student[check].name}= ${student[check].age}`)
  };

    // cách


// Bài 2:
let studentB = {
  student1: { name: "Alex", age: 10 },
  student2: { name: "Bella", age: 11 },
  student3: { name: "Charlie", age: 12 }
};
let sumAge =0;
// tính tổng giá trị số của các thuộc tính
for (let key in studentB) {
    sumAge += studentB[key].age
};
console.log(sumAge);

//bài 2: làm lại
// Bài 2:
let studentN = {
  student1: { name: "Alex", age: 10 , salary:100},
  student2: { name: "Bella", age: 11 , salary:100 },
  student3: { name: "Charlie", age: 12 , salary:100 }
};


// Cách đúng
let sumTotal =0;
for (let element in studentN) {
    for(let check in studentN[element]) {
    if (typeof studentN[element][check]==='number') { //number phải có dấu nháy
sumTotal += studentN[element][check]}
    }

}
console.log(sumTotal);

// Bài 3:
let studentC = {
  student1: { name: "Alex", age: 10 },
  student2: { name: "Bella", age: 11 },
  student3: { name: "Charlie", age: 12 }
};
let nameStudentC = [];
for (let key2 in studentC) {
nameStudentC.push(studentC[key2].name)
};
console.log(nameStudentC);
