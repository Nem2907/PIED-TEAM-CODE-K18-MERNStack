// 07-arrayMethod-objectMethod.js
console.log("07-arrayMethod-objectMethod.js");

// mảng trogn js không nhất thiết phải cùng kiểu
let arr1 = [1,2,"a", {lname : "Huệ" , age : 10} , [3,5]];
console.log(arr1);

// 2 : length : cung cấp độ dài
console.log(arr1.length);
// 3.  Array.isArray(arr) : kiểm tra xem biến arr có phải 
// là array ko ?
console.log(Array.isArray(arr1));//true
console.log(arr1 instanceof Array);//true
// 4. .toString(): biến mãng thành chuỗi kèm ','
let workerList = ["Huệ" , "Lan" , "Trà"];
console.log(workerList.toString());//Huệ,Lan,Trà
// join đưa thành 
// 5. split(token) | join(token)

// II - chèn mảng 
// Array là mutable :  có những method có khả năng chỉnh sửa object
// 6. push(item) : nhét item vào cuối của mảng
workerList = ["Huệ" , "Lan" , "Trà"];
result = workerList.push("Cúc");
console.log(workerList,result); // ['Huệ', 'Lan', 'Trà', 'Cúc'] 4

//7. unshirft(item) : nhát item vào đầu của mảng
workerList = ["Huệ" , "Lan" , "Trà"];
result = workerList.unshift("Cúc");
console.log(workerList,result); // ['Huệ', 'Lan', 'Trà', 'Cúc'] 4

//  8. pop : xóa pt ở cuối mảng | return phần tử đã xóa
workerList = ["Huệ" , "Lan" , "Trà"];
result = workerList.pop();
console.log(workerList,result);// ['Huệ', 'Lan'] 'Trà'
// nếu mảng là chuỗi thì return string , còn nếu ko xóa được thì undefined
// 9 . shift() : xóa phần tử ở đầu mảng | return phần tử đã xóa
workerList = ["Huệ" , "Lan" , "Trà"];
result = workerList.shift();
console.log(workerList,result);// ['Lan', 'Trà'] 'Huệ'

// 10. delete array[index]: xóa phần tử ở cị trí index (cùi)
// tổng quan khá là cùi
workerList = ["Huệ" , "Lan" , "Trà"];
delete workerList[1];//["Huế",empty,"Trà"]
// delete làm cho array bị empty thay vì bị xóa
console.log(workerList[1]);//undefined vì ko tìm thấy
// 11. splice(start, length, ... phần tử muốn thêm)
// từ start : - xóa số lượng length phần tử
//            - nhét vào các phần tử muốn thêm
// thêm mà ko xóa

workerList = ["Huệ" , "Lan" , "Trà"];
result = workerList.splice(1,0,"Điệp" ,"Cường");
// 1 : thêm ở vị trí , 0 : ko xóa ai cả  "Điệp" ,"Cường" cần thêm
console.log(workerList);//  ['Huệ', 'Điệp', 'Cường', 'Lan', 'Trà']
// sẽ return mảng chứa các phần tử bị xóa 
// khi đó result sẽ là rỗng vì ko có xóa

// xóa mà ko thêm
workerList = ["Huệ" , "Lan" , "Trà"];
workerList.splice(0,1);
console.log(workerList,result);//['Lan' , 'Trà' ] ['Huệ']

// vừa xóa vừa thêm
workerList = ["Huệ" , "Lan" , "Trà"];
workerList.splice(0,2 ,"Điệp" ,"Cường");
console.log(workerList,result);//["Điệp" , "Cường" , "Trà"], ["Huệ","Lan"]

// 12 : slice(start,end) : chiết xuất chuỗi con từ start đến ebd 

