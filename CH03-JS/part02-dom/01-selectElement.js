// Khái niệm về DOM : document obejct model
// DOM js , search để thấy rõ hình ảnh
// liên kêt DOM
// DOM là tk con cảu Window object ==> điều khiển được
//  = cách móc vào
// Định nghĩa liên kết DOM : móc 1 biến vào 1 đối tượng 
// trong DOM
// Muốn DOM 1 đối tượng thì có 2 cách
let inputNode = document.getElementById("name");//khá cùi
// truyền dữ liệu vào giá trị id
console.log(inputNode);
// hiểu nôm na :  ta vào trong document và tìm name(id) mà hiển thị
// dưới dạng object
// cho mình một tập hợp theo id ta chọn
// còn nếu mà id thì sài #
//  trong css nếu muốn móc vào trong một class thì dùng dấu ./
inputNode = document.querySelector("#name"); // truyển vào Selector css
// có khả năng cung cấp cho mình phần tử = cách truy cập vào css
//inputNode = document.querySelector("h1 p.ahihi"); // truyển vào Selector css
// ==> vào trong thẻ h1 kiếm thẻ p có tên là ahihi 
console.log(inputNode);
// querySlector : cho phép ta query tìm kiếm phần tử dựa trên selector css
// dùng mình kiếm = id , class , ... hay bằng thứ gì đó
// thì nó chỉ cung cấp 1 phần tử mà thôi
// ==> dùng class hay id thì vẫn thu về đc 1 phần tử
// ==> điều này là tốt
// vậy thì nếu mà mình lấy về 1 mảng các thẻ card thì sao ?
let cardList = document.getElementsByClassName("card");//HTMLCollection
// nó sẽ kiếm những đứa có class name là card
console.log(...cardList);
// hoặc có thể sài 
cardlist = document.querySelectorAll(".card");//lấy được một mảng 
console.log(cardList);
// lấy ít thì sài .querySelector
// lấy nhiêu thì sài .querySelectorAll

// HTMLCollection thì giống mảng nhưng thiếu các method cần thiết để xử
// lý phần tử 
// NodeList giống mảng nhưng đầy đủ hơn 1 tý  
let firstCard = document.querySelector(".card");
console.log(firstCard);
console.log(firstCard.childNodes); //  [text, h2, text, p, text]
console.log(firstCard.children);//HTML [h2,p]
// children : cho mình danh sách các phần tử con
console.log(firstCard.classList);// thu về mảng của các thẻ đó
// ['card', 'p-2', 'mb-3']
// mà ta có thể thêm vào hoặc xóa đi
console.log(firstCard.className);// thu về một chuỗi
// khi mình muốn thêm 1 thuộc tính mà ko biết cái gì ở phía trước 
// ==> sài classList
// còn muốn thêm nhiều tk cùng một lúc
// ==> sài className
console.log(firstCard.parentElement);
// kiếm tk cha
console.log(firstCard.nextElementSibling);
//kiếm một tk giống mình nhưng nằm ở phía dưới  
// nếu ko có thì trả về null
// ý nghĩa : để kiếm tk cha 
console.log(firstCard.firstChild);//[text]

// tạo mới một element
let newCard = document.createElement("div");
// newCard.classList.add("card", "mb-3" , "p-2")
newCard.className = "card mb-3 p-2";
// thêm class
newCard.innerHTML = `
    <h2> Tao được tạo bằng js </h2>
    <p> Tao là 1 node Fakeeee </p>
`;//thêm nội dung bên trong
let cardGroup = document.querySelector(".card-group");
// mục tiêu : ta cần dom card-group để ta có thể thêm card mới
cardGroup.appendChild(newCard);
// thêm vào một card ở html
cardGroup.replaceChild(newCard,cardGroup.children[1]);
// thay thế tk card ở vị trí 1 (cardGroup.children[1]) = newCard
// thêm attribute vào node (CỰC KỲ QUAN TRỌNG)
firstCard.setAttribute("Ahihi","1");
console.log(firstCard.getAttribute("ahihi"));//1
// tạo = js nghĩa là visual DOM 
//  DOM giả thì sẽ ko Selector đc
firstCard.removeAttribute("ahihi");

/*
    khi chúng ta tạo ra một tk mới , nó đc gọi là dom ảo , hay còn 
    gọi là dom giả , chúng ko thể bị selector đc ==> vẫn chạy đc nhưng
    sẽ bị lỗi ==> ko đc dom trực tiếp vào dom giả
*/ 








