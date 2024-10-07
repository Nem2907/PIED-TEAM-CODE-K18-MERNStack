// ngày xưa , người ta dùng callBack để xử lý bất đồng bộ
// nhưng dễ bị callback hell

// ES6 : người ta dùng promise để khắc phục callback Hell
// ES7 : func Asyn await dùng để kết hợp với promise
// giảm tải việc dùng .then .catch

// func Async là một hàm return về một promise
// 
new Promise((resolve, reject) =>{
    resolve("Ahihihi");
});

function handle1(){
    return Promise.resolve("ahihi"); //Creates a new resolved promise.
};

async function handle1(){
    return "ahihi"; //return Promise.resolve("ahihi");
};
// không cần tạo new Promise + resolve mà thay vào đó ta có viết tắt như trên
// async await cải thiện việc .then .catch
// Await : đợi 1 tý
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

// cách 1 : nguyên nhân kết quả 5s

// let getData = async () => {
//     let profile = await getProfile();//đây là hàm trả ra promise
//     // await ở đây chỉ đc sử dụng thì và chỉ khi có hàm async mà thôi
//     let article = await getArticle();
//     console.log(profile,article);
// }

// getData();
// // nhược điểm : không thể catch lỗi được
// phải dùng try catch để bắt lỗi

//  cách 2: độc lập : 3s
let getData = async () => {
    const [profile,article] = await Promise.all([getProfile() , getArticle()]);
    //                                              [profile,article]
    //                                    một mảng profile và một mảng article
    // dùng destructing để lấy profile và article
    console.log(profile,article);
};
getData();

// I- Xử lý lỗi
// 1 : dùng catch
let getStudents = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Lỗi kinh hoàng")
        },3000);
    })
}
// getStudents().then((value) =>{
//     console.log(value);
// })
// .catch((error) =>{
//     console.log(error);
// })

// xử lý = async await thì sao ?
// let handle3 = async() =>{
//     try {
//         let student = await getStudents();
//         console.log(student);
        
//     } catch (error) {
//         console.log(error);
//     }
// };
// đừng bao giờ dùng async với các toán tử đồng bộ
// ví dụ : 
let x = 0 ;
// (
//     async () => {
//         try {
//             let student = await getStudents();
//             console.log(student);
//         } catch (Error) {
//             console.log(error);
//         }
//     }
// )

let handle4 = async () => {
    x += 1;
    console.log(x);
    return 5;//return Promise.resolve(5);
    // hàm async luôn trả ra hàm Promise
}

let handle5 = async () => {
    x += await handle4();//=5 vì do đang ở trạng thái pending , nên là ko có thay đổi
    // cứ nhìn thấy await thì ko cộng trừ nhân chia , giữ nguyên
    console.log(x);
}
handle5();