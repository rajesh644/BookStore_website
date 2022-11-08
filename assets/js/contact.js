        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                  }
          
                  form.classList.add('was-validated')
                }, false)
              })
          })()

          function loader(){
            document.querySelector(".loader").classList.add('active');
        }
        function fadeOut(){
            setTimeout(loader, 300)
        }
        
        window.onload = fadeOut; 


        var x =localStorage.getItem("code");
if(x=="secret"){
    
}else {
    window.location.href="login.html";
}
            