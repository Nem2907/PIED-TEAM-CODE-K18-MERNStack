// 03-loop.js
console.log("Bài 3 : Loop - vòng lập");
//reUse : dùng lại , tái sử dụng           -     Repeat : lặp lại
// reUse : sử dụng một thứ gì đó = cách gọi ra , và không biết ta sử dụng bao nhiêu lần
// đại diện : Hàm
// Repeat : làm hành động đó 1 cách đều đặn , đúng giờ , liên hoàn , liên tục trong 1 thời 
//  điểm nhất định
// đại diện : loop : dòng lập
// for | do-while | while

let student1 ={name : "Điệp" , point: 10 , major :"SE" };
//            property|entry
//            key : value 
// đây là object plain : object phẳng
// đặc trưng : ko có chiều sâu, ko có thuộc tính ...
let array1 = [12,17,19];
// bản chất array chỉ là object , và là con trỏ
// array > object > con trỏ
// array1{
//    0 : 12
//    1 : 17
//    2 :19
//}
// array thì vẫn có key : value 
// nhưng thay vì gọi là key , thì người ta thường gọi là index
console.log(student1.name);
console.log(student1["name"]);
console.log(array1[1]);//17
// đây gọi là truy cập = key

// Bàn về các vòng for 
// 1 :Vòng for cơ bản là duyệt từng phần tử trong khoảng từ start đến end theu nhu cầu khai báo
// Ví dụ :
/*
for(let i = 0 ; i <=5 ; i++){
    console.log("Môi em Chi rề");
}
*/

// 2: Vòng for cải tiến : duyệt đến hết  , không vận hành = index 
// duyệt = iterable : tính khả duyệt
// ví dụ ở java : foreach
// + for-in : duyệt các key của object
// cách sài : forin
for (const key in student1) {
    console.log(key);
    // cho vòng for vào trong student1 : chạy qua các key
}
// ứng dụng : lấy ra danh sách thuộc tính trong danh sách mà ta cần fill
// mỗi 1 vòng lập là 1 key 

// nhược điểm : 
// Set : đặc trưng : cấm trùng , dẫn đến việc bị loạn index do bị xóa
// ==> vấn đề của forin
// ví dụ
let demoSet = new Set(["Điệp","Huệ","Lan","Huệ"])
console.log(demoSet);
// trong js , Set được coi là tập hợp loại trùng
// khi loại trùng thì các phần tử không nằm đúng vị trí index(hay là key) ban đầu
// ==> nên key lúc này vô dụng ==> set bỏ luôn key ==> nên key ko có key
for (const key in demoSet) {
    console.log(key);
    // cho vòng for vào trong student1 : chạy qua các key
}
// nếu chạy thì ko thấy được , vì do tk Set đã bỏ key 
// ==> dẫn đến việc ko chạy được dòng lập trên 
// Tóm lại : for-in với set sẽ không đc gì cả , vì set không có key , sao mà duyệt được

// Đa phần các object đều có tính khả duyệt (iterable) - có chiều sâu(iterable) (trừ tk object phẳng),
// Nhưng thường các object mình tự tạo ra nó không có chiều sâu

// tính khả duyệt(khả năng tự duyệt) :em sẽ có 1 tk iterable , đưa cho các phần tử cho nó , và đưa cho mình + xử lý
// không quan tâm đến số lượng + thời gian , cho đến khi không còn phần tử nào cả
// Lưu ý ! : Không phải là đi từ 0 đến cuối 


// for-of | fore : không duyệt bằng index và key , mà duyệt bằng iterable 
// ==> 2 đứa này cực kì ghét object phẳng ==> chê

// +for-of : duyệt value nhưng dùng iterable , và vì vậy nó chê object phẳng

// for (const val of student1) {
//     console.log(val);
// } //bị lỗi là Không phải iterableX`

for (const val of array1) {
         console.log(val);
    }
for (const val of demoSet) {
         console.log(val);
    }

// +fore(method): duyệt val đi kèm key và dùng cơ chế iterable
// xử lý các lần lặp bằng callback 
// bản chất forEach là method ,vẫn là hàm , bản chất hàm này sẽ nhận 1 hàm khác
array1.forEach((val,key) =>{
    console.log(val,key);
});// tổng lần chạy : 3 lần : do có 3 phần tử
// nguyên cục function : là callback
// còn hàm forEach nhận vào là callBackfc
// js rất khoáng trong việc nhận dữ liệu
// callback function : một hàm được gọi lại
// về nhà làm file.doc để học + coi cho dễ

// Hof(Higher-order function) : bao gồm : callback | currying | lexcial scoping

demoSet.forEach((val,key) =>{
    console.log(val.key);
});
/*
    Khi có nhiều vòng for thì sài dòng nào cho hợp lý ?
    ==> for-in duyệt key(chơi được với mọi object) (lưu ý tk Set)
        for-of duyệt value = iterable (chê plain Object - lỗi)
        fore   duyệt value kèm cả value bằn iterable (chê plain Object - lỗi)
*/