
// runtimeError : là lỗi diễn ra trong quá trình vận hành code , code đang deplay và 
// ta không thể kiểm soát được
// lỗi thường diễn ra do người dùng 
// syntax : lỗi sai cú pháp
// lỗi thường diễn ra do người code
// logicError : lỗi sai tư duy
// lỗi thường diễn ra do người code
// từ đó tryCatch đc ra đời 
// tryCatch : dùng để xử lý lỗi phát sinh trong runtimeError
// nhớ rằng tryCatch không vận hành trong syntarError
// ***lưu ý : tryCatch chỉ hoạt động trong môi trường đồng bộ mà thôi

// js được coi là ngôn ngữ đơn luồng , nhưng nếu chạy trên web thì nó được xem là đa luồng
//  thông qua event và callBack
console.log("Part03-errorHandle-regex");
console.log("01-tryCatch");


// gọi sever gửi yêu cầu muốn get(lấy) dach sách sinh viên

// ví dụ về đồng bộ
// try {
//     concacbietdi;
//     console.log("Bắc cụ");
// } catch (error) {
//     console.log(error);
    
// }

// ví dụ về bất đồng bộ
/*
try {
    setTimeout(() =>{
        concacbietdi; // lỗi
    },1000);
} catch (error) {
    console.log(error);
}
 */



/*
try {
    setTimeout(() =>{
        concacbietdi; // lỗi
    },1000);
    phần này sẽ bị đưa vào callbackQueue
    khi nó chạy qua try và ko có bắt đc lỗi
    thì nó sẽ mất đi try catch 
    và từ đó còn :
    {
    setTimeout(() =>{
        concacbietdi; // lỗi
    },1000);
}   ==> bị lỗi
*/

// ==> cách xử lý : lồng thêm một lớp setTimeOut
// nên code như thế này
/*
setTimeout(()=> {
    try {
        setTimeout(() =>{
            concacbietdi; // lỗi
        },1000);
    } catch (error) {
        console.log(error);
    }
},1000);
*/

// CH6 : promise.then.catch

// cấu trúc của một Error trông như nào 
// ==> vì minh làm backend nên mình phải xử lý lỗi rất nhiều !
// xử lý lỗi : "Làm cho lỗi tường minh , dễ nhìn
//              giấu đi những thông tin nhạy cảm"

 //gõ thử  "new Error" và xem trong đó có gì và ctrl + click xem trong đó có gì ?

//  try {
//     concacbietdi;
//     console.log("Bắc cụ");
// } catch (error) {
//     // console.log(error);
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack); //==> người dùng ko nên thấy
//     const{stack ,...newError} = error ;
//     console.log(newError); // in ra thì nó sẽ ko hiện ra vì trạng thái    
// //Enumerable đang bị false ==> ko thể hiển thị

// }

//flow
// stack là prop ko muốn người dùng nhìn thấy nhất
//  flow1 :unit stack
// Error : biến thành new Error ==> xóa đi prop stack
// name             name
// message -----> 
// stack

// flow2 : custom Error
// Error : ErrorWithStatus extends Error
// name             status
// message ----->   message
// stack

// mình có thể tự điều hướng về catch thông qua lệnh throw

    // let money = 9999999999999999  ;// 15 số 9
    // try {
    //     if(money > 999999999999999){
    //         throw new Error("Số quá lớn với sức chứa")
    //     }
    //     console.log(money);   
    // } catch (error) {
    //     console.log(error);
        
    // }
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

// Finally :
loading = true ;
try {
    getData(); // hàm chưa có  ==> lỗi
    loading = false ;
} catch (error) {
    loading = true; 
} finally{
    loading = false;
}
// dù như thế nào thì cũng vào finally

// tạo ra một dạng lỗi mới
class ErrorWithStatus extends Error{
    status;//để hoisting
    constructor({status,message}){
        super(message);
        this.status = status;
    }
}
try {
    throw new Error("Tôi bị hack rồi");
} catch (error) {
    let newError = new ErrorWithStatus({
        status : 401,
        message :"Mày là thằng gà",
    });
    console.log(newError);
    
}