// 13. concat(...array) : nối mảng
workerGirl = ["Huệ","Lan" ,"Tân"];
workerBoy = ["Điệp", ["Cường" , "Hùng"]];
workerList = workerGirl.concat(workerBoy,"Hồng" , ["Trúc", "Lâm"]);
console.log(workerList);
// chúng ta 2 mảng ==> xác nhập lại
// những mảng con [ [mảng con] ]
// nếu sài thì sẽ bị hiện tượng 2 nàng trỏ 1 nàng
// ví dụ :
workerBoy[1][0] = "Tuấn";
console.log(workerList);

// đây là hiện tượng : shallow copy : sao chép nông
// có nghĩa : sao chép được hết giá trị nhưng ko cắt đc hết dây mơ rễ má

// 14.spread operator : phá hủy cấu trúc : hay gọi là destructuring | phân rả mảng | object
// đại diện là ...  hay là spread
workerList = [...workerGirl , ...workerBoy];//shallow
// t sẽ phân sẽ workerGirl để bỏ vào và cả workerBoy
console.log(workerList);
workerList[4] = [...workerList[4]];//deep
console.log(workerBoy[1] == workerList[4]);
console.log(workerList);

// 15.forEach(cf):(cf: callbackFuntion) : lập mảng  
// cf :(val(item) , index , arr) => {}
    
arr1= ["Huệ" , "Cúc" , "Hồng"];
arr1.forEach((item,key,array)=>{
    console.log(item,key,array);
    // lần 1 : Huệ 0 "Huệ" , "Cúc" , "Hồng"
    // lần 2 : Cúc 1 "Huệ" , "Cúc" , "Hồng"
    // lần 3 : Hồng 2 "Huệ" , "Cúc" , "Hồng"
});//nhiệm vụ :forEach sẽ đi qua từng phần tử , sẽ đưa từng phần tử vào trong cf để xử lý

//Quan trọng ! :  16 : *** map(cf) : có khả năng biến đổi từng phần tử theo 1 công thức
// cf(val,index,array) => {}
//  nó sẽ đi qua các phần tử rồi đưa vào cf để xử lý
arr1 = [2,6,9];
// map sẽ ko tác động vào arr mà sẽ vào mảng mới , ở đây là result
result = arr1.map((item) => item + 2);
// hãy nhớ : hãy có return , vì ko có return thì sẽ bị undefined
/*
chuyển từ function gốc : 
result = arr1.map((item) => {
    item += 2 ; 
    return item;
});
*/
console.log(arr1);//[2,6,9]
console.log(result);//[4,8,11]

// 17. filter(cf): đặc trưng : hàm duyệt qua các item , item nào bỏ vào cf đc true thì giữ
//                              lại còn false thì bỏ
// filter trả về mảng sau khi đã lọc
// cf : (item) => true | false
// true là giữ , còn false là bỏ 

arr1 = [1,2,3,4,5,6];
arr1 = arr1.filter((item) => item % 2 == 0);
console.log(arr1);//[2,4,6]

// 18. find(cf): hàm duyệt các item , tìm các item đầu tiên nào mà bỏ vào cf 
//              đc true thì lấy 
// cf: (val,key,array) => {} : true | false
arr1 = [1,2,3,4,5,6];
result = arr1.find((item) => item % 3 == 2);
console.log(result);//ra 2 vì 2 là số đầu tiên

// 19. findIndex(cf): hàm duyệt các item , tìm các item đầu tiên nào mà bỏ vào cf 
//              đc true thì lấy index(vị trí) 
// cf: (val,key,array) => {} : true | false
arr1 = [1,2,3,4,5,6];
result = arr1.findIndex((item) => item % 3 == 2);
console.log(result);//ra 1

// 20. indexOf(value): tìm vị trí của value nằm đâu trong mảng
arr1 = [3,5,9,0,2];
console.log(arr1.indexOf(9));//2

// filter(cf) : lọc các item thỏa cf => item[]
// find(cf) : tìm item đầu tiên thỏa cf => item
// findIndex(cf) : tìm item đầu tiên thỏa cf => index của item đó
// indexOf(cf) : tìm val trong mảng => index của item đó
 
