// 06-class-classInheritance.js
// Class là cái khuôn
// bên trong class có constructor là cái phễu , thuộc tính , method 
// class sẽ dung constructor để tạo ra đối tượng (Object)
// mình sẽ học cách tạo ra class

// 
class User{
    constructor(fullname){
        [this.firstName,this.lastName] = fullname.split(" ");
    }

    show(){
        console.log(`FirstName nè ${this.firstName},
                     LastName nè ${this.lastName}`);
    }

}
// tạo thử object từ class có tên là User
let diep = new User("Lê Điệp");
/*
diep{
    firstName : "Lê"    
    LastName : "Điệp"
    [[Prototype]] : class User ==> User.prototype ==> class User
                                        constructor,
                                        show()
}   
 */


// Trong js , hàm sinh ra trước rồi mới tới class
console.log(diep);
console.log(diep.__proto__ == User.prototype);// class User
console.log(typeof User);//Function
console.log(User.prototype.constructor == User);

// class còn được gọi với tên là 'syntactic Sugar'
// 'syntactic Sugar'cú pháp kẹo đường ===> ý chỉ sự thay đổi về mặt
//                                      syntax cho người mới để tiếp cận    

// ta hoàn toàn có thể thay thế class chỉ bằng function
// ta sẽ tạo ra Student là phiên bản nhái lại class User nhưng mà 
// chỉ dùng function

function Student(fname){
    [this.firstName,this.lastName] = fname.split(" ");

}
Student.prototype.show = function () {
    console.log(`
                FirstName nè ${firstName},
                LastName nè ${lastName}
        `);
        
}

// điểm khác nhau giữa việc tạo object tạo class User và    function Student
//          1 : constructor function không cần dùng toán tử new
let hung = Student("Thế Hùng");
console.log(hung); // undefined ==> vì đây là function ko có return
// Student suy cho cùng cũng chỉ là function mà thôi
// nhưng là constuctor function mà thôi
// nếu Student xài mà có new thì nó đc hiểu là constructor function
//          Tạo ra object
// nếu Student xài ko có new thì nó đc hiểu là hàm bình thường thiếu return
// nên dẫn đên việc là log ra undefined
//          2 : về mặt hình ảnh
console.log(User);
console.log(Student);


// III - Class mà ta tạo ở trên là Class Decleraction
// Class Expression
let User1 = class Ahihi{
    constructor(fullName){
        [this.firstName,this.lastName] = fullName.split(" ");
    }
    show(){
        console.log(`FirstName nè ${this.firstName},
                     LastName nè ${this.lastName}`);
    }
}

// let tuan = new Ahihi("Cuoi Tuan") ; Bug vì ko nhìn thấy đc Ahihi
// do scope quá nhỏ để có thể thấy đc , 
// dẫn đến việc trong hàm chỉ có Ahihi nhưng bên ngoài ko ai biết
/*Biểu diên*/ 
// hàm tạo ra class
function makeClass(){
    class Ahihi{
        constructor(fullName){
            [this.firstName,this.lastName] = fullName.split(" ");
        }
        show(){
            console.log(`FirstName nè ${this.firstName},
                         LastName nè ${this.lastName}`);
        }
    }
    return Ahihi;
}
let User3 = makeClass();
let obj4 = new User3("Ahihi");

// ****** Compute Name
// class User4 {
//     firstName : "Nguyễn",
//     ["show" + "Name"](){
//         console.log("Hello");
//     }
// }
// let hue = new User4();
// hue.showName();
// ứng dụng :
// có player , có hàm insertMoney
// gọi hàm = tăng tiền 
// người dùng có hack = cách .insertMoney để tăng tiền
// symbol ?

/*
    Những thứ cần học :
    + Các khái niệm về Oop mà đã ôn trước đó
    + Ôn lại method của Array
    + Ôn lại this
*/ 
// ôn kĩ lại this vì nó khá khó để kiểm soát
// cảnh giác this trong các method của class 
class Button{
    constructor(value){
        this.value = value;
    }
    click(){
        console.log("Giá Trị là " + this.value);
    }
}
let btn = new Button("Ahihi");
/*
btn{
    value : "Ahihi"
    [[Prototype]] : Button.prototype(để truy cập) ==> class Button
                                                      constructor
                                                      click()
}

*/
btn.click();
// hàm click đc tạo từ FD , nên là giữ this để coi ai gọi nó ==> Button.click
// anh muốn hàm click đc chạy sau 3 giây

// setTimeout(btn.click(),3000);
// truyền = btn.click() là sai 
//  vì nếu có () thì hàm này sẽ chạy liền luôn , trước cả khi 3 giây

//setTimeout(btn.click,3000);//giá trị là undefined vì đây là lúc window chạy nên ko có ai xác định
// truyền vào btn.click là đúng
// vì btn.click là công thức , và sau 3s thì công thức đc lôi ra chạy
// xui là trong click có this , à khi công thức đucợ gọi trễ thì không còn người gọi nữa
// this ==> window ==> window.value = undefined

// có 3 cách để chạy để ko bị undefined 

// cách 1 :

setTimeout(() => {
    btn.click();
},3000);
// đưa cho mình một công thức có hàm khác 

// cách 2 : bind : ko ai sài vì nếu sài thì ta phải chỉnh toàn bộ code

// class Button1{
//     constructor(value){
//         this.value = value;
//         this.click = this.click.bind(this);
//     }
//     click(){
//         console.log("Giá Trị là " + this.value);
//     }
// }
// let btn1 = new Button1("Ahihi");

