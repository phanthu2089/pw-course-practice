## khởi tạo thư mục play wright mới
1. tạo thư mục
2. mở terminal trên thư mục > gõ code .
3. vs code > mở terminal gõ các lệnh sau
4. npm init playwright@latest
5. ✔ Do you want to use TypeScript or JavaScript? · TypeScript
6. ✔ Where to put your end-to-end tests? · tests
7. ✔ Add a GitHub Actions workflow? (y/N) · false
8. ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
9. Initializing NPM project (npm init -y)…


## Đẩy thư mục lên git
1. tạo repository mới
2. copy ssh key
3. vs code > mở terminal
4. lệnh  git init
5. lệnh   git remote add origin git@github.com:phanthu2089/pw-course-practice.git
6. lệnh git add .
7. lệnh  git commit -m "init project"
8. lệnh git push origin main
9. git config --list

## thay đổi repo khác
xóa repo cũ đi : git remote remove origin
xem đang repo nào : git remote -v

### Lession 2: version control system
**git** : phần mềm , pull, push code
**github** : web, chứa code được đẩy lên
vùng 1 : working directory (git init)
vùng 2 :staging area > git add . (add hết) (git add  filename> add 1 field)
vùng 3 : repository > git commit -m ""
phân biệt repository khác với remote repository
## workfollow cơ bản
Không dùng global config :  init > config> add> commit > push
Dùng Global : init > add> commit > push

kiểm tra lịch sử commit : git log
## Convention trong lớp
● Trong lớp học, dùng convention sau: <type>: <short_description>
● Trong đó: ○ type: loại commit
■ **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
■ **feat**: thêm tính năng mới, testcase mới
■ **fix**: sửa lỗi 1 test trước đó
** short_description**: mô tả ngắn gọn (50 kí tự), tiếng Anh


## KHAI BÁO BIẾN
// var : toàn cục
// // let : phạm vi dấu ngoặc nhọn >> Nên dùng let để quản lý phạm vi
// //const : khai báo các giá trị không thể thay đổi

## HÀM IF
// cú pháp if (<điều kiện>) {//code <nếu điều kiện đúng sẽ chạy đoạn code trong này>}
## VÒNG LẶP FOR
//loop: vòng lặp
// dùng để thực hiện 1 đoạn logic 1 số lần nhất định
// cú pháp :  for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {
//code}
//Vd: for (let i =1; i<10; i++) {console.log("giá trị của i là :, i)}

## NOTE
// == > kiểm tra value thôi
// === : so sánh kiểu dữ liệu (string, number) và value
"" >  verify : đúng 100% text
// > verify : contain text

## CÚ PHÁP CHẠY FILE NODEJS
node <tên file>