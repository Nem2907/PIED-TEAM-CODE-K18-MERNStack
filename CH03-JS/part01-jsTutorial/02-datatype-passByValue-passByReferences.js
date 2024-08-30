// 02-datatype-passByValue-passByReferences
console.log("Bài 2 : kiểu dữ liệu - truyền tham trị - truyền tham chiếu");
// I-1 : primitive  datatype : kiểu nguyên thủy : những tk quá nhỏ để tách nhỏ
/*
    +number: 1 , 12 , 14.6 : số nguyên , số thực đều như nhau
    +String : '1000' , 'xin chào'
    +Boolean : True (1) | False(0) -0 => false
                                  -1 => true
    tất cả các số đều true trừ 0 và -0
    tất cả các số nhiều là số nhiều trừ 1
    +null : là giá trị rỗng nhưng biết kiểu dữ liệu nhưng ko biết giá trị cụ thể là bao nhiêu
    nhưng biết kiểu dữ liệu
    trong js ko có xuất hiện null 1 cách tự nhiên 
    nếu anh đưa em object mà em ko đưa anh gì hết thì anh sẽ cho nó là null
    
    +undefined : giá trị rỗng - ko có kiểu vì ko có khai báo kiểu
    symbol(ES6) : tạo ra 1 cái chuỗi một cái chuỗi một cách ngẫu nhiên để đặt tên biến
                  làm cho mình ko biết và cả hacker ko lấy được
    
    Null và undefined khác nhau như thế nào ?
*/
console.log(typeof null); //Object
// object được coi là primitive object vì nó quá nhỏ để tách 
// null là đỉnh của cây phả hệ , là nguyên thủy nhất
// được coi là tiệm cận của object vì null được cho là đỉnh của cây nguyên thủy , cây phả hệ
// là thứ sản sinh ra mọi thứ

// tuy nhiên nó lại xếp ở primitive datatype 
console.log(typeof undefined);//undefined 

console.log(null == undefined);//true : vì đều là giá trị rỗng
console.log(null === undefined);// false : vì đều là giá trị rỗng nhưng ko có giống về kiểu
// == : so sánh giá trị (bao gồm ép kiểu và unboxing trong wrapper và class)
// === : so sánh giá trị và kiểu


// tạo {} là object
// console.log(0.1+0.3);
// let a = [1,4,10,12,11]
// a= a.sort();
// console.log(a);
// js ko được dùng để tính toán vì rất yếu

// 
console.log(2 == "2"); // true
console.log(2 === "2"); // false

// undefined trong parameter của function 
function handel1(a,b){
    return b;
}

let c = handel1(5);
console.log(c);//undefined 
// null chỉ xuất hiện ở object
// funtion ko return nghĩa là return undefined
// undefined trong thuộc tính của object

let tan = {
    name : "Bá Tân" , height : 165
}
// bản chất của object là hoisting cục bộ
//  bản chất ta ko được sài tan ở trên
// nhưng có thể thêm thuộc tính cho Tan
console.log(tan.NguoiYeu);//undefined 
tan.money = 10000 ;
console.log(tan);


// null là biết kiểu dữ liệu nhưng không biết giá trị

let str = ""; //gọi là chuỗi rỗng ko đc gọi là rỗng
// rỗng sẽ có null và undefined 
// còn tk trên được gọi là chuỗi rỗng 
// chuỗi rỗng vẫn là chuỗi vẫn sài những method bình thường
// null thì khác , null chỉ là rỗng thuộc về object nên là ko thể chấm để thể hiện
// thuộc tính của những kiểu dữ liệu
str.concat("ahihiih");

// null và undefined thì sẽ không có thuộc tính trong mạch lưu trữ , nên ta không nên lưu
// null , để tránh việc sử lý vào null làm crash app ==> sever sập

//I-2: Object datatype : khác primitive 
// plain Object : object phẳng
let student = {name : "Tùng" , point : 10} 
//                  property | entry
//                      key(name , point) : value (Tùng, 10) 
// phẳng : ko có cấu trúc về chiều sâu 
console.log(student.name);
console.log(student["name"]);

