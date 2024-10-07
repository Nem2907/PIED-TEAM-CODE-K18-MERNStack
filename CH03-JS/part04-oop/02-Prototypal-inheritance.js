// 02 : 02-Prototypal-inheritance
// 02-Prototypal-inheritance : kế thừa nguyên thủy (kế thừa 2 object với nhau)
// [[Prototype]]
// nhớ rõ , vì ta còn gặp : 
// __proto__
// Trong bất cứ object nào , thì cũng luôn có 1 thuộc tính ẩn , gọi là [[Prototype]]
// [[Prototype]] là thuộc tính chứa thông tin tiền thân của object đó 
//               chứa thằng tạo ra nó | cha nó
//          Ta không thể .[[Prototype]] được
//          Muốn truy cập vào [[Prototype]] thì phải thông  qua
//  acccessor property có tên là __proto__
// Nhớ Kỹ !!

// __proto__ ko phải là prototype chứ nó ko với [[Prototype]] ko phải 1 cặp
//  nó là bộ truy cập của [[Prototype]]

let longEar = {
    ear : "long",
};
let pinkRabbit = {
    jump : true ,
}
let congido ={
    eat : true,
    walk(){
        console.log("Tui chạy bộ nè");
    },
}
// ở đây thì , 3 đứa này đều ko có liên quan nhau

//congido là con của pinkRabbit
// vì [[Prototype]] là nơi chứa tiền thân của nó
congido.__proto__ = pinkRabbit; 
// nhận longEar làm ông
congido.__proto__.__proto__ = longEar ; // đi 2 lần
console.log(congido);
// cách học 

// congido > pinkRabbit > longEar
//  con        cha           ông

console.log(congido);
console.log(congido.ear);//long
console.log(pinkRabbit.eat);//ko được vì cha ko đc lấy các prop của con
console.log(pinkRabbit.ear);//long

// giờ tao muốn congido cập nhật ear thành short
congido.ear = "short";// js sẽ không cập nhật tk ear của cha
// vì nó sẽ ảnh hưởng các tk con khác 
// thay vào đó , nó sẽ tạo ra 1 ear khác ngay trong lớp của nó
//  ==>congifdo có 2 ear 
//  đây được gọi là override
// khi nó xài thì nó ưu tiên xài ear gần nhất
console.log(congido.ear);//short
// nhưng nếu ta sài 
console.log(pinkRabbit.ear);//long
//  không dùng đc thuộc tính của tk con
congido.__proto__.__proto__.ear = "short";
// Lưu ý với __proto__ :
// Trước ES6(2015) không có cách nào để truy cập vào [[Prototype]] cả
// hầu hết các trình duyệt thêm vào acccessor property __proto__
// __proto__ không phải là cách truy cập chính thống của js
// __proto__ tính tới thời điểm hiện tại vẫn chưa bị loại bỏ
//  vì từ hồi xưa các hệ thống lên đã sài , nên nếu bỏ = bug
// __proto__ có thể thay thế bằng
// Object.getPrototypeOf(obj)
// Object.setPrototypeOf(obj,obj2)

// ví dụ nâng cao

let student = {
    lastName :"Điệp",
    firstName : "Lê",
    get fullname(){
        return this.firstName + " " + this.lastName ;
    },
    set fullname(newName){
        [this.firstName , this.lastName] = newName.split(" ");
    },
};

let user = {
    isUser: true,
    __proto__:student,
};//đối với accessor property : chúng ta sẽ đc thừa hưởng, truyền từ đời này sang đời khác
// không có xu hướng giữ cho riêng nó
user.fullname ="Trà Long";
// nếu ta sài vậy thì , sẽ sinh ra 1 user để chữ Trà Long
// nếu ta thay thế vào trong thì ta sẽ bị hiện tượng domino do thay đổi cha
console.log(user);
                     