// part05-asynchronous/01-asynchronous-callback.js
// đây là chương quan trọng

// bản thân của js là ngôn ngữ đơn luồng (nghĩa là chạy từ trên xuống)
// mà js lại chạy trên web hoạc nodejs(Js runtime enviroment)
// 2 thằng này hỗ trợ đa luồng cho js(V8)
// đa luồng hoàn toàn : PHP và Java

// synchronous : đồng bộ : tụi nó sẽ có xu hướng đợi nhau


// anh có tác vụ L1(3s) và L2(2s)
// để hoàn thành L1 và L2 thì ta cần mất 5s ==> đồng bộ
// nhưng nếu L1 là nguyên nhân dẫn đến L2 thì mới hợp lý

// nhưng nếu L1 và L2 là 2 tác dụ độc lập
// thì muốn nó không cần đợi nhau nữa , chạy 1 lúc cho nhanh
// thì chỉ mất (3s)
// asynchronous : bất đồng bộ

// js của em luôn là asynchronous(bất đồng bộ), việc này
// vừa tốt lại vừa xấu , khi nào cần L2 đợi L1 thì
// mình phải chỉnh về synchronous

// Một vài khái niệm :
// call stack : là một cấu trúc dữ liệu dạng ngăn xếp (stack)
// LI FO (Last In , First Out : )

// ví dụ :
function a(x){
    console.log(x);
}// hàm nhận vào 1 số và in ra số đó

function b(y){
    a(y + 2);
}
b(5);

function c(z){
    b(z + 1)
}
c(5); // 8
// c(5) ==> z = 5
// c(5) ==> b(z + 1) ==> z + 1
// c(5) ==> b(z + 1) ==> y = z + 1
// c(5) ==> b(z + 1) ==> a(y + 2) ==> y + 2
// c(5) ==> b(z + 1) ==> a(y + 2) ==> x = y + 2 
// c(5) ==> b(z + 1) ==> a(y + 2) ==> log(x)

// Event loop và callback queue(kiu)
// trong js runtime `enviroment` (môi trường chạy js)
// còn nhiều thứ rất quan trọng , chứ không phải chỉ có stack
// về vùng nhớ : memory heap    callstack

// event loop : liên tục lặp đi lặp lại chờ đợi 1 sự kiện "click" , "submit" ,....
//              Event Loop                                  callback queue

// web APIS : DOM | AJAX(XMLHttpRequest) | timeOut(setTimeOut|...)

// demo sự bất đồng bộ trong js
function main(){
    console.log("command1");

    setTimeout(function () {
        console.log("command2");
    },3000);

    console.log("command3");

    setTimeout(function () {
        console.log("command4");
    },1000);
    
}
main();
// command1 
// command3 
// command4 
// command2 
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbWFpbigpew0KICAgIGNvbnNvbGUubG9nKCJjb21tYW5kMSIpOw0KDQogICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7DQogICAgICAgIGNvbnNvbGUubG9nKCJjb21tYW5kMiIpOw0KICAgIH0sMTAwMDApOw0KDQogICAgY29uc29sZS5sb2coImNvbW1hbmQzIik7DQoNCiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgICAgICAgY29uc29sZS5sb2coImNvbW1hbmQ0Iik7DQogICAgfSwxMDAwKTsNCiAgICANCn0NCm1haW4oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// asynchronous callback : xử lý bất đồng bộ bằng callback

// docfile = ("productData.txt", (data) => {
//     console.log(data);
// })

// docfile = function(urlFile,func){
//     // urlFile truy vấn file và đọc file 3s thu về data
//     func(data);//để xử lý
// }
// ưu điểm : dễ viết 
// nhược điểm : khó fix bug , callback Hell

// promise(hứa) :
for (var i = 0; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 5000)
}
// tất cả các setTimeout đều sài chung một con i , nhưng vì chạy hết vòng lặp
// rồi mới chạy setTimeOut  nên i = 4
// dẫn đến có 4 con 4
// còn nếu sài let thay vì sài var thì sẽ ra 0 1 2 3 
// vì mỗi thằng mỗi khác

// 
// setTimeout(function () {
//     try {
//         setTimeout(function () =>{
//             throw new Error("Lỗi chà bá");
//         },3000)
//     } catch (error) {
//         console.log(error);
            
//     }
// },3000);


