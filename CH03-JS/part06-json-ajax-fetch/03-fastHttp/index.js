const baseURL1 = "https://66fb75a68583ac93b40bd359.mockapi.io/users";
//  class + promise + fetch
class FastHttp{     
    send(method,url,body){
        return fetch(url,{
            method : method,
            headers:{
                "Content-Type" : "application/json",
            },
            body : body ? JSON.stringify(body) : null,
        }).then((response) =>{
            if(response.ok){
                return response.json();//khui
            }else{
                throw new Error(response.statusText)
            }
        });
    }   
    get(url){
        return this.send("GET",url,null);
    }
    delete(url){
        return this.send("DELETE",url,null);
    }
    post(url,body){
        return this.send("POST",url , body);
    }
    put(url,body){
        return this.send("PUT",url , body);
    }
    

}
let http = new FastHttp(); // tạo 1 bản thể để sài method của nó

http
// .get(baseURL1)
// .delete(`${baseURL1}/6`)
// .post(baseURL1,{name : "Tài chó điên"})
.put(`${baseURL1}`,{name : "Tân chó điên"})
.then((data) => {
    console.log(data);
})
// đầu tiên , tạo ra instance để tạo ra method trong http