// Array: là cách khai báo nhiều biến , cùng tên , cùng lúc , không cùng kiểu
let flowerList = ["Huệ" , "Cúc", "Lan"];
console.log(flowerList);
// Array là object có key và value   

// regular expression : regex là Object(vì regex là String , String là Object)
let regex1 = /SE\d{9}/;
console.log(typeof regex1);
console.log(handel1.prototype);//prototype : cha sinh má đẻ : object
// là hàm . Tiền thân của hàm : Object , bởi vì trong sơ đồ gia phả
// thì nó đc hình thành từ object

//Function có typeof function , có prototype , gốc gác sâu hơn là object
console.log(10 / "d"); //NaN : Not a number
// NaN là một trạng thái của một number 
console.log(typeof NaN); // có kiểu là number vì nó đc xem là trạng
// thái của một number
console.log(NaN == Number); // false vì một đứa là kiểu còn một đứa là
//                              trạng thái
console.log(NaN == NaN);// false : vì trạng thái ko ai giống nhau

// tất cả cách khai báo primitive đều có thể khai báo bằng constructor 
// Wrapper Class : class bao bọc 
let str1 = "ahihi";
str1 = new String("ahihi");
// ko trỏ trực tiếp vào nhau mà thay vào đó trỏ vào địa chỉ của nhau
console.log(str1);
// ==> nhờ cơ chế auto-unboxing
console.log(str1 == "ahihi");//true : so sánh nhưng có thể ép kiêu + auto-unboxing
console.log(str1 === "ahihi")// false 
console.log(str1.valueOf() === "ahihi")//true
// valueOf : mở giá trị ở trong array ra
// dùng wrapper class để ép kiểu 
let year = String(1999) ;
console.log(year);

// bàn riêng về boolean
console.log(Boolean(1999));// true
console.log(Boolean(0));//false
console.log(Boolean("0"));//true
console.log(Boolean(""));//false
console.log(Boolean(" "));//true
console.log(Boolean(null));//false
console.log(Boolean({}));//true : bản thân object vẫn là một thuộc tính
//                                ở trên bộ nhớ vẫn có ==> true
console.log(Boolean([]));//true : mảng đã là con trỏ thì có địa chỉ ==> true
console.log(Boolean(10 / "d"));//false : trạng thái ko sở hữu giá trị
console.log(Boolean(false));//false

// cách xác định Falsy : đối với js , những gì không chauws giá trị đều là false
// null, undefined , 0 , -0 , false , NaN : false hết

// cách xác định True : ngược lại với falsy
// chuỗi khác rỗng , số khác 0  và - 0 , object đều true

// pass by Value : truyền tham trị 
let a = 1;
let b = a ;
b += 2 ;
console.log(a,b);
// vd2:
let point = 4 ;
// hàm sửa điểm cực căng
function updatePoint(currentPoint){
    currentPoint = 10 ;
}
updatePoint(point);
console.log(point);


// 2. pass by references : truyền tham chiếu 
let boyFriend1 = {
    name:"hotGirl", size:"B cub"
};// boyFriend1 trỏ về vùng nhớ và cái vùng nhớ dẫn đến boyFriend1
// 2 anh trỏ cùng 1 địa chỉ
let boyFriend2 = boyFriend1; //hiện tượng 2 chàng trỏ 1 nàng

boyFriend2.size = "H cub";
// vì lý do trên nên B cub đổi thành H cub
console.log(boyFriend1);



// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán = 
2  Comparison            so sánh ==  ===
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
//
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
//

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)

console.log(2 == "2"); // true
console.log(2 !== "2");//true 
console.log(2 != "2");//false

//toán tử 3 ngôi
let diep = "đẹp trai"

let isDepTrai = diep === "đẹp trai";
// cơ chế pool
console.log(isDepTrai);


console.log("b" + "a" + + "a" + "a");//baNaNa

//logical 
 
//&& , || và !

// && là tìm false
// || là tìm true

console.log(0 && 1); //0
console.log(0 || 1 || 4);//1
console.log(0);// 0
console.log(!0);// true
console.log("");//
console.log(!"");//true : ! là boolean
console.log(!"" && 0 && 1);//0

// 
 
// 
/*
flowerList{
    0:"Huệ",
    1:"Cúc",
    2:"Lan",
    }
*/




