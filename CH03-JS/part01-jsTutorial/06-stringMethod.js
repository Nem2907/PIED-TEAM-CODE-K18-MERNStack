// 06-stringMethod

console.log("06-stringMethod.js");
// chuỗi trong js được đặt trong dấu ' " `
let str = `ahihi`;
//1. length  là prop của string cung cấp độ dài
console.log(str.length);//5
// 2.indexOf(str) : method nhận vào chuỗi và trả ra vị trí tìm được
// chuỗi đó
console.log(str.indexOf("h"));//1
console.log(str.indexOf("ih"));//2
console.log(str.indexOf("s"));//-1

// tách chuỗi

//1.slice :hay bị nhầm với splice | split : (start,end) : chiết xuất chuỗi con trong chuỗi cha 
// tính từ start đến end - 1 
let x = "xin chào PiedTeam, mình là Điệp";
console.log(x.slice(4,9));//chào
let result = x.slice(9,17);//PiedTeam lưu ý : ở đây kết thúc ở 16 vì end -1 
console.log(result);//để lưu thì ta sài result để lưu vì string là immuntable : ko biến đổi
// string immuntable : là object có method ko làm thay đổi object đó
// mà return object về object kết quả 
result = x.slice(-22,-14);// ở đây thì sẽ đi theo chiều ngược từ p --> x    
// lưu ý ở đoạn -22 , ở đó đúng là -23 mà phải lùi 1 bước lên là -22
console.log(result);
// còn khả năng khác là cắt ngược

//cắt bằng 1 parameter
result = x.slice(9);//PiedTeam, mình là Điệp
console.log(result);

// 3.substring(start,end): chiết xuất một chuỗi con trong chuỗi cha
//                         tính từ start đên end -1 
//                         giống slice nhưng ko có ngược

// 4. substr(start,length) : chiết triết chuỗi có từ start có độ dài
//                           là length
result = x.substr(9,8);
console.log(result);
// II - các method phổ biến
// 1.replace() : thay thế chuỗi
// cho sử dụng string và regex
let str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replace("nhiều","ít");
console.log(str1);//PiedTeam có nhiều bạn rất nhiều tiền
// cách thay thế tất cả chữ thay vì 1 
// replaceAll
str1 = str1.replaceAll("nhiều","ít");
console.log(str1);
// nếu ko dùng replaceAll
// dùng regex
str1 = str1.replace(/nhiều/g, "ít");//g :global
console.log(str);//PiedTeam có ít bạn rất ít tiền

// chuyển đổi hoa thường , .toUpperCase(), .toLowerCase()

// 3. concat() : nối chuỗi
str1 = "xin chào";
str2 = "piedTeam";
str3 = str1.concat(" " , "mừng bạn đến với", " " , str2);
str3 = str1 + " " + "mừng bạn đến với" + " " +str2 ;
str3 = `${str1} mừng bạn đến với ${str2}` ;
console.log(str3);
// 4. trim() : xóa khoảng cách thừa ở 2 đầu
str1 = " xin             chào              các              bạn       ";
str1 = str1.trim();
console.log(str1);//"xin             chào              các              bạn"

// cách 1 : dùng replace 
str1 = str1.replace(/\s+/g," ").trim();// tìm nhiều cách và biến thành 1
console.log(str1);
// cách 2 : pro player có kinh nghiệm xử lý mảng và chuỗi
// sử dụng 3 công cụ : 
// .split
// .filter
// .join
str1 = "       xin             chào              các              bạn       ";
str1 = str1.split(" ")
           .filter((item) =>  item != "").join("-");//.filter là callback
// thuật toán : khi ta một chuỗi , nếu ta sài split : phân sẽ từng đứa
// sẽ có nhiều tk rỗng và phần tử có chữ
// sau đố t dùng filter để lọc những đứa rỗng ra ngoài và sau đó dùng join để
// nối lại những tk chữ
console.log(str1);
// muốn giỏi js , thì phải giỏi callback

// 5.so sánh chuỗi == | ====

// 6. chatAt(index) : trả ra ký tự ở cuh trí index trong chuỗi
x = "Lê Mười Điệp" ;
console.log(x.charAt(3));//M
console.log(x[3]);
x[3] = "L";
console.log(x);


// btvn : Đổi từ "lÊ mườI đIệp" ==> "Lê Mười Điệp"














