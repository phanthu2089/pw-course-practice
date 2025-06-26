## GIT
1. lịch sử câu lệnh : git log
2. git commit -- amend : sửa message > vào chế độ insert > bấm i trênn bàn phím > sửa xuống  > bấm esc  > bấm :wq
3. câu lệnh ngắn hơn : git commit --amend - m"message"
4. thoát git log > lệnh q
## update file từ staging về working directory (back lại file )
git restore -- staged <tên file>

## Undo commit (đưa từ vùng repository về working directory )
git reset HEAD~1 // UNDO 1 commit >> hạn chế dùng
## Branching model
branch : tạo vùng làm việc mới không ảnh hưởng đến vùng làm việc hiện tại
1. tạo branch : git branch <tên branch>
2. checkout : git checkout <tên branch>
3. tạo + checkout branch  : git checkout -b <tên branch>
##Javascript
## git igonre
dùng để bỏ qua các file khoong cần theo dõi
1. bỏ qua file : .gitignore fiel
2. bỏ qua folder : folder-name/
# Convention
1. kebab-case: khai báo tên file
2. camelCase: khai báo tên biến vd: cameCaseNowNow
3. pascalCase : khai báo tên class vd : export class BasePage (viết hoa chữ đầu)
# console.log
1. có thể dùng nháy đơn hoặc nháy kép hoặc dấu  ``
2. ${a} : in giá trị biến a
3. công chuỗi : dùng "+" hoặc ","
## Object
object : Đối tượng dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số
1. Khai báo : dùng let hoặc const
2. vd let <tên-object> = {<thuộc tính>: <giá trị>,cách nhau dấu phẩy}
- thuộc tính : giống quy tắc đặt tên biến (chữ đầu viết thường, các chứ đầu sau viết hoa)
- Giá trị : có kiểu giống viên hoặc là 1 object khác
- Truy xuất giá trị của <thuộc tính> bằng dấu chấm . console.log(Student.adresss.country);
- truy xuất bằng dấu ngoặc vuông <tên biến> console.log(Student["phoneNumber"]); tên biến truy cập trực tiếp trong ngoặc vuông cần có dấu nháy kép, truy cập giá trị biến thông qua tên biến thì không cần dấu nháy kép
- thêm thuộc tính vào object : chỉ cần dấu . hoặc vuông [] để định nghĩa vd: bike.<tên thuộc tính mới> = "giá trị thuộc tính mới" hoặc bike["<tên thuộc tính mới>'] = "<giá trị thuộc tính mới>"
- xóa thuộc tính của object : dùng hàm delete ; delete employee.age
**Ghi chú** : **Const khai báo biến không thể thay đổi được, nhưng các thuộc tín:h trong biến vẫn có thể thay đổi được**

## Logical Oparator
1. && : cả 2 vế của mệnh đề đều dúng
2. || : 1 trong 2 vế đúng
3. ! : đảo ngược lại giá trị của mệnh đề

## Mảng array []
1. dùng để lưu danh sách các phần tử
2. cú pháp const arr = [1,2,3,4];
3. xem độ dài của mảng : **tênbien.length**
4. Lấy phần tử theo index : tenbien[0]
## Function :
Function : hàm là đoạn code được đặt tên và có thể tái sử dụng được, thực hiện 1 nhiệm vụ cụ thể hoặc tính toán cụ thể
1. Khai báo : function <nameFunction>() {//code}
2. sử dụng : <nameFunction>();
## Parameter
Truyền tham số vào hàm function > khai báo tham số cần dùng ở hàm sử dụng ()
