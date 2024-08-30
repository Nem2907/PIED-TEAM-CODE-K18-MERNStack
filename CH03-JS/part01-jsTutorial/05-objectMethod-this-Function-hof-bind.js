"useStrict";
// 05-objectMethod-this-Function-hof-bind.js
console.log("05-objectMethod-this-Function-hof-bind.js");
//1 : object : đối tượng
//  đối tượng là tât cả những gì sờ được , đếm được , là đối tượng
// ví dụ : con chuột , điện thoại

// các đối tượng , hay gọi là object , có thể được miêu tả = thuộc tính (property)
// ngoài ra các đối tượng còn có hành động đặc trung method(phương thức)
// hàm ở ngoài đc gọi là function 
// hàm trong object được gọi là method

// 
let promotionBoy1 = {
    nickName : " Lê Mười Điệp",//property
    // method : function
    // FD
    sayHi(){
        console.log("Ahihihi quẹo lựa quẹo lựa");
    },
    // FE
    sayHi1 : function (){
        console.log("Ahihih quẹo lựa quẹo lựa");
    },
    // FA
    sayHi2:()=>{
        console.log("Ahihih quẹo lựa quẹo lựa");
    },

}; 
// bởi vì cả 3 method trên đều không có this , nên không có khác biệt
// Hãy nhớ

// và trên thực tế,  FE FD cũng ko có khác nhau quá nhiều về mặt lý thuyết (nhưng có khác nhau
// về mặt kế thừa nhưng quá nhỏ , ko quá lớn , ko đáng kể ==> ko có bị ảnh hưởng)
// và khi tạo method , thì người ta thường FD vì nó cấu trúc khởi tạo giống java==> dễ dùng
// nếu phải viết funtion thì nên chọn FE (về mặt cơ bản thì dùng cả 2)
// còn nếu không có this thì dùng FA
// ta có thể thêm prop hay method sau khi ta đã tạo object
// ví dụ :
promotionBoy1.money = 2000 ;// tạo ra thuộc tính "money" vào trong object
// điều nay ko có ở java vì ở java phải có trong constructor
promotionBoy1.chuiKhach = function(){
    console.log("Under the hood không đc thì cook");
};
// dựa vào hoisting mình hoàn toàn có thể thêm prop và prop chứa function(method)
// vào một object đã được tạo từ trước

// nâng cao 1 tý 
// this trong method 
// (object > method > this) 

let promotionBoy2 ={
    nickName : "Lê Mười Điệp", //prop
    // method
    // FD
    showName(){
        console.log("NickName nè = "+this.nickName); //this lúc này là gì ? undefined
    },

    // FE
    showName1 : function(){
        console.log("NickName nè = "+this.nickName);
    },
    // FA
    showName2 : () => {
        console.log("NickName nè = "+this.nickName);
    },

};
// this là gì ? là object đã gọi nó  , chỉ nó giá trị khi runtime|khi mà
//  hàm được gọi thì this mới có giá trị
// this được bằng object đang gọi method chứa nó (tk nào gọi method nó thì nó sẽ đi theo nó)

promotionBoy2.showName(); // fd  
// this lúc này chính là promotionBoy2 => promotionBoy2.nickName
// nếu hỏi this thì ta phải xét định , nó ở hàm nào ?
//                                     ai gọi ?
//                                     nếu ko có thì đang ở mode nào ?
promotionBoy2.showName1(); // fe
// giống FD
promotionBoy2.showName2(); // fa
// luôn sút this ==> this là window ==> window.nickName là undefined

// khi viết method thì k nên dùng FA vì nó ko thích this(trong method thì rất 
// hay có this) ==> ko nên dùng FA

// nâng cao một tý
// Câu hỏi : Điều gì sẽ xảy ra nếu this nằm trong function của method trong object ?
// (object > method > function > this) : lồng vào 1 lớp hàm nữa 
let promotionBoy3 = {
    nickName : "Lê Mười Điệp",//prop
    // method

    // FD
    showName(){
        let arrow = () =>{
            console.log("NickName: " + this.nickName);
        };
        arrow();
    },
    // FD
    showName1(){
        let expression = function(){
            console.log("NickName: "+this.nickName);
        };
        expression();
        // ko có ai gọi 
    },
};
// test
// promotionBoy3.showName1(); //method : fd > fe > this
// promotionBoy3.showName(); //method : fd > fa > this

// this được xác định là object gọi nó 
// fe là 1 hàm giữ this lại nhưng trong tường hợp này 
// không có ai gọi hàm fe cả 
// thì mình phải xét theo mode 
// use Strict thì là undefined , còn ở normal là Window
//              use Strict                  |           Normal
// this là undefined                        |   this là window
// undefined.nickName                       |   window.nickName
// Lỗi : can't read prop of undefined       |   kq : undefined
promotionBoy3.showName(); // method : fd > fa > this
// vì có this trong fa nên là bị đá ra
// nhưng vì bản chất fd là giữ
// nên this trong này được giữ lại

