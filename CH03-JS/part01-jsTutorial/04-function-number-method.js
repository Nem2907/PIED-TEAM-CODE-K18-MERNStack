"use strict";
// 04-function-number-method.js
console.log("Bài 4 : Hàm và Các method của Number");
// Hàm trong js được chia làm 2 loại chính 
// Function declaration FD | Function Expression FE
//1. Function declaration FD(khai báo hàm) :
handel1();
function handel1(){
    console.log("Tui là hàm được tạo từ function declaration nè :3");
}

// 2.Function Expression FE (biểu thức hàm)

var handel2 = function(){
    console.log("Tui là hàm được tạo từ function Expression nè :3");
}
handel2();
// điểm hay của FE : cơ chế này sẽ ko tạo ra hoist ing
/*  
    handle2();
    var handel2 = function(){
    console.log("Tui là hàm được tạo từ function Expression nè :3");
    ==> bị lỗi hoisting ==> handel2 not function

    let handel2 = function(){
    console.log("Tui là hàm được tạo từ function Expression nè :3");
    ==> let : can't acccess before init
}
}
*/

// Bonus : 
// 3 :IIFE : immediately invokable function expression
//  hiểu nôm na : 
function handel3(){
    let a = 10 ;
    let b = 20 ;
    console.log(a + b);
}// hàm được viết = hàm declaration

;(function handel3(){
    let a = 10 ;
    let b = 20 ;
    console.log(a + b);
})();
// nên dùng kèm ; ở đâu

// tạo ra hàm dùng liền và ko có tính tái sử dụng
// IIFE + async await (cặp bài trùng)
/*
Ví dụ :
(async function ahihi() {
    let data = await getDataFromSever();
    showData(data);
})();
*/
// CallBack : gọi lại | hàm nhận 1 hàm làm đối số (argument)
// function(a,funct2) gọi là callback(nguyên cục gọi là callback) |còn funct2 là callbackFunction)

let handel4 = function(){//đây là function expression
    console.log("ahhihih đồ chó");  
};

// callback
// setTimeout(callBackFunc , timeout);

setTimeout(handel4,3000);

setTimeout(function() {//đây là function expression
    console.log("ahhihih đồ chó");  
},3000);
// hoặc ta có thể ghi =

setTimeout(() => {
    console.log("ahhihih đồ chó");  
},3000);
// đợi 1 khoảng thời gian = timeout 
// xong rồi gọi hàm callBackFunc
// đây gọi là arrow function
// Arrow Function (là cách viết tắt của FE(Function expression)
// FD|FE|FA có sự khác nhau nhất định

// FD
function handel5(){
    console.log(this);
};
// FE
let handel6 = function() {
    console.log(this);
};
// FA
let handel7 = () =>{
    console.log(this);
};
// một đặc điểm của arrow : nó cực kì ghét tk this  | Nó ghét đến mức cho m ra ngoài để
// kiếm tk bố , nếu có ai gọi nó thì this sẽ nhận ng đó là cha
// còn nếu ko có thì sẽ sút ra và cho rằng ba nó chính là window ==> window là cha nó
// test
//                      useStrict               normal
handel5();           // undefined               window
handel6();           // undefined
handel7();           // window
// ở chế độ useStrict : handel5 và handel6 : nó sẽ giữ để xem ai gọi nó 
// ==> nên mặc đinh cho là undefined vì ko ai gọi
// ở chế độ normal : handel5 và handel6 thì cho rằng cha nó chính là window (bởi vì nó du di cho ta)
// nên trong trường hợp trên , this sẽ ở dạng undefined

// trong js , this là đại diện cho object đang gọi nó 
// FD và FE sẽ giam this(tốt) | nếu có cụ thể object(cha) nào gọi thì giá trị của this sẽ là object đó
// còn nếu ko có ai gọi thì sẽ mặc định là undefined . Ở chế normal code , khi ko ai gọi thì nghĩa là 
// window gọi 

// FA thi luôn sít this ra chuồng gà (sút ra window - global)

let person1 = {
    // prop
    fullname : " Điệp đẹp trai" ,
    // method : function trong object - class
    getNameByFd(){//không có function vì đây là method
        console.log(this.fullname);//this lúc này là undefined vì ko có ai gọi nó
    },//đây là một method đc tạo dưới FD

    // FE
    getNameByFE : function(){
        console.log(this.fullname);    
    },

    getNameByFA : () =>{
        console.log(this.fullname);   
    },
};

let person2 = {
    ...person1,
    fullname : "Hùng"//đây gọi phân rã object
}
//                                use strict
person1.getNameByFd();//    this là person1 ==> person1.fullname : "Điệp đẹp trai"            
person1.getNameByFE();//    this là person1 ==> person1.fullname : "Điệp đẹp trai"  
person1.getNameByFA();//    đá this về window ==> window.fullname : undefined
// ! : this đại diện người gọi nó , chứ không phải là người chứa nó
// this trong js được định nghĩa :người đang gọi cái hàm

/*
    Lời khuyên :
        FD nên dùng làm method trong object vì nó đơn giản và dễ tiếp cận
        FE dùng cho function bình thường và function có this
        FA cho các function khoogn có this 
*/

// phân biệt parameter(tham số) và argument(đối số)
function handel8(a,b = 10){ //b=10 là default parameter
    console.log(a + b);
}
handel8(5);
handel8(5,3); 
// 5,3 đc gọi là đối số argument
// a,b được gọi là tham số parameter

// tham số còn lại | tham số nghỉ | tham số đợi | rest parameter(Không phải spread)
// ... nằm ở parameter gọi là rest parameter
// còn nằm chỗ khác là spread
let handel9= function(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
handel9(2,5,7,9,10);
// phần còn dư thì sẽ làm mảng ở chỗ .... chỗ c
// ==> [7,9,10]

// ứng dụng 
// viết hàm nhận vào 1 đống giá trị số , tính tổng đống số đó
let handle10 = (...numList) =>{
    let result = 0 ;
    numList.forEach((val) =>{
        result += val ;
    });
    return result;
};
console.log(handle10(1,2,3,4,5,6,7,8,9,10,11));

// Number và method của Number 
// Lưu ý ! : Không ai dùng js để làm app Ngân Hàng !
// vì số trong js chỉ có dạng number
// số nguyên trong js chỉ có độ chính xác là 15 số

let x = 9999999999999999;
// đối với số thập phân thì độ chính xác là 17
console.log(x);

x = 0.2 + 0.1 ;
x = (0.2 * 10 + 0.1 *10) / 10 ;     
x = Number(0.2 + 0.1 ).toFixed(1);

console.log(2 + 2);//4
console.log(2 + "2");// 22 vì trong phép cộng nếu có chuỗi thì nó sẽ ưu tiên chuỗi ==> nối chuỗi
console.log(2 + "d");// 2d
console.log(2 - "d");//NaN vì trong chuỗi ko có ngắt 
console.log(2 - "2");//0
console.log(2 / 0);//infinity
console.log(-2 / 0);//-infinity

x = 0o7 ; //octual : hệ 8
x = 0xff; //hexa :hệ 16 :255
x = 10;
x =String(x);
x = x + "";
x = x.toFixed(0) ;
// biến thành chuỗi








// sẽ đúng với java vì nó giống oop
//  nhưng nếu đem qua c# thì nó sai
















/*
nhớ đặt dấu ; ở đầu để tránh việc bị quên ; của câu lệnh khác dẫn đến việc các câu lệnh lồng 
lồng vào nhau
;(function handel3(){
    let a = 10 ;
    let b = 20 ;
    console.log(a + b);
})();

*/
