//1. Tính tổng từ 1 đến 100.
let total = 0;
for (let i = 0; i <= 100; i++) {
   total += i;
}
console.log(total);
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

//bài 3:
/*
4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user-1@example.com, user2@example.com, ..., user10@example.com).
*/

const { createDiffieHellmanGroup } = require("node:crypto")

let userList = {
   user1: {
      name: "testuser1",
      order: 1,
   },
   user2: {
      name: "testuser2",
      order: 2,
   },
   user3: {
      name: "testuser3",
      order: 3,
   },
   user4: {
      name: "testuser4",
      order: 4,
   },
   user5: {
      name: "testuser5",
      order: 5,
   },
   user6: {
      name: "testuser6",
      order: 6,
   },
   user7: {
      name: "testuser7",
      order: 7,
   },
   user8: {
      name: "testuser8",
      order: 8,
   },
   user9: {
      name: "testuser9",
      order: 9,
   },
   user10: {
      name: "testuser10",
      order: 10,
   },
}
function emailCreate() {
   for (let key5 in userList) {
      let name = userList[key5].name;
      let order = userList[key5].order;
      console.log(`${name}-${order}@example.com`);
   }
}
emailCreate();

// Bài 4
// Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

let revenueData = [
   { month: 1, total: 100 },
   { month: 2, total: 150 },
   { month: 3, total: 200 },
   { month: 4, total: 250 },
   { month: 5, total: 300 },
   { month: 6, total: 180 },
   { month: 7, total: 220 },
   { month: 8, total: 270 },
   { month: 9, total: 230 },
   { month: 10, total: 310 },
   { month: 11, total: 400 },
   { month: 12, total: 500 }
]
function revenue() {
   let totalRevenue = 0;
   for (let i = 0; i < revenueData.length; i++) {
      totalRevenue += revenueData[i].total;
   }
   return totalRevenue;
}
let result10 = revenue();
console.log(result10);

