var url_string = window.location.href; // www.test.com?category=test
var url = new URL(url_string);
var category = url.searchParams.get("category");

fetchBooks(category);


function fetchBooks(category){
    let xhr = new XMLHttpRequest();
    xhr.open("get","assets/db.json.txt",true);
    xhr.onload = function(){
        data =  this.response;
        data = JSON.parse(data);
        a=0
        for(let x in data["books"]){

            if(data["books"][x].category == category)
            {
              if(category == "romantic_book"){
              document.getElementById("category_name").innerHTML = "Romantic Books";
            }else if(category == "comics_book"){
              document.getElementById("category_name").innerHTML = "Comics Books";
            }else if(category == "horror_story"){
              document.getElementById("category_name").innerHTML = "Horror Books";
            }else if(category == "story_books"){
              document.getElementById("category_name").innerHTML = "Story Books";
            }
            if(a<8){
          
                document.getElementById("book_list").innerHTML += `<div class="col-12 col-md-6 col-lg-3">
          <div class="comics-content">
            <div class="comics-img">
              <a href="page.html?book=${data["books"][x].id}"><img src="${data["books"][x].img_url}" alt="${data["books"][x].img_url}" class="img-fluid "></a>
              <div class="click">
                <a href="page.html?book=${data["books"][x].id}">GET IT NOW</a>
              </div>
            </div>

          </div>

        </div>`;
       a++
      }
            }

           
          }
       

    };
    xhr.send();


}


function loader(){
  document.querySelector(".loader").classList.add('active');
}
function fadeOut(){
  setTimeout(loader, 500)
}

window.onload = fadeOut; 


var x =localStorage.getItem("code");
if(x=="secret"){
    
}else {
    window.location.href="login.html";
}