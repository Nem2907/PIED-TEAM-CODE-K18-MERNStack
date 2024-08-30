const VALUES = [
    {id : "scissors", value : "✌🏿"},//0
    {id : "rock", value : "✊🏿"},//1
    {id : "paper", value : "🖐🏿"},//2    
];
//Phân tích Logic : 
//  valuePlayer và valueComputer => "scissors" "rock" "paper"
// từ valuePlayer và valueComputer duyệt VALUES tìm dựa id nào giống 
// indexPlayer và indexComputer
// Khi nào thắng ? 
//  0 - 2 = - 2 
//  1 - 0 = 1           indexPlayer - indexComputer= 1 || -2 thì thắng ==> return 1  
//  2 - 1 = 1
// khi nào hoài  indexPlayer - indexComputer = 0 || thì hòa return 0 ;
// còn lại thì thua                                       return -1 

let i = 0 ; 
const handleChange = () => {
    let computer = document.querySelector("#computer");
    computer.textContent = VALUES[i].value;
    computer.setAttribute("data-id", VALUES[i].id);
   
    i = i === VALUES.length - 1 ? 0 : ++i;
};
let internal = setInterval(handleChange,50);
//  hàm compare : hàm so sánh giá trị | phân thắng thua
const compare = (valuePlayer , valueComputer) => {
    //tìm index của các value tương ứng
    let indexPlayer = VALUES.findIndex((item)=> item.id == valuePlayer);
    let indexComputer = VALUES.findIndex((item) => item.id == valueComputer);

    let result = indexPlayer - indexComputer ;
    if([1,-2].includes(result)) return 1;
    else if(result == 0) return 0 ;
    else return -1 ;
};

let playerItem = document.querySelectorAll(".user");
playerItem.forEach((item) => {
 // duyệt qua các item và yêu cầu bọn nó lắng nghe sự kiện click
    item.addEventListener("click",(event) =>{
        // dừng máy lại và lấy data-id
        // duyệt các nút và xóa actived
        // thêm actived cho nút vừa nhận
        // lấy id của thằng vừa nhắn 
        // so sánh
        // kết luận
        // in thông báo
        // hiện nút chơi lại
        //làm bài : 
        // dừng máy lại và lấy data-id
        clearInterval(internal);
        // lấy data-id
        let computer = document.querySelector("#computer");
        //let valueComputer = computer.getAttribute("data-id");
        // mẹo : nếu nó là data-id thì ta có thể viết ở dưới
        let valueComputer = computer.dataset.id;//computer.getAttribute("data-id");
        let valuePlayer = event.target.id;
        // so sánh 
        let result = compare(valuePlayer,valueComputer);// 1 | 0 | -1
        console.log(result);
        // duyệt các nút và xóa actived
        playerItem.forEach((_item)=>{
            _item.classList.remove("actived");
            _item.style.pointerEvents = "none";
        });
        // Thêm actived cho nút vừa nhận
        event.target.classList.add("actived");
        // kết luận và in thông báo 
        let alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");
        let msg = "";
        if(result == 1){
            msg = "Bạn Thắng";
            alertDiv.classList.add("alert-succes");
        }else if(result == 0){
            msg = "Bạn Hòa";
            alertDiv.classList.add("alert-warning");
        }else{
            msg ="Mày gà";
            alertDiv.classList.add("alert-dark");
        }
        alertDiv.textContent = msg ;
        document.querySelector(".notification").appendChild(alertDiv);
        // hiện nút thông báo chơi lại
        document.querySelector("#play-again").classList.remove("d-none");
    })
});
// sự kiện click chơi lại

let btn = document.querySelector(".btn-play-again");
btn.addEventListener("click",(event)=>{
    // gọi lại hàm internal để cho máy chạy lại
    clearInterval(internal);
    internal = setInterval(handleChange,50);
    // reset người chs
    playerItem.forEach((item) => {
        item.classList.remove("actived");
        item.style.pointerEvents = "";
    });
    // xóa thông báo và khối nút chơi lại
    document.querySelector(".notification").innerHTML = "";
    document.querySelector("#play-again").classList.add("d-none");
})