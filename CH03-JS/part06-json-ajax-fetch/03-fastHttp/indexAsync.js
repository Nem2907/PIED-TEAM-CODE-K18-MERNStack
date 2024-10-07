const baseURL1 = "https://66fb75a68583ac93b40bd359.mockapi.io/users";
//  class + promise + async + await
class FastHttp{     
    async send(method,url,body){
        let response = await fetch(url,{
            method : method,
            headers:{
                "Content-Type" : "application/json",
            },
            body : body ? JSON.stringify(body) : null,
        });
        if(response.ok){
            return response.json();
        }else{
            throw new Error(response.statusText);
        }
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

(async () => {
    try {
        let data = await http
    .put(`${baseURL1}/2`,{name : "Tân chó điên"})
    console.log(data);
    } catch (error) {
        console.log(error);
    }
})();
// đầu tiên , tạo ra instance để tạo ra method trong http

// Ôn kĩ bài này ==> vào project
// tuần tới buổi 2 học onl qua video