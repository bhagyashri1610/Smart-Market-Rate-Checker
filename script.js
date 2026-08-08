function checkPrice(){

    let product = document.getElementById("product").value.toLowerCase();
    let result = document.getElementById("result");

    if(product == "onion"){
        result.innerHTML = "Onion price: ₹30/kg";
    }
    else if(product == "wheat"){
        result.innerHTML = "Wheat price: ₹25/kg";
    }
    else if(product == "gold"){
        result.innerHTML = "Gold price: ₹6000/g";
    }
    else{
        result.innerHTML = "Product not found";
    }
}
function showCategory(type){

    let output = document.getElementById("categoryResult");

    if(type == "agriculture"){
        output.innerHTML = "Onion ₹30/kg | Wheat ₹25/kg | Rice ₹40/kg";
    }
    else if(type == "metal"){
        output.innerHTML = "Gold ₹6000/g | Silver ₹75/g";
    }
    else if(type == "daily"){
        output.innerHTML = "Milk ₹60/litre | Sugar ₹45/kg";
    }
}