// 21. every(cf):(mỗi):giống All(trong DBI) : tất cả đều phải thỏa mãn các thuộc tính
//  cf :(val,key,array) => {} : true|false
// duyệt qua các item , nếu tất cả các item đi qua cf đều đc true
// thì every mới return true
arr1 = [1,2,3,4,5,6];
result = arr1.every((item) => item  >=  1);
console.log(result);//true

// 22. some(cf) : giống In trong DBI : chỉ cần 1 phần tử thỏa mãn thì cả some đều true
arr1 = [1,2,3,4,5,6];
result = arr1.some((item) => item  % 3 == 2);
console.log(result);//true
// 23.includes(val) : tìm xem val có tồn tại trong mảng ko
console.log([1,3,5,7,8,10].includes(2));

// 24. reverse()

// 25: sort() : sắp xếp 
// Chia làm 2 vấn đề
//        + 1.String
arr1 = ["Điệp","An","Bụp"];
arr1.sort();
console.log(arr1);
//        +2.number
arr1 = [1,3,20,100];
arr1.sort();
console.log(arr1);
// 
arr1 = [1,3,20,100];
arr1.sort((a,b) => {
    return a - b ;
});
console.log(arr1);// nếu so sánh số , thì phải có comparator

// 25. ***Reduce(cf,initial)(initial : giá trị khởi tạo)
// cf:(total , current(item-val) ,currentIndex(index-key) => {} ) 
// nếu map dùng để thay đổi các phần tử trong mảng theo công thức
// thì tk reduce có khả năng biến đổi các phần tử và dồn hết về 1 biến

arr1 = [1,3,20,100];
//mục tiêu tính tổng
result = arr1.reduce((total,item) => {
    item += 2;
    total += item ;
    return total;//hãy nhớ return 
    //viết gọn : total += item + 2;
},0);
console.log(result);//132
// ứng dụng
let productList = [
    {
        proName : "xe",
        desc : "audi"
    },
    {
        proName : "nhà",
        desc : "Biệt Thự"
    },
    {
        proName : "Người Yêu",
        desc : "Ngân Nguyễn"
    },
];
let content = productList.reduce((total, product) => {
    return total + `<h1>${product.proName}</h1> <p>${product.desc}</p>`;
},"");  
document.querySelector(".demoRuduce").innerHTML= content;

// ** Ko cần quan tâm : dùng reduce biến array thành object
arr1 = ["Điệp", 10,22];
newObject = arr1.reduce((total,val,key)=>{
    total[key] = val;
    return total;
},{});
console.log(newObject);

// object method
// Entry của object gồm key:val  
// nếu để ý : key luôn là String hoặc Num
// val : object | number | string | function

let worker1 = {
    lname : "Điệp 10 điểm",
    age : 25 ,
    showInFor(){
        console.log(this.lname + " " + this.age);
    },
};
worker1.showInFor();
// thêm thuộc tính 
worker1.point = 10;
worker1["point"] = 10 ;
// update prop
worker1.lname = "Điệp đẹp trai";
// xóa prop
delete worker1.age; // delete dùng cho mảng
console.log(worker1);

// object assign() (thường ko dùng)
// dùng giống concar thay vì là nối , thì nó merge(giao nhau , hợp nhau) object
//  có rồi thì ghi đè , chưa thì mới

let person1 ={
    lname : "Điệp" ,
    age : 25 ,
    job : ["yang","coder"],
};

let person2 = {
    lname : "Lan",
    age : 24 ,
    company :"PiedTeam",
};
Object.assign(person1,person2);
console.log(person1);//Lan  24 ["yang","coder"],"PiedTeam" 
// vì đây là ghi đè
// tất nhiên là trên thực tế thì anh ko thích dùng cái này 
// ưu tiên dung spread

person3 = {...person1 , ...person2};
console.log(person3);
console.log(person1);
person3.job = {...person3.job};
console.log(person1.job == person3.jobd);

console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));