// phân tích !
// fa vô cùng ghét this , dù ở mode nào , thì cũng bị sút đi
// nhưng may mắn là fa nằm trong fd 
// đặc trung fd là giữ this 
// vậy this sẽ là người gọi m:fd
// hên quá có người gọi m:fd nên ở mode nào thì cũng là người đó
// ==> this là promotionBoy3 ==> promotionBoy3.nickName ==> Lê Mười Điệp

// nếu cần xài 1 hàm , bên trong 1 method thì nên dùng FA 
// dùng theo hướng :  fd > fa > this nếu mà có this lồng trong function 


// this sẽ là câu hoi luôn luôn sẽ gặp ở phỏng vấn

// nâng cao thêm 1 tý nữa 
// this trong function của callback nằm trong method của object thì sao ?
// (object > method > callback(callBackFn > this))
let promotionBoy4 = {
    nickName : "Lê Mười Điệp",//prop
    // method

    // FD
    showName(){
        let arrow = () =>{
            console.log("NickName: " + this.nickName);
        };
        setTimeout(arrow,3000);
    },
    // FD
    showName1(){
        let expression = function(){
            console.log("NickName: "+this.nickName);
        };
        setTimeout(expression,3000); // đợi 3s xong mới chạy arrow
        // ko có ai gọi 
    },
};
// setTimeout xài callBackFn như đang sài ở lớp chứa nó

// nâng có 1 tý 
// tại sao phải dùng this ?
// 
let promotionBoy5 = {
    nickName : "Lê Mười Điệp",
    showName(){
        console.log("NickName nè "+this.nickName); // this lúc này là undefined
        // nếu ở câu trên ko có this thì sẽ bị lỗi nickName là undefined
        // nhưng vì câu dưới gọi thẳng là promotion nên là nó sẽ lấy nickName
    },
};
promotionBoy5.showName();
let promotionBoy6 = promotionBoy5 ;
// hiện tượng 2 chàng trỏ 1 nàng
promotionBoy5 = null ;
promotionBoy6.showName();
// nếu ở hàm show là promotionBoy5.nickName 
// thì nó sẽ bị bug vì do ko có ai chỉ nó do bị null
// nếu ở this thì nó sẽ khác vì mỗi người mỗi khác

// phần khó nhất :
// Nâng Cao : HOF
// Cách học để học tốt : hãy với tâm thế : What
// mình nên biết như thế nào để tạo ra nó ko nên học cách sử dụng
// what - why - how

// Nó trông như nào ? 
// Hof : Higher order function :
// kĩ thuật xử lý hàm bậc cao 

// gồm 3 kĩ thuật lớn : + 1. callback : là hàm nhận vào một hàm làm đối số 
                        //2. closure  : là hàm trả về một hàm khác 
                        //3. currying : là kĩ thuật chuyển đổi một hàm có nhiều parameter
                        //thành nhiều hàm liên tiếp có parameter

// ví dụ : viết hàm nhận vào 2 số , trả ra tổng của 2 số đó
let sumDemo = function(a,b){
    return a + b;
};// fe : function expression
// viết tắt
sumDemo = (a,b) => a + b;

// HOF
// 
sumDemo =(a) =>{
    return (b) =>{
        return a + b ;
    };
};
sumDemo(5)(7);
// bản chất của currying là closure 
// để ý là ở chỗ (b) , nếu ta để ý là a ko có đc khai báo
//  trong return nhưng vẫn chạy đc
// ==> do tác dụng của flexiable scoping

//  viết tắt
sumDemo =(a) =>{
    return (b) => a + b;
};
// thành :
sumDemo =(a) => (b) => a + b ;

// HOF có 3 khái niệm 
// 1. CallBack : hàm nhận một hàm làm đối số(argument) : đây là lúc chạy chương trình
// còn khi mà nói : hàm nhận một hàm làm tham số (parameter) : đây là lúc đang build
const array1 = [1,2,3,4,5];

