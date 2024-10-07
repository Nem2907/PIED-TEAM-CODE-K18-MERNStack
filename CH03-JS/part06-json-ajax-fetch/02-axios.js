// 02-axious.js
// Axios : 1 Http client dùng để gữi request và nhận response
// 1 thư viện giúp tương tác với api như get , post , put , delete , patch

// axios không có sẵn trong trình duyệt

const baseURL = "https://66fb75a68583ac93b40bd359.mockapi.io";
// lấy dữ liệu từ server các user trong table users bằng công nghệ axios
// axios({
//     method: "GET",
//     url: `${baseURL}/users`,
// }).then((response) => {
//     // nhận kiện hàng
//     console.log(response);
//     if([200,201].includes(response.status)){
//         // thay vì         console.log(response);
//         return response.data;
//     }else{
//         throw new Error(response.statusText);
//     }
// }).then((data) =>{
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// thêm 1 user mới vào
axios({
    method: "POST",
    url: `${baseURL}/users`,
    data:{
        name : "Em Điệp Nguyên tử"
    }
}).then((response) => {
    // nhận kiện hàng
    console.log(response);
    if([200,201].includes(response.status)){
        // thay vì         console.log(response);
        return response.data;
    }else{
        throw new Error(response.statusText);
    }
}).then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// // dùng aliases post
// axios
// .post({`${baseURL}/users`,{
//     name : "Tổn lùi"
// }
// }).then((response) => {
//     // nhận kiện hàng
//     console.log(response);
//     if([200,201].includes(response.status)){
//         // thay vì         console.log(response);
//         return response.data;
//     }else{
//         throw new Error(response.statusText);
//     }
// }).then((data) =>{
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// instance : bản thể
// cho phép mình tạo ra 1 bản thể của nó nhưng có thể config(chỉnh sửa cấu hình)

// const instance = axious.create({
//     baseURL : baseURL,
//     timeout: 10000,//sau 10 s tự hủy ==> request
//     headers:{
//         "Content-Type" : "application/json",
//     };
// });
// instance
//     .post(`usses`, {
//         name : " Tân gà vcl"
//     })
//     .then((eesponse
//         )){

//         }    ))


// instance.post(users, {
//     name: "con gà gáy ò ó o ò",
//     })
//     .then((response) => {
//     //nhận kiện hàng
//         // console.log(response);
//         if([200, 201].includes(response.status)){
//             return response.data;
//         }else{
//             throw new Error(response.status);
//         }
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);  
//     });

//class + instance + interceptor để cấu hình
class Http{
    constructor(){
        this.instance = axios.create({
            baseURL: baseURL,
            timeout: 1000,//sau 10s thì tự hủy request
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.instance.interceptors.response.use(
            (response)=>{
                return {
                    data: response.data,
                    status: response.status,
                }
            },
            (response)=>{
                return promise.reject({
                    status: response.status,
                    statusText: reponse.statusText,
                });
            },
        );
    }
}

//test
let http = new Http().instance;

http
    .post(user, {
        name: "con lợn kêu en éc",
    })
    .then((response) => {
    console.log(response);
    })

// testlet http
