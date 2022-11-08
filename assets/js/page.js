const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const button = document.querySelector(".button");
const rating = document.querySelector(".rating");
const msg = document.querySelector(".msg");
const success = document.querySelector(".success");
let contentbook =document.querySelector(".content-book");
let contentauthor = document.querySelector(".content-author");
let contentproduct = document.querySelector(".content-product");
let contentreviews = document.querySelector(".content-reviews")
let aboutbook = document.querySelector("#about-book");
let aboutauthor = document.querySelector("#about-author");
let product = document.querySelector("#product");
let reviews = document.querySelector("#reviews")




function stars1(){
star1.style.color="#000000";
star2.style.color="#ffffff";
star3.style.color="#ffffff";
star4.style.color="#ffffff";
star5.style.color="#ffffff";
p1.style.display="block";
p2.style.display="none";
p3.style.display="none";
p4.style.display="none";
p5.style.display="none";
p1.style.color="red";
button.style.display="block"
}


function stars2(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#ffffff";
    star4.style.color="#ffffff";
    star5.style.color="#ffffff";
    p1.style.display="none";
p2.style.display="block";
p3.style.display="none";
p4.style.display="none";
p5.style.display="none";
p2.style.color="orange";
button.style.display="block"
}
    
function stars3(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#000000";
    star4.style.color="#ffffff";
    star5.style.color="#ffffff";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="block";
    p4.style.display="none";
    p5.style.display="none";
    p3.style.color="lightblue";
    button.style.display="block"
   
    
    }
    
function stars4(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#000000";
    star4.style.color="#000000";
    star5.style.color="#ffffff";
    p1.style.display="none";
p2.style.display="none";
p3.style.display="none";
p4.style.display="block";
p5.style.display="none";
p4.style.color="lightgreen";
button.style.display="block"
    
    }
    
function stars5(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#000000";
    star4.style.color="#000000";
    star5.style.color="#000000";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="block";
    p5.style.color="green";
    button.style.display="block"
    
    }

function submit(){
rating.style.display="none"
msg.style.display="none"
success.style.display="block"
button.style.display="none"

}
aboutbook.addEventListener("click",()=>{
    aboutbook.style.backgroundColor="#fff"
    contentbook.style.display="block"
    contentauthor.style.display="none"
    aboutauthor.style.backgroundColor="rgb(226, 226, 226)"
    product.style.backgroundColor="rgb(226, 226, 226)"
    contentproduct.style.display="none"
    reviews.style.backgroundColor="rgb(226, 226, 226)"
    contentreviews.style.display="none"
})
aboutauthor.addEventListener("click", ()=>{
    aboutauthor.style.backgroundColor="#fff"
    contentauthor.style.display="block"
    contentbook.style.display="none"
    aboutbook.style.backgroundColor="rgb(226, 226, 226)"
    product.style.backgroundColor="rgb(226, 226, 226)"
    contentproduct.style.display="none"
    reviews.style.backgroundColor="rgb(226, 226, 226)"
    contentreviews.style.display="none"
  

})
product.addEventListener("click",()=>{
    product.style.backgroundColor="#fff"
    aboutauthor.style.backgroundColor="rgb(226, 226, 226)"
    aboutbook.style.backgroundColor="rgb(226, 226, 226)"
    contentproduct.style.display="block"
    contentauthor.style.display="none"
    contentbook.style.display="none"
    reviews.style.backgroundColor="rgb(226, 226, 226)"
    contentreviews.style.display="none"

});

reviews.addEventListener("click",()=>{
    reviews.style.backgroundColor="#fff"
    contentreviews.style.display="block"
    contentbook.style.display="none"
    contentauthor.style.display="none"
    contentproduct.style.display="none"
    product.style.backgroundColor="rgb(226, 226, 226)"
    aboutauthor.style.backgroundColor="rgb(226, 226, 226)"
    aboutbook.style.backgroundColor="rgb(226, 226, 226)"
})



var currentBook;
var count = 0




var url_string = window.location.href; // www.test.com?book=test
var url = new URL(url_string);
var paramValue = url.searchParams.get("book");
fetchBook(paramValue);


function fetchBook(paramValue){
    let xhr = new XMLHttpRequest();
    xhr.open("get","assets/db.json.txt",true);
    xhr.onload = function(){
        data =  this.response;
        data = JSON.parse(data);
        for(let x in data["books"]){
            if(data["books"][x].id == paramValue)
            {
                currentBook=data["books"][x]
                document.getElementById("bookName").innerHTML = 'Book Name : '+ data["books"][x].name;
              document.getElementById("book_img").src = data["books"][x].img_url;
                document.getElementById("author").innerHTML = 'Author : '+ data["books"][x].author;
                document.getElementById("discount_price").innerHTML = data["books"][x].discount_price;
                document.getElementById("actual_price").innerHTML = data["books"][x].actual_price;      
            }

          
           
      
       
       
        
    };
}
    xhr.send();

    }

function loader(){
    document.querySelector(".loader").classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 500)
}

window.onload = fadeOut; 

// add to cart
function addCart(){
    document.getElementById("cart").innerHTML +=`<div class="row my-3" id="main">
    <div class="col-2">
        <img src="${currentBook.img_url}" alt="" class="img-fluid">
    </div>
    <div class="col-7 align-self-center">
       <h6>Name:- ${currentBook.name}</h6>
       <h6>Price:- ${currentBook.discount_price} Rs</h6>
    </div>
    <div class="col-2 align-self-center">
      <button class="b" onclick="remove()">Remove</button>
    </div>`
    document.getElementById("item").innerText = ++count
    localcart.push(currentBook.id)
    localStorage.setItem("cart",localcart)


}
function remove()
{

    document.getElementById("item").innerText = --count;
    localcart.pop(currentBook.id)
    localStorage.setItem("cart",localcart)
   

}

var x =localStorage.getItem("code");
if(x=="secret"){
    
}else {
    window.location.href="login.html";
}