array1.forEach((val) => {
    console.log(val);
});
//2. closure
// bao gồm 2 kĩ thuật nhỏ : + 2.1 : lexical scoping : hiểu nôm na : hàm con sài biến của tk cha
//   ví dụ :
sumDemo =(a) =>{
    return (b) => a + b;
};
// ở đây thì tk con return(b) sài biến a của tk cha để mà thực hiện +
//                          +2.2 : closure : hàm sẽ trả ra một hàm 
// ứng dụng : tạo ra một hàm mà mỗi lần gọi nó thì nó trả ra một con số mới
// không trùng với con số cũ để key tự tăng
const initIdentity = () => {
    let newId = 0 ; 
    return () =>{
         return ++newId ;
    };
};// hàm này để làm gì ?
console.log(initIdentity()); // nếu gọi ra thì sẽ ra cái hàm () => ++newId;
// nhưng nếu
console.log(initIdentity());
// vẫn như vậy =)))))
// nhưng nếu
console.log(initIdentity()());//ra số 1
console.log(initIdentity()());//ra số 1
// vì nếu sài dấu () thứ 2 thì mới là chạy được chương trình
// xài đúng
let demoForSure = initIdentity(); //() => ++newId;
console.log(demoForSure());// 1
console.log(demoForSure());// 2
console.log(demoForSure());// 3
console.log(demoForSure());// 4


// currying : kỹ thuật chuyển đổi từ 1 function nhận nhiều para thành
// nhiều function liên tiếp có para
// Bài tập ứng dụng
// viết 1 hàm xử lý 3 bài toán sau
// tìm các số từ 0 đến 10 là số lẻ
// tìm các số từ 0 đến 20 là số chẳn
// tìm các số từ 0 đến 30 là số chia 3 dư 2

// callBack : truyền vào hàm kiểm tra số theo yêu cầu 10 phút

let handle = (end,checkNumberFn) =>{
    let result = [];
    for (let i = 0; i <= end; i++) {
        if (checkNumberFn(i)) result.push(i);
    }
    return result;
};
// reUse lại cấu trúc , tạo ra mảng rỗng , tự minh tạo ra phễu
//  tái cấu trúc lồng bên trong
handle(10,(number) => number % 2 != 0);
handle(20,(number) => number % 2 == 0);
handle(30,(number) => number % 3 == 2);

// cái hay của js 
handle = (end) =>(checkNumberFn) =>{
    let result = [];
    for (let i = 0; i <= end; i++) {
        if (checkNumberFn(i)) result.push(i);
    }
    return result;
};
handle(10)((number) => number % 2 != 0);

//call apply bind
const people = {
    print(age,location){
        console.log(this.fullname + " " + age + " " + location);
    },
}

people.print(25,"TP HCM");//undefined
// this ? people : bởi vì this.fullname : ko có thuộc tính 
// people.fullname => undefined

// ta có thể bẻ cong đường dẫn của this bằng call apply và bind
const diep = {fullname : "Điệp 10 điểm"}
people.print.call(diep,25,"TP HCM");
// call : nó sẽ điều hướng ở diep vào undefined
// call : nhận vào object và parameter cũ
people.print.apply(diep,[25,"TP HCM"]);//ở apply thì chỉ cần []
// bỏ parameter cũ ở array
// bind
people.print.bind(diep)(25,"TP HCM");
people.print.bind(diep,25,"TP HCM")();
// nó biến tk print thành hàm mới có diep 
// ứng dụng bind
let promotionBoy7 = {
    nickname : "Lê Mười Điệp",
    showName(){
      let expression = function(){
        console.log(this.nickname);
      }.bind(this);
      expression();
    },
}
promotionBoy7.showName();

// datetime 
// thời gian trong js là object | dựa vào milisecond 
// được tính từ 1/1/1970 theo chuẩn utc
// là ngày máy tính đc bắt đầu 
// có 4 cách khởi tạo

let a= new Date();
console.log(a);
a = new Date("2024-8-17");
a = new Date(2024,7,17,13,45,0,0);
// y / m - 1 / d / h / m / s /sm
console.log(a);
// getDate()        : lấy ngày trong tháng
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn

//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được

// windowObject (wo)
// windowObject (wo) là đại diện cho các cửa sổ trình duyệt
//  tất cả các global Object , function , biến mà tạo bằng var
// thì đều là method | prop của wo
// var là thuộc tính ==> nó bị hoisting

// ngay cả DOM(Document Object Model- là index.html) cũng là của Window
// ví dụ
console.log(window.innerHeight);
console.log(window.innerWidth);

setTimeout(() => {
        window.open("https://iwin.net/?a=582b2beaaff703dd5a032231aa65aca0&utm_campaign=cpd&utm_source=animevietsub&utm_medium=topbanner&utm_content=topbannerg", "_blank", "width = 500,height = 700",);
} , 3000);

// window.location
// chính là href = protocol + hotname \pathname

// trình duyệt cung cấp 3 loại popup
// alert("Máy tính của bạn bị nhiễm virus rồi") ;
// confirm("Bạn đã dính Virus , bạn có muốn tải phần mềm diệt virus không ?");
let sms  = prompt("Are u gay ?", "yes");
