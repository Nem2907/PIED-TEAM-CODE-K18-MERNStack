console.log("01-propertyFlag-DescriptionProperty.js");
// propertyFlag - DescriptionProperty : bộ cờ - bộ mô tả   
/*


gồm có 4 thành phần : value : là giá trị của property 
                    + writable : có khả năng ghi đè ==> True thì value sẽ thay đổi
                                                    còn False thì value sẽ không thay đổi
                                                    mặc định là true
                    + enumerable : khả năng nhìn : True thì có thể duyệt trong vòng lặp | 
                                   False thì không thể
                    + configurable : khả năng chỉnh cấu hình : true thì prop có thể cập nhật các lá cờ
                                     false thì ko thể cập nhật đc enumerable
                                     writerable thì từ T --> F đc (F --> T thì ko được)
                                     valie thì dựa vào writable 

Bất cứ property nào của object cũng đều sở hữu 4 lá cờ (1 là cờ )
và có tên là propertyflag - property descriptor
*/
let profile = {
    fname : "Điệp",
    age : 18,
};
profile.fname = "Hùng" ;
//1.ta có thể lấy ra bộ cờ của 1 property bất kì trong object
console.log(Object.getOwnPropertyDescriptor(profile,"fname"));

// lưu ý ở phần property thì ta phải để vào "" vì nó định dạng ở dạng String
/*
{value: 'Điệp', writable: true, enumerable: true, configurable: true}
configurable: true
enumerable: true
value: "Điệp"
writable: true
[[Prototype]]: Object
*/

// 2. Cập nhật / thêm 1 property và bộ cờ của nó
// 2.1 Cập nhật bộ cờ của 1 property trong Object
Object.defineProperty(profile,"fname",{
    writable : false ,
});
profile.fname = "Đĩ Tân";
console.log(profile.fname); // không chạy được vì nó writable 

// 2.2 Tạo mới thuộc tính kèm bộc ờ mô tả
Object.defineProperty(profile,"job", {
    value : "Yang hồ",
    writable : true,
});// còn lại 2 thuộc tính , bộ cờ còn lại sẽ false

// console.log(Object.getOwnPropertyDescriptor(profile,"job"));
//{value: 'Yang hồ', writable: true, enumerable: false, configurable: false}
//  và với enumurable là false thì chúng ta sẽ không thể duyệt được thuộc tính này
// trong các vòng for
console.log(profile);

for (const key in profile) {
    console.log(key);   
}// chỉ có fname và age thôi , vì job là enumerable false


// II- Non-configurable : Không thể cấu hình
/*
configurable : false => nghĩa là không cho ta set giá trị của bộ cờ
                        ngoài trừ writable : T-->F
                        value thì dựa vào writable

người ta thường dùng configurable cho những prop đặc biệt như Math.PI
khi đã congigurable : false thì không thể dùng defineProperty để fix
        configurable về true đucợ nữa

khi đã configuable : false thì :
        - 1 . không thể thay đổi configuable nữa
        - 2 . không thể thay đổi enumerable nữa
        - 3 . không thể thay đổi writable F --> T nữa (T --> F thì đc)
        - 4 . value dựa vào writable
        - 5 . không thể thay đổi đc getter và setter của accessor property
*/

// 3 . Ta có thể định nghĩa, thêm , cập nhật rất nhiều property kèm bộ cờ cùng 1 lúc    
Object.defineProperties(profile,{
    point: {value : 9 , writable : true},
    student_id :{value : "SE111" , writable : true},
});
// ta có thể lấy tất cả các bộ cờ của các property trong object
console.log(Object.getOwnPropertyDescriptors(profile));

// vậy làm sao để mình có thể clone(sao chép , nhái lại) được 1 object
// # spread : ... : phân rã : clone đc các prop bình thường , ko chép đc bộ cờ
let objectClone = {...profile};
console.log(Object.getOwnPropertyDescriptors(objectClone));
//ở đây ko có job , point và student_id vì enumruable đang false nên ko 

// clone thông qua đinh nghĩa
objectClone = Object.defineProperties({},
    Object.getOwnPropertyDescriptors(profile) 
    // tạo ra một object rỗng sau đó thêm vào các prop của profile vào
);
//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện

// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj)
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không  ta dùng Object.isSealed(object)

// Object.freeze(obj)
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Object.isFrozen(object)


// -----------------------------------------------------------------------------------------------------------------

// trong object có 2 loại property :
//                                  1 : Value property
//                                  2 : accessor property

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
console.log(student.fullname);
student.fullname = "Trà Long";
console.log(student);
// lastName : value  writable enumurable configurable
// fullname : get    set      enumurable configurable
console.log(Object.getOwnPropertyDescriptor(student, "fullname"));

// III - getter và setter thông minh , ứng dụng từ accessor property
// + ôn kĩ accessor

// vd : cấm người code set set giá trị có độ dài bé hơn 4
student ={
    fname : "",
    get fname(){
        return this._fname;
    },
    set fname(newName){
        if(newName.length < 4){
            alert("Name is too short");
            return;
        }
        else{
            this._fname = newName;// ở đây là _fname là giá trị thật sự ta sở hưu
            // còn fname chỉ là thứ để nhìn + access

        }
    },
};
student.fname = "Đĩ Tân Ngu";
console.log(student.fname);



