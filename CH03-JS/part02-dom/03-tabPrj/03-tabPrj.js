let btnList = document.querySelectorAll(".navtab-btn");
let contentList = document.querySelectorAll(".tab-content-item");
// duyệt qua từng nút
btnList.forEach((btn) => {
    //nút nào cũng chờ được click
    btn.addEventListener("click",(event)=>{
        // nếu như có 1 nút bị click thì duyệt danh sách các nút và xóa actived
        btnList.forEach((_btn) =>{
            //đi qua từng nút , nút nào có actived thì xóa ,không thì thôi
            _btn.classList.remove("actived");
        });
        // thằng nào vừa bị nhấn , thêm actived cho tui
        event.target.classList.add("actived");
        // lấy id của thằng vừa bấm
        let id = event.target.id ;
        contentList.forEach((_content)=>{
            _content.classList.remove("actived");
        });
        let contentChecked = document.querySelector(`
            .tab-content-item[data-id="${id}"]
        `);
        contentChecked.classList.add("actived");
    });
});
//thuật toán : đầu tiên , ta có danh sách các nút và cái list content
// duyệt từng nút , nếu một số các nút có sự kiện click thì chạy phương trinhg
// xóa actived và xóa hết content có actived
// và sau đó thêm actived vào các nút tương ứng