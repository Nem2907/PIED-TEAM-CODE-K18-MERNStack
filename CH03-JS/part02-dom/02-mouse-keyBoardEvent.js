let btnAdd = document.querySelector("#btn-add");
// trỏ vào cái nút
btnAdd.addEventListener("click", (event) => {
    console.log(event); // sẽ hiển thị thông tin của sự kiện diễn ra
    console.log(event.target);//return ra element vừa dính sự kiện
    // ==> quan trọng vì node fake ko dom nó đc , nên là ta phải target
    // nó để mà có thể điều khiển cách doom giả
    console.log(event.clientX , event.clientY);//viwepojtn
    console.log(event.offsetX, event.offsetY);//theo element
    
    
    //return ra element cừa dính sự kiện
    // cho chúng ta biết là người dùng đã nhấn vào đâu

    // thực hiện ước mơ
    let inputNode = document.querySelector("#name");
    let newItem = document.createElement("li");
    newItem.className = "card mb-3  p-2";
    newItem.innerHTML = `<p>${inputNode.value}</p>`;
    // ${inputNode.value} hay được gọi là templete string
    let list = document.querySelector("#list");
    list.appendChild(newItem);
    inputNode.value ="";
});
// đợi người dùng bấm nút ==> giống trigger
// bấm thì hiện nhưng mất liền
//  lý do : khi bấm vào nút add thì nó tự động reset trang
/*
btnAdd.addEventListener("mouseover", () => {
    console.log("Hello");
});//đưa chuột vào tự động có
btnAdd.addEventListener("mouseout", () => {
    console.log("Hello");
});// đưa chuột vào thì ko có gì hết nhưng đưa chuột ra thì nó hiển thị
btnAdd.addEventListener("dblclick", () => {
    console.log("Hello"); 
});// nhấn 2 lần liên tục mới được
*/ 

//tagret : đối tượng 
let inputNode = document.querySelector("#name");
inputNode.addEventListener("change", (event) => {
    console.log(inputNode.value);
    
});
// keycode 
// keyup , keydown, press,input , change

//dùng cookie | localStorage : để lưu trữ thông tin nhạy cảm
// ko quá quan trọng 
// cookie thì dùng với bên thứ 3
// localStorage : dùng với máy tính
localStorage.setItem("name", "Điệp 10 ring");
// khảo về offset + những thứ ở button

// localStorage chỉ có thể lưu được chuỗi và số mà thôi
// nếu muốn lưu object  | mảng thì phải chuyển thánh chuỗi dạng json

const profile = {
    name : "Điệp Đẹp trai",
    age : 25,
};
console.log(profile);
// để lưu đc thì phải biến thành chuỗi
let str = JSON.stringify(profile);
localStorage.setItem("name",str);

// lấy giá trị từ localStorage ra sài
let data = localStorage.getItem("profile");
let obj = JSON.parse(data);
console.log(obj);


// ôn tập : 
//          + boostrap
//          + function
//          + bài hôm nay