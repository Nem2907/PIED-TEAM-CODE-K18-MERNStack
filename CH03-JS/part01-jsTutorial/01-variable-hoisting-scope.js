// 2 cơ chế code : normal code : gõ như thế nào thì vẫn chạy
// 2 :
// 01-variable-hoisting-scope.js
// comment : ghi chú
/*

*/
// đây là in . Tương đương với println , sout , cout
console.log("Bài 1 : Variable-hoisting-scope");
// cách khai báo biến: Trong js , sẽ có 3 cách để khai báo
// 1 : var : là đại diện , khai báo một biến có thể số , chuỗi , số thực , số nguyên
// có sự linh hoạt cao và có sự linh hoạt
// thậm chí là có thể var có thể tạo mảng
// nó có thể tạo ra bất cứ thứ gì , chỉ phụ thuộc vào thứ mà ta cung cấp 
// nếu đưa số ==> biến thành số nguyên . Nếu đưa chuỗi ==> biến thành string

// bởi vì nó quá linh hoạt nên có tác hại : vì do nó có linh hoạt nên ta buộc phải định dạng lại biến

// 1- var : xuất hiện từ phiên bản ES đầu tiên
var name1 = "Điệp đẹp trai" ; 
console.log(name1); //Điệp đẹp trai
var name1 = "Điệp 10 điểm" ;  // re-assigning : gán lại giá trị
console.log(name1);//Điệp 10 điểm

// nếu khai báo mà không gán giá trị thì sao ?
var age;
// nếu ko gán giá trị mà khai báo biến
//===> biến age sẽ mang giá trị undefined : ko định nghĩa
age = 10 ;
console.log(age);
console.log(typeof age); // typeof : number

// quy tắc đặt tên biến 
// 1: Không bắt đầu từ số : car1 , oto2
// 2: Nguyên tắc cammelCase , underscore ,PascalCase(UpperCammelCase)
// được phép dùng _(ám chỉ cho biến đang private) và dấu $(ám chỉ có biến đang protected) ở đầu tên 
// vì chỉ có duy nhất modifier là public 
// Hoisting với var()
// Hoisting có nghĩ là móc ngược lên , kéo lên 
// Hoisting là tính năng , không là bug
// máy chủ coi Hoisting là tính năng , không coi là bug
// khi ta dùng var thì mới xuất hiện Hoisting

// nếu 
console.log(msg);//undefined
var msg ="Hello";
// chuyển thành 
var msg;
console.log(msg);
msg ="Hello";

// ví dụ khác

// message = "Thông báo";
// console.log(message);
// tùy vào chế độ mà chúng ta code
// use strict : báo lỗi vì ko có var (ko đc defined)
// còn nếu mà normal code (tắt use strict code): thì sẽ in ra thông báo

// Nói tóm lại   , Hoisting là một tính năng , không được xem là bug
// Hoisting chỉ xuất hiện khi và chỉ khi dùng var
// thay vào đó thì ngta sẽ sài
// + let(ES6 2015 : được coi là tượng đài vì js có class) 
//(ES7 2016) , ... mỗi update cách nhau 1 năm

// + const : hằng số
// và 2 tk này được coi là công cụ để tránh Hoisting

// let và const thì giống var nhưng không Hoisting

// console.log(msg1);
// let msg1 = "Hello"
// console.log(msg1);

//const : hằng số
// const num = 10 ;
// num = 12; 

// nếu sài let và var để định nghĩa biến thì sẽ đưa ra kiểu dữ liệu
// let a = 12 ; ==> a là kiểu dữ liệu là số nguyên bất kì
// nếu sài const thì định nghĩ biến của nó sẽ là chính nó
// const num = 12 ; ==> kiểu dữ liệu = 12

//* const với object
const profile = {
    name : "Toàn",
    height : 160,
};
profile.name ="Toàn cao";
// khi const được tạo ra , thì thứ liên kết giữa const và name là địa chỉ
// khi tạo ra vùng nhớ mới  , nghĩa là địa chỉ sẽ chỉ vào vùng nhớ và 
// cho nên const profile là tạo ra một địa chỉ trỏ vào địa chỉ nơi có object
// mảng là array , array là object , object là con trỏ
// nếu có thay đổi thì sẽ thay đổi giá trị chứ ko thay đổi địa chỉ


//** const với array :
const array1 =[1,2,3,4,5];
array1.push(6);
// Luôn nhớ : Hằng số với địa chỉ chứ ko phải với hằng số
// array1 =[1,2,3,4,5,6]; sẽ bị lỗi
// khi tạo ra mảng thì [1,2,3,4,5] sẽ ở vùng nhớ
// liên kết = địa chỉ

//scope : trong js có 3 loại scope :
// scope : ám chỉ khu vực mà chúng ta có thể thấy được
//  +Global scope : toàn cục : khai báo ở một nơi mà ai cũng có thể thấy được
//  +Function scope : trong hàm : những gì tạo trong hàm thì bên ngoài ko thể đụng vào
//  +Block scope hay còn gọi là local scope : cục bộ . Bao gồm cả function scope

if(true){
    let son = "Toàn" ; // let là gãy
    // var được xem là toàn cục
    //==> lập trình viên ko thích điều này
}
//let | const không hoisting | var có hoisting (use strict)
//          là blockscope    |         var là global scope
// luôn luôn dùng const -==> ko ai chỉnh được
// console.log(a);



// học cho kĩ để 

// 3 tk mạnh nhất : 1: C# 2 :Js 3:Python    


//  dạo gần đây , người ta đang theo hướng ngôn ngữ lập trình hàm
// còn oop thì chỉ mạnh khi theo lập trình game

// Trong js , nó có thể chơi tất cả những ngôn ngữ , bao gồm cả java và database 
// js ko có giới hạn về mặt lưu trữ nhưng có quy tắc về việc đặt tên


