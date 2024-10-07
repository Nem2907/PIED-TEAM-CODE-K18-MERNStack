// 01-json-apax-fetch.js

// json : javascript object notation
//  - là một chuỗi được viết dưới dạng js object
// - dùng để lưu trữ và trao đổi dữ liệu giữa các ngôn ngữ khác
// - có thể lưu trữ dữ liệu các dạng : number , string , boolean , array , object , null(không nên lưu)
// - có 2 thao tác chính : JSON.parse và JSon.stringify
// ví dụ
const obj1 = {
    name : "Điệp đẹp trai",
    age : 22,
    status : " Hay giận dỗi ",
    study(){
        console.log("Hello");
    },
}
// từ obj biến thành Json thì sài .parse
let myJson = JSON.stringify(obj1);
console.log(obj1);
console.log(myJson);
//==> {"name":"Điệp đẹp trai","age":22,"status":" Hay giận dỗi "}
// hay còn nói , status==> method
// cú pháp của JSON
//  - với object thì data là cặp key : value (prop)
//  - data được ngăn cách bởi dấu ,
//  - object được bao bọc bởi dấu {}
//  - array được bao bọc bởi []
//  - String thì được bọc bởi ""
//  - key phải là String và được bọc bởi ""
//  - value phải thuộc các dạng : number, string , boolean, array , object ,null
// không lưu trữ đc function và method

// đoán đáp án
let arr = ["cam", 22,"chuối","ổi"];; //"cam" , 22 ,"chuối" ,"ổi"
let a = 1 ; //'1'
let str ="ahihi"; // '"ahihi"' ở đây nó có nháy đơn và bên trong có nháy đôi 
let bool = true ; // 'true'
console.log(JSON.stringify(str));

// AJAX : Asynchronous Javascript and XML
// học từ đầu khóa đến giờ
// Luôn nhớ : AJAX không phải ngôn ngữ lập trình
// AJAX là kết hợp của nhiều công nghệ 
//   -HTML : hiển thị dữ liệu và giao tiếp người dùng
//   -Css : trang trí cho giao diện
//   -js  : xử lý logic
//   -XML : định dạng dữ liệu cần lưu trữ (ít sử dụng)
//   -JSON : định dạng dữ liệu cần lưu trữ

// JS và DOM    

// AJAX giúp chúng ta đọc dữ liệu từ server trả về
//  -giúp gửi dữ liệu lên server ở chế độ ngầm
//  -Cập nhật trang web mà không cần reset trang 
//  -là nền tảng phát triển của React , Angular , Vue

// các cách để giao tiếp với 1 server side :
// 1.XMLHttpRequest(XHR) : đây là phương pháp giao tiếp cổ xưa nhất

// 2.FetchAPI : cung cấp cho mình khả năng gửi request / nhận response thông 
// qua trình duyệt lên server
// request : yêu cầu : mình đòi server hứa với mình
//                     đang ở trạng thái pending và bắt đầu trả dữ liệu
// Fetch dùng công nghệ Promise mà thôi , bản chất Fetch là một cái hàm biến nó thành lời hứa

// cần chuẩn bị server

const baseURL = "https://66fb75a68583ac93b40bd359.mockapi.io";
// Trong hệ thống backend của mockAPI
// thì endpoint đc quy định là resource
//                             collection
//                             table
// chỉ đúng khi đang ở học MockAPI

// tạo ra 1 request yêu cầu server hứa rằng sẽ trả dữ liệu về cho mình
// bằng cách sử dụng Fetch

// fetch(url,{bô mô tả fetch})
// method của request : GET , POST , PUT , DELETE ,PATCH

// tạo ra 1 request yêu cầu server hứa rằng sẽ trả dữ liệu về cho mượn
// bằng cách sử dụng Fetch
// fetch(`${baseURL}/users`).then((response)=>{
//     //server trả về response , nếu oke thì
//     if (response.ok) {
//         //khưi kiện hàng
//         return response.json();
//     }else{
//         throw new Error(response.statusText);
//     }
// })
// .then((data) =>{
//     console.log(data.JSON);
// })
// .catch((error) => {
//     console.log(error);
// })

// demo post một users mới vào table users của server

fetch(`${baseURL}/users`,{
    method: "POST",
    headers:{
        "Content-Type" : "application/json",
    },//lưu những thông tin rất nhạy cảm
    body: JSON.stringify({name: "Điệp đệ quy"}),
}).then((response)=>{
    //server trả về response , nếu oke thì
    if (response.ok) {
        //khưi kiện hàng
        return response.json();
    }else{
        throw new Error(response.statusText);
    }
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})