// setTimeout(btn1.click,3000);
// lúc này , một hiện tượng đã xảy ra 
/*
btn1{
    value : "Ahihi"
    click() : lúc này đã được độ lại , điều này dẫn đến việc , bất cứ lúc nào gọi hàm
    thì sẽ auto là btn1.click();
    [[Prototype]] : Button.prototype(để truy cập) ==> class Button
                                                      constructor
                                                      click()
}
    hàm bind : cách sài : đưa về chúng ta một cái hàm
        apply : chạy ra cái hàm luôn 
        ==> ưu tiên bind vì khá giống closure
*/

// cách 3 : dùng arrow

// class Button2{
//     constructor(value){
//         this.value = value;
//         this.click = this.click.bind(this);
//     }
//     click = () =>{
//         console.log("Giá Trị là " + this.value);
//     }// đặc trưng : ko xác định đc this và xác định = môi trường xung quanh nó

// }
// let btn2 = new Button2("Ahihi");
// setTimeout(btn2.click,3000);

// II- class inheritance : kế thừa = class
// Trước khi có class thì chúng ta chỉ có constructor và function mà thôi , 
// việc kế thừa chắc chắn không phải thông qua từ khóa "extends"

// 
class Animal{
    constructor(name){
        this.name = name ;
        this.speed = speed ;
    }
    // method
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed : ${this.speed}`);
    }
    stop(speed){
        this.speed = 0 ;
        console.log(`${this.name} stands still`);        
    }
}
let ani = new Animal("Ahihi chó Tân");

class Rabbit extends Animal{
    constructor(name){
        super(name); // new Animal() ==> new cha
    }
    hide(){
        console.log(`${this.name} hides !!!`);
    }
    stop(){
        setTimeout(() => {
            super.stop;
        } ,1000);        
    }
}
let yellowRabbit = new Rabbit("yellowRabbit");
// yellowRabbit.hide();//
// yellowRabbit.run(6);
// yellowRabbit.stop();
// ani.hide();

/*
    yellowRabbit:{
        name : "yellowRabbit"
        speed : 0
        [[Prototype]] : Rabbit.prototype = Animal.prototype => class Animal
    }
*/
console.log(yellowRabbit);


// class field 

class Animal2{
    name = "isAnimal"; // class field 
    constructor(){
        console.log(this.name);
    }
}

// ban chat cua class field la phien ban ly thuyet cua property 

class Rabbit2 extends Animal2{
    name = "isRabbit";
    constructor(){
        super();
    }
}
let ani2 = new Animal2();//isAnimal
let rb2 = new Rabbit2();//isAnimal 
console.log(rb2);
// class field ko có kế thừa , không có override : vượt mặt : ở trên và ở dưới , chỉ có overWrite :ghi đè : chỉ có 1
// điều j sẽ xảy ra ?


// 8 - static
// static  : tĩnh
// trong java , static nghĩa là prop thuộc về class , instance được phép truy cập 
// và sử dụng , dùng chung với nhau 
// nhưng trong js thì không . Trong js , static nghĩa là prop CHỈ(only) thuộc về class
// các instance không được phép truy cập 

class User9{
    name = "Điệp";
    static name2 = "Lan" ;
}
let obj1 = new User9();
// obj1 có thể truy cập vào name
// nhưng không thể truy cập vào name2

// muốn truy cập
console.log(User9.name2);// Lan

// ------------
class Article{
    constructor(title ,date){
        this.title = title ;
        this.date = date ;
    }
    static compare(articleA,articleB){
        return articleA.date - articleB.date ;
    }
}

let articleList = [
    new Article("Hoài Linh để quên 14 tỷ trong ngân hàng" , new Date(2022,3,6)),
    new Article("Jack bán áo có chữ ký messi để từ thiên" , new Date(2022,0,6)),
    new Article("Người mua áo messi dùng tiền để từ thiện trẻ mồ côi" , new Date(2022,8,6)),
];

articleList.shift(Article.compare);
console.log(articleList);//object không thể sort đc

//Access modifier : đây là đại diện của tính đóng gói trong OOP ở js

//trong js chỉ chia ra 2 là Internal và External interface
// Internal interface - phương thức và thuộc tính chỉ có thể được truy cập bên trong các phương thức trong class, không phải từ bên ngoài.
// External interface - phương thức và thuộc tính có thể truy cập được từ ngoài và trong class.
// Trong Javascript, có 2 loại thuộc tính và phương thức:

// Public: có thể truy cập từ bất kỳ đâu. Nghĩa là external interface. Cho đến bây giờ thì chúng ta chỉ sử dụng thuộc tính public
// Private: có thể truy cập bên trong class. Nghĩa là internal interface
// Trong nhiều ngôn ngữ khác thì còn tồn tại trường "protected": chỉ có thể truy cập bên trong class và những class kế thừa.

// Trường Protected không được quy định trong Javascript ở cấp độ ngôn ngữ, những trong thực tế để cho tiện lợi thì chúng ta có thể giả lập để quy ước với nhau.

//ReadOnly
//nếu khai báo get mà k có set, thì nó sẽ thành readOnly, không đổi giá trị đc
//nếu không có set/get thì nó tự tạo , sẽ gán bt
//các dev quy ước tên _ ở trước là private chỉ dùng trong class, nên truy cập bằng get/set
//không nên . tới
//việc quy ước này không đảm bảo được ngôn ngữ, chỉ là quy ước
 
class CoffeeMachine{
    #power;
    constructor(power){
        this.#power = power ;
    }
    get Power(){
        return this.#power ;
    }
}
let cfm1 = new CoffeeMachine(100);
// lưu _power
console.log(cfm.power);
cfm1.power = 1000 ;
cfm1._power = 1000 ;// thoải mái (người ko thích là sếp)
// cfm1._power = 1000 ; // lỗi
console.log(cfm.power);



