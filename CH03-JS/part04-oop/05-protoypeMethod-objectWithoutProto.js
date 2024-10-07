//05-protoypeMethod-objectWithoutProto
// 
// chúng ta đang code ở 2024 , ai cũng biết __proto__ là gì 
// xài như thế nào , nhung !!!
// chúng ta phải xem như __proto__ đã bị loại bỏ rồi , không được dùng nữa
// phải xài các method thay thế
// Object.getPrototypeOf(obj) :
// Object.getPrototypeOf(obj, newProto) :
// Object.create(proto, {descriptors})
// - tạo ra object rỗng có [[Prototype]] là proto 
// kèm với các method có bộ mô tả nhưng trong param

let animal = {
    eat: true,
    //__proto__: Object.prototype ==> class Object
};
// trong animal , ngoài eat ra, ta còn có [[Prototype]]
console.log(animal.__proto__ == Object.prototype);


// vì animal đc tạo từ constructor function của Object
// nên animal.[[Prototype]] sẽ là prototype của constructor function
// mà Object.prototype == class Object
// ==>> animal.[[Prototype]] là class Object 
// ==>> animal.__proto__ là class Object 

// prototypal inheritance : kế thừa nguyên mẫu (giữa 2 object với nhau)
//  Cách 1 : 
// let rabbitYellow = {
//     jump : true ,
// };
// rabbitYellow.__proto__ = animal;

// Cách 2 :
// Object.setPrototypeOf(rabbitYellow,animal);
// cách 3 :
let rabbitYellow = Object.create(animal);
// rabbitYello là {} có [[Prototype]] là animal
rabbitYellow.jump = true ;
// Cách 4

let rabbitYellow = Object.create(animal,{
    jump : {value : true , writable : false , enumerable : false , configurable : true},
});

// học cách clone object
// giờ ta muốn clone rabbitYellow thì sao ?
// Cách 1 : spread  : ... : toán tử phân rã : destructuring
let objClone = {...rabbitYellow};
// chỉ lấy đc prop bình thường , ko chép đc bộ cờ
console.log(objClone);// không có nào vì 2 cái enumerable bị false

// cách 2 Object.definePropertíe
let obj2 = Object.defineProperties({},
    Object.getOwnPropertyDescriptors(rabbitYellow)  
);
console.log(obj2);
// đối với cách 2 : sẽ clone đc thuộc tính + bộ cờ , nhưng ko clone được
// [[Prototype]]

// Cách 3 : Object.create(proto,{descriprotr})
let obj3 = Object.create(
    Object.getPrototypeOf(rabbitYellow.__proto__),
    Object.getOwnPropertyDescriptors(rabbitYellow)
);
console.log(obj3);
// tất cả các cách này đều là shallow
// II - very plain object - object siêu phẳng | Base object
//      1. [[Prototype]] của object có thể là Object , class , null, không đc là String
let obj ={}; // tạo ra object rỗng
obj.__proto__ = animal;
// lưu ý : tk ở dòng 70 ko nhận chuỗi(String)
console.log(obj);

// object siêu phẳng : ko có chiều sâu , ko có prototype
obj = Object.create(null);//tạo ra {} và có [[Prototype]] là null
obj.__proto__ = animal ;
console.log(obj);




