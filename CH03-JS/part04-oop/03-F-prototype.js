//  03-F-prototype.js
// trong js người ta thích dùng function hơn class
// bên java nếu muốn tạo 1 object(bức tường)
//          thì mình cần tạo class(khuôn) ==> constructor(phễu)

// bên js : ta không cần class, ta chỉ cần 1 cái hàm là đúc được
// tức là function dùng để tạo object (không cần dùng class gì cả)

function Car(name,price){
    this.name = name;
    this.price =price;
};

let audi = new Car("audi","2 tỷ");
console.log(audi);
// cách khác : ta dùng class để định nghĩa
// ở trong tất cả các constructor , bọn nó có 1 thuộc tính ẩn : prototype
// ở trong tất cả các object , bọn nó có 1 thuộc tính ẩn : [[prototype]]
// prototype : class Car
class car{
    constructor(name,price){
        function Car(name,price){
            this.name = name;
            this.price =price;
        };        
    }
};
let audi1 = new car("audi","2 tỷ");
console.log(audi);
/*

trong audi có gì ?
audi{
    name : "audi"
    price : "2 tỷ"
    [[Prototype]] : prototype của function Car ==> class Car{
                              class car{
                                    constructor(name,price){
                                        function Car(name,price){
                                            this.name = name;
                                            this.price =price;
                                        };        
                                    }
                                };  
                                prototype : class Car{...
                                }
    }

Ý nghĩa prototype : có vật thể nào đc tạo từ nó thì sẽ có [[Prototype]]

}
*/

// vd khác :

let factory ={
    date : 2023,
};
Car.prototype = factory;

let rollRoyce  = new Car("RR", "1,2 tỷ");
/*
rollRoyce{
    name : "RR",
    price: "1,2 tỷ"
        [[Prototype]] : prototype của function Car ==> factory
}   
        hậu quả : ko đảm bảo tiền thân ( constructor ) nếu thay đổi prototype
*/
console.log(rollRoyce);
// Ôn bài
// lưu ý , js không đảm bảo constructor , nếu như ta chủ động thay đổi
//  prototype của constructor 

// Ôn lại bài trên
// F-prototype(Function-prototype) : mặc định là thuộc tính của constuctor function
// mỗi constructor function đều sẽ có prototype
// prototype mặc định là object chứa constructor
//           trỏ ngược lại constructor function đó

function Animal(name){
    this.name = name;
    //có prototype vì đây là constructor
    // chứa class Animal có constructor(name){
    //                          this.name = name
    //                          prototype : class Animal{...}                        
    // }
}
console.log(Animal.prototype);//class Animal
console.log(Animal.prototype.constructor); // Function Animal

let dog = new Animal("Chí pủ");

console.log(dog);
// có [[prototype]] truy cập = __proto__
console.log(dog.__Animal__);//class Animal
console.log(dog.__Animal__ == Animal.prototype);//true
console.log(dog.constructor);//function Animal
 
let newPet = new dog.constructor("Tân ngu");
console.log(newPet);
