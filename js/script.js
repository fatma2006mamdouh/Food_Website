// var product=getElementById("cart")
// var chose=document.querySelectorAll("#h3")
// var content =document.querySelector("#pill")
// var content2=document.getElementById("total")
// var button_pill=document.getElementById("btn-pill")
// var button_total=document.getElementById("btn-total")

// var totalprice=0;
// product.forEach(function(item){
//   item.onclick=function(){
//    totalprice+=+(chose.getAttribute("price"))
//    content.innerHTML+=chose.textContent+"<hr"
//    if(content.innerHTML!=""){
//        button_pill.style.display="block"
//        button_total.style.display="block"
//    }

//   }
//     button_total.onclick=function(){
//         console.log=totalprice;

//     }
// })


// *******************************************************
var allproducts=document.querySelectorAll("h3")
var content=document.getElementById("pill")
var button=document.getElementById("btn-total")
var showprice=document.getElementById("total")

var totalprice=0

allproducts.forEach(function(item){
item.onclick=function(){
    totalprice+=+(item.getAttribute("price"))
    content.innerHTML+=item.textContent+"     =" + item.getAttribute("price")+"$"+"<br>"+"<hr>"

    if(content!=""){
        button.style.display="block"
        content.style.color="#1d2228"
        showprice.style.color="#1d2228"

    }
}

button.onclick=function my (){
       showprice.innerHTML+=totalprice+"$"
    alert("Welcome ! Here is Your Total Price ,Thanks for choosing our services!")
}

})

