const baseURL = "https://provinces.open-api.vn/api";
// class + Promise
// đảm nhận việc giao tiếp với server
class Http{
    get(url){
        // return để khi mà có ai đó mà .then thì nhận đc data
        return fetch(url).then((response) =>{
            // kiểm tra kiện hàng
            if(response.ok){
                return response.json();//khưi kiện promise<data>
            }else{
                throw new Error(response.statusText);
            }
        });//promise<data>
    }//promise<data>    
}
// Store sẽ đảm nhận việc trích xuất dữ liệu từ với server
class Store{
    constructor(){
        this.http = new Http();
    }
    getProvinces(){
        return  this.http.get(/*đường dẫn get đc province*/`${baseURL}/p`);//Promise<provinces>
    }//Promise.provinces
    getDistrict(provinceCode){
        this.http
        .get(`${baseURL}/p/${provinceCode}/?depth=2`)
        .then((provinceInfo)=>{
            return provinceInfo.districts;
        });// một promise<districts>
    }
    getWards(districtCode){
        return this.http
        .get(`${baseURL}/d/${districtCode}/?depth=2`)
        .then((districtInfo) =>{
            return districtInfo.wards;
        });//promise<wards>
    }
}

// RenderUI : render dữ liệu lên giao diện
class RenderUI{
    renderProvines(provinces){
        let htmlContent = provinces
        .map((provincesItem) => {
            const {code,name} = provincesItem;
            return `<option value="${code}">${name}</option>`;
        })
        .join("");
    document.querySelector("#province").innerHTML = htmlContent;
    }
    //
    renderDistricts(districts) {
        let htmlContent = districts
          .map((districtItem) => {
            const { code, name } = districtItem;
            return `<option value="${code}">${name}</option>`;
          })
          .join("");
        document.querySelector("#district").innerHTML = htmlContent;
      }
    
      renderWards(wards) {
        let htmlContent = wards
          .map((wardItem) => {
            const { code, name } = wardItem;
            return `<option value="${code}">${name}</option>`;
          })
          .join("");
        document.querySelector("#ward").innerHTML = htmlContent;
      }
    renderInformation(information){
        let htmlContent = "";
        for (const key in information) {
            htmlContent += information[key] ? `,${information[key]}` : "";
        }
        htmlContent = htmlContent.slice(1);
        document.querySelector("#information").innerHTML = htmlContent;
    }
}

//sự kiện load trang
document.addEventListener("DOMContentLoaded", (event) => {
    let store = new Store();
    let ui = new RenderUI();
    //lấy danh sách province từ server và hiển thị
    store
      .getProvinces()
      .then((provinces) => {
        ui.renderProvines(provinces);
        //lấy value provincesCode của province hiện tại
        let provinceCode = document.querySelector("#province").value;
        //   dùng provinceCode đi tìm danh sách các district của nó
        return store.getDistrict(provinceCode);
      })
      .then((districts) => {
        ui.renderDistricts(districts);
  
        //lấy districtcode của distrit hiện tạo
        let districtCode = document.querySelector("#district").value;
        //dùng districtcode tìm danh sách ward
        return store.getWards(districtCode);
      }).then((wards) => {
        ui.renderWards(wards);
      })
  });
  
  //sự kiện thay đổi provices
  document.querySelector("#province").addEventListener("change", (event) => {
    let store = new Store();
    let ui = new RenderUI();
    let proviceCode = document.querySelector("#province").value;
    store
      .getDistricts(proviceCode)
      .then((districts) => {
        ui.renderDistricts(districts);
  
        //lấy districtcode của distrit hiện tạo
        let districtCode = document.querySelector("#district").value;
        //dùng districtcode tìm danh sách ward
        return store.getWards(districtCode);
      })
      .then((wards) => {
        ui.renderWards(wards);
      });
  });
  //sự kiện thay đổi district
  document.querySelector("#district").addEventListener("change", (event) => {
    let store = new Store();
    let ui = new RenderUI();
    //lấy districtcode vừa đổi
    let districtCode = document.querySelector("#district").value;
    store.getWards(districtCode).then((wards) => {
      ui.renderWards(wards);
    });
  });
  
  //sự kiện submit (nhấn chuột vào nút đặt hàng || enter)
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let address = document.querySelector("#address").value;
    let province = document.querySelector("#province option:checked").innerHTML;
    let district = document.querySelector("#district option:checked").innerHTML;
    let ward = document.querySelector("#ward option:checked")?.innerHTML;
    let ui = new RenderUI();
    let information = {
      address,
      province,
      district,
      ward,
    };
    ui.renderInformation(information);
  });





































// document.addEventListener("DOMContentLoaded",(event) =>{
//     // lấy danh sách province từ server và hiển thị
//     let store = new Store();
//     let ui = new RenderUI();

//     store.getProvinces()
//     .then((provinces) =>{
//             ui.renderProvines(provinces);
//         // lấy cái value trong input 
//         // lấy provinceCode của province hiện tại
//         let provinceCode = document.querySelector("#province").value;
//         // dùng provinceCode đi tìm danh sách các  
//         return store.getDistrict(provinceCode)
//         })
//         .then((districts) =>{
//             ui.renderDistricts(districts);
//             // lấy district code của district hiện tại
//             let districtCode =document.querySelector("#district").value;
//             //dùng districtCode tìm danh sách ward và hiển thị
//             return store.getWards(districtCode);
//         })
//         .then((wards) =>{
//             ui.renderWards(wards);
//     }); 
// });
// // sự kiện thay đổi province
// document.querySelector("#province").addEventListener("change", (event) =>{
//      // lấy danh sách province từ server và hiển thị
//      let store = new Store();
//      let ui = new RenderUI();
 
//      store.getProvinces()
//      .then((provinces) =>{
//              ui.renderProvines(provinces);
//          // lấy cái value trong input 
//          // lấy provinceCode của province hiện tại
//          let provinceCode = document.querySelector("#province").value;
//          // dùng provinceCode đi tìm danh sách các  
//          return store.getDistrict(provinceCode)
//          })
//          .then((districts) =>{
//              ui.renderDistricts(districts);
//              // lấy district code của district hiện tại
//              let districtCode =document.querySelector("#district").value;
//              //dùng districtCode tìm danh sách ward và hiển thị
//              return store.getWards(districtCode);
//          })
//          .then((wards) =>{
//              ui.renderWards(wards);
//          }); 
// });
// // sự kiện thay đổi district
// document.querySelector("district").addEventListener("change",(event) => {
//     let store = new Store();
//     let ui = new RenderUI();
//     // lấy districtCode vừa đổi
//     let districtCode = document.querySelector("#district").value;
//      store.getWards(districtCode).then((wards) =>{
//              ui.renderWards(wards);
//     }); 
// })

// // sự kiện submit (bấm chuột vào nút đặt hàng | enter)
// document.querySelector("form").addEventListener("submit",(event) => {
//     event.preventDefault(); // tránh reset
//     let address = document.querySelector("#address").value;
//     let province = document.querySelector("#province option:checked").innerHTML;
//     let district = document.querySelector("#district option:checked").innerHTML;
//     let ward = document.querySelector("#ward option:checked")?.innerHTML;
//     let information ={
//         address,
//         province,
//         district,
//         ward
//     };
//     ui.renderInformation()
// });

