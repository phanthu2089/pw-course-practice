const { ifError } = require("node:assert");

//bài 1
let car = {
    make: "Toyota",
    model: "corolla",
    year: 2021,
}
console.log(car.year);

// Bài 2
let Person = {
    name: "Thu",
    address: {
        street: "234 Cầu giấy",
        city: "Hà Nội",
        country: "Việt Nam",
    }
}
console.log(Person.address.street)

// Bài 3
let Student = {
    name: "Thu",
    grades:
    {
        math: 9,
        english: 8,
    }
}
console.log(Student["grades"]["math"]);
// Bài 4

let Product = {
    pencil: 1000,
    book: 10000,
    rule: 5000,
    noteBook: 8000,

}
for (let key in Product) {
    console.log(`${key} : ${Product[key]}`)

};
for (let meet in Product) {
    console.log(meet + ": " + Product[meet])
    // meet in ra tên biến trong object
    // product[meet] : in ra giá trị tương ứng được gán cho biến
};

//Bài 5.
let settings = {
    volume: 222,
    brightness: 120,
}
settings.volume = 333; // gán lại biến
console.log(settings);
//Bài 6:
let bike = {
    weight: 30,
    size: 14,
}
// thêm thuộc tính color
bike.color = "red";
// bike["type"] = "new";
console.log(bike)
//Bài 7 :
let employee = {
    name: "Thu",
    age: "30",
}
//xóa thuộc tính delete employee.age;

delete employee.age;
console.log(employee);
// Bài 8.
let school = {
    classA: ["An", "Bình", "Châu"],
    ClassB: ["Đào", "Hương", "Giang"],

}
// for (let className in school) {console.log(className + ":"+ school[className]);

// }
