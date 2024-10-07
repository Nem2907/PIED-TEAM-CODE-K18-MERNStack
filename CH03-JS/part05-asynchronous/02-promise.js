// 02-promise.js
// Promise : là một lời hứa sẽ diễn ra trong tương lai 
// ví dụ  : anh sẽ làm gì đó ..... 
// Promise are eager not lazy 
// : phát động khi lời hứa đã xuất hiện
// lời hứa chúng ta ko có trì hoãn , nó đã diễn ra trong quá trình thực nghiệm

// một lời hứa cơ bản
// anh hứa sẽ đi Vũng Tàu và mua bánh bông lan trứng muối về cho em 
// trong tháng 10 !!!
// đây là 1 lời hứa chưa đủ
//      nếu thành công : "niềm tin" , "1 nụ hôn" 
//      nếu thất bại : "1 sự thất vọng"

// một lời hứa có 3 trạng thái
// một lời hứa còn bị ảnh hưởng bởi các tác nhân bên ngoài
// và chỉ nằm trong 1 hay 3 trạng thái trong cùng 1 thời điểm thôi
//              1 : pending : đang chờ kết quả , đang thực thi , đang thực hiện
//                  là thời gian thực hiện trước khi kiểm chứng

// ví dụ : đầu tháng 10 sếp ép ảnh phải ra vũng tàu công tác 2 ngày
// ==> rất dễ để mua bông lan trứng muối  ==> giữ đc lời hứa
//              2 : onFullFilled : cái Promise sẽ dùng resolve("1 nụ hôn")


// nếu như xui , trời đánh thánh vật , ảnh bệnh hết nguyên tháng 10 
// thì không đi Vũng Tàu được ==> không mua bánh đc ==> thất hứa  
//              3 :onRejected : cái Promise sẽ dùng reject ("1 sự thất vọng")


// cú pháp của Promise :
// nhận vào 1 callBackfn 
// new Promise((resolve,reject) => {});
// new Promise( function(resolve,reject) {}) ;

// Tạo bối cảnh :
// ----.---- : vai 1 : tác nhân ngoại cảnh : chúa
// let wallet = 1000 ;
// // ----.---- : vai 2 : anh trai hứa với cô gái
// // "Anh hứa sẽ cho có em chiếc cà rá 5000$"
// // 
// let p1 = new Promise((resolve,reject) => {
//     if (wallet >= 5000) {
//         resolve("một nụ hôn");
//     }else{
//         reject("một sự thất vọng");
//     }
// });

// ----.---- : vai 3 : cô gái nhận lời hứa
// người hứa : khi hứa cần phải tưởng tượng ra viễn cảnh : thành công và thất bại dựa trên lời hứa
// người nhận lời hứa : có thể định hướng dựa vào thành công và thất bại của lời hưa
// // đầu vào của then là value :
// // nếu thành công thì sẽ vào đc then 
// p1.then((value) => {
//     console.log(`Nếu code chạy vào đây, nghĩa là anh ấy đã đủ tiền mua nhẫn
//         và lời hứa đã chạm được vào resolve ==> code vào then  ==> value là những gì
//         có trong resolve`);
//     console.log(value);
//     // với then là value ==> thành công
// })/* thành công */.catch((error) => {
//     // còn nếu catch là thất bại

//     console.log(`Nếu code chạy vào đây , nghãi là anh ấy không đủ tiền mua nhẫn
//         và lời hứa đã chạm vào reject => code vào catch => error chính là
//         những gì có trong reject`);
//     console.log(error);
    
// });
// wallet = 7000 ;

// thử chuyển 1 async callback về thành 1 promise

let data; //undefined

// mô phỏng rằng anh sẽ lên sever và lấy dữ liệu về
// và việc này chắc chắn sẽ mất thời gian

// setTimeout(()=>{
//     data = {name : "Điệp" , age : 25};
// },3000);
// console.log(data);

// tổng quan : chúng ta có 1 biến data ko có giá trị , và sau 3 giây thi mới có giá trị
// và ta đc kết quả undefined vì nó phải đợi 3s up data lên rồi mới lên 
// nhưng ko đợi , dẫn đến việc bất đồng bộ

// dùng promise để chuyển đồng bộ
// Ép sever hứa rằng sẽ trả dữ liệu cho mình sau 1 khoản thời gian nhé

let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve({name : "Điệp" , age : 25});// resolve có ý nghĩa khác 
        // : mầy đã kết nối đc với data rồi
    },3000);
}); // sever ko bao giờ thất bại , nếu thất bại : 1 : rớt mạng ko load đc data
//                                                2 : sai địa chỉ

// đóng vai client : người dùng
// xác thực lời hứa từ sever

p2.then((value) => {
    data = value;
    console.log(data);
});     
// tất cả đều đc lùi về 3 s
// ==> đồng bộ

// giai đoạn từ 0 - 3s gọi là pending 
// nếu sau đó resolve thì em sẽ có trang thái onFullFilled
// và then
// nếu reject thì em sẽ có onRejected vào catch
// nhưng sever không bao giờ reject
// nếu thất bại thì sever vẫn có resolve("câu chửi")

