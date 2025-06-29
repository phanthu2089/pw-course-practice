//Bài 1:
function ibmCaculator(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "thiếu cân";
    }
    else if (bmi < 25) {
        return "bình thường";
    }
    else if (bmi < 30) {
        return "thừa cân";
    }
    else {
        return "Béo phì";
    }
}
console.log(ibmCaculator(55, 1.75));
//Bài 2:
let temC = 'C';
function swTemperature(temperature, typeTem) {
    if (typeTem === temC) {
        return temperature * 9 / 5 + 32;
    }
    return (temperature - 32) * 5 / 9;
};
let result3 = swTemperature(86, 'F');
console.log(result3);


//Bài 3:
let numbers = [1, 3, 4, 5, 66, 778];
function sumArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
let total = sumArray(numbers);
console.log(total);
// Bài 4:


let numbers4 = [1, 2, 4, 5, 6, 7, 8, 9, 11, 13, 15];
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n-1; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
for (let j = 0; j< numbers4.length; j++) {
    if (isPrime(numbers4[j])) {
        console.log((numbers4[j]), "là số nguyên tố");

}
};

// Bài 5:
// Khai báo mảng global các object có 2 thuộc tính: name, email
let user = {
    user1: {
        name: "Thu",
        email: "phanthu20@gmail.com",
    },
    user2: {
        name: "Thu2",
        email: "phanthu202@gmail.com",
    }
};
// Khai báo hàm có 2 tham số: name, newEmail
function userInfo(name, newEmail) {
    // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
    //trùng với tham số  name, cập nhật giá trị email về newEmail
    for (let key in user) {
        if (user[key].name === name) {
            user[key].email = newEmail;
            return 'đã cập nhật ';
        }
    }
    return 'user không tồn tại';
};
let result5 = userInfo("Thu", "test01@gmail.com");
console.log(result5);
//Bài 6:
// Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

let scoreStudent = {
    infoStudent1: {
        name: "Alex",
        score: 85
    },
    infoStudent2: {
        name: "Bella",
        score: 90
    },
    infoStudent3: {
        name: "Chris",
        score: 78
    },
    infoStudent4: {
        name: "Diana",
        score: 92
    },
    infoStudent5: {
        name: "Ethan",
        score: 88
    }
};
function avgScore(listStudent) {
let total = 0;
let count =0;
    for (let key1 in scoreStudent) {
        total += listStudent[key1].score;
        count ++;
    }
    return total/count;
};
let result6 = avgScore(scoreStudent);
console.log(result6);

// Bài 7:
/*
Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
“product 1”, price: 100 }
*/

let product = {
  product1: {
    name: "s1",
    price: 100
  },
  product2: {
    name: "s2",
    price: 200
  },
  product3: {
    name: "s3",
    price: 0
  }
};
//7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
function checkPrice(list) {
    for(let key2 in list) {
       if (list[key2].price > 0) {
        console.log("tên", list[key2].name, list[key2].price) }
    }
}
checkPrice(product);

//Bài 7:
/*
Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
“product 1”, price: 100 }
*/

let product6 = {
  product1: {
    name: "s1",
    price: 100
  },
  product2: {
    name: "s2",
    price: 200
  },
  product3: {
    name: "s3",
    price: 0
  }
};
//7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
function checkPrice(list) {
    for(let key2 in list) {
       if (list[key2].price > 0) {
        console.log("tên", list[key2].name, list[key2].price) }
    }
}
checkPrice(product6);
// Bài 8:
/*8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
mở cửa từ 9 giờ sáng đến 9 giờ tối.
*/
function timeOpen(timecheck) {
if ( timecheck >=9 && timecheck <=21) {
    return "Đang mở cửa"
}
return "Đã đóng cửa"
}
console.log(timeOpen(23));

//Bài 9 :
/*
9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
*/
function age(checkPrice) {
if (checkPrice <=5) {
    return 'Miễn Phí'
}
else if(checkPrice >5 && checkPrice<18) {
    return "Giá 50k"
}
else return  "giá 100";

}

console.log(age(18));
//Bài 10:
/*10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
switch...case để xử lý.
*/
function printName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log("Tháng 1");
            break;
        case 2:
            console.log("Tháng 2");
            break;
        case 3:
            console.log("tháng 3");
            break;
        case 4:
            console.log("tháng 4");
            break;
        case 5:
            console.log("tháng 5");
            break;
        case 6:
            console.log("tháng 6");
            break;
        case 7:
            console.log("tháng 7");
            break;
        case 8:
            console.log("tháng 8");
            break;
        case 9:
            console.log("tháng 9");
            break;
        case 10:
            console.log("tháng 10");
            break;
        case 11:
            console.log("tháng 11");
            break;
        case 12:
            console.log("tháng 12");
            break;
        default:
            console.log("giá trị không hợp lệ");

    }

}
printName(12);

//Bài 11:
/*11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
*/
function studentScore11 (scorecheck) {
if (scorecheck >=8) {
    return "Giỏi";
}
else if (scorecheck <8 && scorecheck >= 6.5) {
    return "Khá";
}
else if (scorecheck >=5 && scorecheck <6.5)
{
    return "trung bình"
}
else return "Yếu"

}
console.log(studentScore11(4));
//Bài 12:
/*12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
(>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
*/

function temperature12 (info) {
    if (info >= 30) {
        return "Nóng";
    }
    else if (info <30 && info >=20) {
        return "Mát";
    }
    else return "lạnh"
}
console.log(temperature12(12));
