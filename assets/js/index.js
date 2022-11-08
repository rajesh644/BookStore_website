function loader(){
    document.querySelector(".loader").classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 1000)
}

window.onload = fadeOut; 


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

function logout(){
    a =localStorage.setItem("code","logout")
window.location.href="login.html"

}
var x =localStorage.getItem("code");
if(x=="secret"){
    
}else {
    window.location.href="login.html";
}