// Promise are eager not lazy

// ví dụ : cách không hay
// cách phổ biến
let a = 1 ;

let p3 = new Promise((resolve,reject) => {
    a++;
});

console.log(a);

// cách 2 : hơi không hay : dùng function
// mẹo vặt cuộc sống
// let a = 1 ;

// function ahihi(){
//     let p3 = new Promise((resolve,reject) => {
//         a++;
//     });
//     return p3 ;
// }
// // ahihi();// return p3 : return lời hứa
// console.log(a);

// cách 3 : dùng arrow :

// let a = 1 ;

// let p3 = () => { return new Promise((resolve,reject) => {a++;});

// console.log(a);

// ----------------------
// 1 promise chỉ có thể rơi vào 1 trong 3 tráng thái sau : 
//   pending                onFullfilled        onRejected
//                          resolve             reject

// resolve ==> dẫn đến onFullfilled ==> đưa vào method then và trả ra value
// reject ==> dẫn đến onRejected ==> đưa vào method catch và trả ra error
// về cơ bản resolve và reject rất giống return

// resolve nén giá trị cho then dưới dang value
// còn reject sẽ ném giá trị cho catch dưới dạng errow
// nhược điểm : resolve , reject không thể ngừng code lại như return
// trong promise, nếu chạm vào resolve trước thì onFullfilled
//                nếu chạm vào reject thì onRejected

// let p4 = () => {
//     return new Promise((resovle , reject) => {
//         resovle("ahihih");
//         reject("Lỗi chà bá");
//         console.log("Xin chào các bạn mọi người "); 
//     });
// };
// // xác thực
// //vì p4 là function nên nếu muốn sài thì sài () và .then + .catch để 
// // điều hướng thành công và thất bại
// p4()
// .then((value) =>{
//     console.log("Thành công " +value);
// })
// .catch((error) => {
//     console.log("Thất bại" + error);
    
// });

// nhớ : resolve , reject : thằng nào báo trước thì tk đó sẽ đc sử dụng

// mẹo vặt cuộc sống :
// trong then có nhận vào 2 callbackFn ==> nhận vào cả 2 cái value và error
// 1 cái để xử lý thành công , 1 cái để xử lý thất bại 
// // cách viết thứ 2 :
// p4().then(
// (value) =>{
//     console.log("Thành công " +value);
// },
// (error) => {
//     console.log("Thất bại" + error);
 
    
// }
// );


// Main concept 
// 1*: nếu return trong then | catch thì ta sẽ đưa promise về onFullFilled

let p5 = () => {
    return new Promise((resolve,reject) => {
        reject("Lỗi chà bá");
    });
};

p5().then((value) => {
    console.log("P5 đã thành công và nhận đc " + value);
}).catch((error) => {
    console.log("P5 đã thất bại và bị " + error);
    return "Lê Hồ Điệp";//return Promise.resolve("Lê Hồ Điệp")
    // lệnh return sẽ return lại onFullFilled 
    // ==> sử dụng then
})
    .then((value) => {
        console.log("Lần này anh ấy đã có được " + value);
        
    })

// *2. Nếu throw trong then | catch thì sẽ đưa promise về onRejected
// let p5 = () => {
//     return new Promise((resolve,reject)=>{
//         resolve("Vui ghê")    
//     });
// }

// xác thực
p5()
.then((value) => {
    console.log("Value là " + value);
    throw "ahuhu"; //Promise.reject("ahuhu")
})
.catch((error) => {
        console.log("P5 đã thất bại và bị " + error);
        return "Lê Hồ Điệp";//return Promise.resolve("Lê Hồ Điệp")
        // lệnh return sẽ return lại onFullFilled 
        // ==> sử dụng then
    })
    .then((value) => {
        console.log("Lần này anh ấy đã có được " + value);
        
    })
    .catch((error) => {
        console.log("Error nè " + error);
    })


// ứng dụng :dùng promise để xử lý bất đồng bộ
// ví dụ ta có 2 task cần làm
// task1 : lấy profile từ server về(3s)
// task2 : lấy article từ server về(2s)

// đầu tiên  : mô phỏng việc lên dataBase và lấy profile từ sever về
// ép sever phải hứa rằng sau 3s thì đưa cho mình đưa profile

let getProfile = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({name :"Điệp" , age : 25 });        
        }, 3000);
    });
};

let getArticle = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(["Hoàng Tử bé" ,"Mèo dạy hải âu bay" , "Cây cam ngọt của tôi"]);        
        }, 2000);
    });
};

// nếu 2 tác vụ này là độc lập :3s
getProfile().then((value) => {
    console.log(value);
})

getArticle().then((value) => {
    console.log(value);
})

// nếu bây giờ anh muốn nguyên nhân kết quả : 5 giây
getProfile().then((value) => {
    console.log(value);
})
   getArticle().then((value) => {
    console.log(value);
})

// promise hell

getProfile().then((value) => {
    console.log(value);
    return getArticle();
})

.then((value) => {
    console.log(value);
})


