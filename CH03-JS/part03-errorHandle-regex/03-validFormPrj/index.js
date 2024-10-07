// với mỗi business rule sẽ có chuẩn validate khác nhau
// tùy vào quốc gia , công ty mà mình validate theo chuẩn đó

// rule validate (những yêu cầu để công nhận là validate)
// email: isRequired, isEmail
// name: isRequired, isName(có thể tiếng việt, tiếng anh, max 50)
// gender: isRequired
// country: isRequired
// password: isRequired, min 8 , max 30
// confirmedPassword: isRequired, min 8 , max 30, isSame(password)
// agree: isRequired
const REG_EMAIL =
  /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME =
  /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

// viết hàm nhận vào value và kiểm tra value theo một tiêu chí nào đó   
// nếu value thỏa điều kiện return ""
// nếu value không thỏa điều kiện thì return "Chửi"i
// const isRequired = (value) => {
//     if (value != "") return "";
//     else return "that field is required";
// };
// const isRequired = (value) =>{
//     return value ? "" : "that field is required"
// };

// ngắn gọn hơn
const isRequired = (value) => (value !== "" ? "" : "that field is required");
// nếu như value có khác rỗng hay ko ? 
//  nếu có thì trả ra rỗng
// nếu không thì trả ra câu chửi
const isEmail = (value) =>(REG_EMAIL.test(value) ? "" : "Email is not valid");
const isName =(value) => (REG_NAME.test(value) ? "" : "Name is not valid");
const min = (numberBound) => (value) => {
    return value.length >= numberBound ? "" : `Min is ${numberBound}`;
}; 
// Min nhận vào 2 giá trị , value và giá trị
const max = (numberBound) => (value) => {
    return value.length <= numberBound ? "" : `Max is ${numberBound}`;
};
const isSame = (paramsValue,fielName1,fielName2) => (value) => {
    return value == paramsValue ? "" : `${fielName1} is not same ${fielName2}` ;
};
// paramsValue: value cần sánh
/*
ta có 1 object có cấu trúc như sau :    
    {
        value : là giá trị của input cần kiểm tra
        funcs : mảng những hàm dùng để kiểm tra value | (value)  ==> chửi
        parentNode: là div cha của controlNode để mình thêm div chửi
        controlNodes: mảng những input của value để mình tô đỏ (thêm class is-invalid)
    }
*/
// muốn kiểm tra name, đầu tiên phải DOM vào name
// let nameNode = document.querySelector("#name");
// // và ta có đối tượng name 
// let paramsObject = {
//     value : nameNode.value ,
//     funcs :[isRequired,isName],
//     parentNode : nameNode.parentElement,
//     // parentNode phục vụ cho mình việc chửi
//     controlNodes : [nameNode],
//     // danh sách những input
// }

// viết hàm tạo ra thông báo chửi
const createMsg = (parentNode,controlNodes,msg) => {
    // tạo div có thông điệp chửi
    let invalidDiv = document.createElement("div");
    invalidDiv.innerHTML = msg;
    invalidDiv.className = "invalid-feedback" ;
    // tạo div để chửi
    parentNode.appendChild(invalidDiv);
    // đánh đỏ những thằng input (controlNodes)
    controlNodes.forEach((inputNode) => {
        inputNode.classList.add("is-invalid");
    });
};

// hàm isValid : hàm nhận vào paramObject(dùng để mô tả thuộc tính)
// paramObject{value,funcs,parentNode,controlNodes}
//  hàm sẽ lấy value và bỏ vào danh sách các funcs 
//  hay nói cách khác là hàm sẽ duyệt qua danh sách các funcs 
//  và bỏ value vào kiểm tra
//                      nếu chuỗi rỗng "" thì thôi
//                      nếu nhận chuỗi chửi thì gọi createMsg
//                      return `chữ chửi` đó luôn
// nếu duyệt hết các funcs mà ko bị chửi thì return ""

const isValid = (paramObject) => {
    // nhận vào 1 object gồm 4 thành phần
    const {value, funcs , parentNode,controlNodes} = paramObject;
    // bước 1 : duyệt danh sách các funcs và chạy cùng với value
    for(const funcCheck of funcs) {
        let msg = funcCheck(value);
        if(msg){
            createMsg(parentNode,controlNodes,msg);
            return msg;
        }
    };
    return "";
};
// // xài
// let nameNode = document.querySelector("#name");
// isValid({
//     value : nameNode.value,
//     funcs : [isRequired,isName],
//     parentNode :nameNode.parentNode ,
//     controlNodes : [nameNode] ,
// })

// hàm sự kiện diễn ra :
// hàm xóa thông báo 
const clearMsg = () =>{
// xóa class của tất cả input màu đỏ
    document.querySelectorAll(".is-invalid").forEach((inputNode) =>{
        inputNode.classList.remove("is-invalid");
    });
    // xóa hết các chửi đã thêm
    document.querySelectorAll(".invalid-feedback").forEach((item) =>{
        item.remove();//xóa luôn
    });
};
document.querySelector("form").addEventListener("submit",(event) =>{
    event.preventDefault(); // chặn reset trang
    // Bước 1 : phải dom đến các controlNode(input)
    clearMsg();
    let emailNode = document.querySelector("#email");
    let NameNode = document.querySelector("#name");
    let genderNode = document.querySelector("#gender");
    let passwordNode = document.querySelector("#password");
    let confirmedPasswordNode = document.querySelector("#confirmedPassword");
    let countryNode = document.querySelector("input[name='country']:checked");
    // tìm tk nào có input là country và bị nhấn 
    let agreeNode = document.querySelector("input#agree:checked");
    // tiến hành valid cho từng node
    let errorMsgs = [
    // email
    isValid({
        value : emailNode.value,
        funcs : [isRequired,isEmail],
        parentNode : emailNode.parentElement,
        controlNodes : [emailNode],
    }),
    // name
    isValid({
        value : NameNode.value,
        funcs : [isRequired,isName],
        parentNode : NameNode.parentElement,
        controlNodes : [NameNode],
    }),
    // Gender
    isValid({
        value : genderNode.value,
        funcs : [isRequired],
        parentNode : genderNode.parentElement,
        controlNodes : [genderNode],
    }),
    // password
    isValid({
        value : passwordNode.value,
        funcs : [isRequired , min(8), max(30)],
        parentNode : passwordNode.parentElement,
        controlNodes : [passwordNode],
    }),
    // confirmedPasswordNode
    isValid({
        value : confirmedPasswordNode.value,
        funcs : [isSame(passwordNode.value,"Confirmed Passwword" ,"Password")],
        parentNode : confirmedPasswordNode.parentElement,
        controlNodes : [confirmedPasswordNode],
    }),
    // country
    isValid({
        value : countryNode ? countryNode.value : "",
        funcs : [isRequired] ,
        parentNode : document.querySelector(".form-check-country").parentElement,
        controlNodes : document.querySelectorAll("input[name='country']"),
    }),
   // agree
    isValid({
        value : agreeNode ? agreeNode.value : "",
        funcs : [isRequired] ,
        parentNode : document.querySelector("#agree").parentElement,
        controlNodes : document.querySelectorAll("#agree"),
    })
  ];
  console.log(errorMsgs);
  let isValidForm =errorMsgs.every((msg) => msg == "" );
  if(isValidForm){
    alert("Form is valid");
  }  

});