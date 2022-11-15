function ProductService(){
    this.getList = function(){
        return  axios({
            url:"https://63661fa679b0914b75c9b94d.mockapi.io/phones",
            method: "GET",
        });

    }

    this.addProduct = function(data){
        return  axios({
            url:"https://63661fa679b0914b75c9b94d.mockapi.io/phones",
            method: "POST",
            data: data,
        });
    }


    this.getById = function(id){
        return  axios({
            url:`https://63661fa679b0914b75c9b94d.mockapi.io/phones/${id}`,
            method: "GET",
        });
    }

    this.updateProduct = function(id, data){
        return  axios({
            url:`https://63661fa679b0914b75c9b94d.mockapi.io/phones/${id}`,
            method: "PUT",
            data: data,
        });

    }

    this.deleteProduct = function(id){
        return  axios({
            url:`https://63661fa679b0914b75c9b94d.mockapi.io/phones/${id}`,
            method: "DELETE",
        });
    }

}



