// quản lý sinh viên bằng oop 
// tất nhiên là không dùng class rồi

class Student{
    constructor(name,birthday){
        this.name = name ;
        this.birthday = birthday;
        this.id = new Date().toISOString();
    }
}


//khi mà mình tạo ra sinh viên rồi thì mình sẽ lưu nó vào localStore

// --------------------------Store-------------------------
// class Store chứa method xử lý localStorage
class Store{
constructor(){}
// .getStudents(): hàm lấy danh sách students từ ls
    getStudents(){
            return JSON.parse(localStorage.getItem("students")) || [];
        };//vào trong local store để lấy các tk student

    // hàm add
    // .add(student) : hàm nhận vào student và thêm vào localstore --> thao tác với database
    add(student){
        // lấy danh sách students về
        let students = this.getStudents();//hành động lấy đc danh sách về
        // nhét student vào students
        students.push(student);
        // lưu lên lại localStorage
        localStorage.setItem("students",JSON.stringify(students));
        };//chứa các method để chứa localStorage
    // .getStudent(id) : hàm nhận vào id , tìm student trong students
    getStudent (id){
        let students = this.getStudents();
        let student = students.find((student) => student.id == id );
        return student;
    };
    // .remove(id) : hàm nhận vào id , tìm và xóa student trong students
    remove(id){
        let students = this.getStudents();
        // tìm vị trí của student trong students 
        let indexRemove = students.find((student) => student.id == id);
        // xong rồi lấy index(vị trí) đó 
        // xóa = splice
        students.splice(indexRemove,1);
        // lưu lại students lên local store
        localStorage.setItem("students", JSON.stringify(students));
    };
}
// dùng student có đc để hiển thị lên giao diện
// -----------------RenderUI -------------------
// RengerUI là thằng chuyên các method xử lý giao diện
class RenderUI{
constructor(){}
    // .add(student) : nhận vào student và biến nó thành tr để hiển trị table
    add({id , name , birthday}){
        // lấy students 
        let store = new Store();
        let students = store.getStudents();
        let newTr = document.createElement("tr");
        newTr.innerHTML = `
        <td>${students.length}</td>
        <td>${name}</td>
        <td>${birthday}</td>
        <td>
        <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
            Xóa
            </button>
        </td>
        `;
        document.querySelector("tbody").appendChild(newTr);
        // reset các input field
        document.querySelector("#name").value = "";
        document.querySelector("#birthday").value = "";
    };
    // làm hàm hiển thị thông báo lên UI
    alert(msg,type ="success"){
        let divAlert = document.createElement("div");
        divAlert.className = `alert alert-${type}`;
        divAlert.innerHTML = msg ;
        document.querySelector("#notification").appendChild(divAlert);
        setTimeout(() => {
            divAlert.remove();
        },2000);
    };

    // renderAll() : hàm này sẽ vào danh sách students và biến từng student thành tr
    // và hiển thị lên table
    // mục tiêu : đặt nó vào trong UI
    // .prototype ==> mình tới cái class của nó
    renderAll(){
        // lấy danh sách students 
        // ko đc sài : let students = this.getStudents();
        // vì this lúc này đang là RenderUI , chứ ko phải ls mà 
        // ta cần phải ở ls
        let store = new Store(); // tạo là intance(object của store)
        let students = store.getStudents();
        // duyệt students và biến mỗi thằng student thành tr
        let htmlcontent = students.reduce((total,student,studentIndex)=>{
            const {id,name,birthday} = student;
            let str = `
                <tr>
                    <td>${studentIndex + 1}</td>
                    <td>${name}</td>
                    <td>${birthday}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
                        Xóa
                        </button>
                    </td>
                </tr>
            `;
            return total + str ;
        },"")
        // prev-value(total) , currValue(giá trị hiện tại) hoặc currItem
        // , currIndex(vị trí hiện tại)
        document.querySelector("tbody").innerHTML = htmlcontent;

    };
}
// main flow : dòng chảy sự kiện chính
 document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();// chặn reset trang
    // lấy data từ các input
    let name = document.querySelector("#name").value;
    let birthday = document.querySelector("#birthday").value;
    // dùng data thu được các input tạo student
    let newStudent = new Student(name,birthday);
    // lưu vào ls
    let store = new Store();
    store.add(newStudent);
    // hiển thị ui
    let ui = new RenderUI();
    ui.add(newStudent);
    ui.alert(`đã thêm thành công sinh viên có tên ${name}`)
 });
// productictList[]
// dùng reduce để ==> html

// 
document.addEventListener("DOMContentLoaded", (event) => {
    let ui = new RenderUI();
    ui.renderAll();
});
// DOMContentLoaded : đợi cho trang nó load xong hết

// noob code :
/*
    let btnRemoveNodes = document.querySelectorAll(".btn-remove")
    btnRemoveNodes.fore...
    không được vì ta không thể DOM thẳng vào tk DOM ảo
*/ 



// sự kiện xóa : 
document.querySelector("tbody").addEventListener("click",(event) => {
    if(event.target.classList.contains("btn-remove")){  // cái tk mới bấm vào  á , có chứa btn-remove ko ?
        // nếu có thì lấy data-id
        let idRemove = event.target.dataset.id;
        // idRemove là mã của student cần xóa
        // từ idRemove này tìm student cần xóa trong students
        let store = new Store();
        let student = store.getStudent(idRemove);
        // getStudent(id); là hàm tìm student bằng id trong students
        // hàm chưa làm
        let isConfirmed = confirm(`Có chắc là bạn muốn xóa sinh viên ${student.name} không ? `);

        if(isConfirmed){
            // xóa trong ls 
            store.remove(idRemove);//chưa làm 
            // xóa ui
            let ui = new RenderUI();
            ui.renderAll();//không nên sài vì get nhiều lắm , nhưng vì lười biếng nên sài tạm bợ
            // flow : tìm nút cần xóa bằng cách kiếm thằng con
            // hiện thông báo xóa thành công
            ui.alert(`Sinh viên ${student.name} đã bị xóa`,"sdanger"); 
        }
    }
});