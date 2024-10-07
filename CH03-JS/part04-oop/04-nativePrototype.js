// 04-nativePrototype 
// nativePrototype : prototype nguyên bản

// Thuộc tính protorype của constrctor function được sử dụng rộng
//  rãi trong js
// mọi constuctor function trong js đều sẽ có prototype 
// [[Prototype]] là một thuộc tính ẩn của object , là đại diện
//cho prototype thực thể    

// __proto__ là get và set(accessor property) của [[Prototype]]


let obj = {};//một đối tượng ko có bất kì thuộc tính nào
// obj = new Object()
console.log(obj.toString());

console.log(obj.__proto__ == Object.prototype);//class
// Object bản chất ko phải là class, nó chính là hàm, constructor vì nó . để ra define hoặc get
// muốn có class thì .prototype
// ví dụ khác : Array chính là hàm
// để có class thì Array.prototype
console.log(Object.prototype.__proto__);//null
console.log(obj.__proto__.__proto__);//null
// luôn nhớ : tiền thân của Object là null

// -------------------------------------------------------------
let mang1 = [1,2,3];
console.log(mang1.__proto__); // class Array
console.log(mang1.__proto__ == Array.prototype);
console.log(Array.prototype.__proto__ == Object.prototype); // true
console.log(mang1.__proto__);// class Array
console.log(mang1.__proto__.__proto__);// class object
console.log(mang1.__proto__.__proto__.__proto__);// null
console.log(mang1.__proto__.__proto__ == Array.prototype.__proto__);

// nếu mang1.toString() thì nó xài toString của Array hay Object

// 
let a = 5 ;// nhìn như primitive nhưng thực chất là Object
// Tuy js hướng hàm nhưng xung quanh đều là Object
console.log(a.__proto__);// class Number
console.log(a.__proto__ == Number.prototype);// true











