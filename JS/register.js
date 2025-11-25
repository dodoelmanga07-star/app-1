let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign_up")

registerBtn.addEventListener("click" , (e) =>{ 
    e.preventDefault() 
    if(username.value == "" || email.value == "" || password.value == ""){
        Swal.fire({
            icon: "question",
            title: "Oops...",
            text: "please fill data!",
        });
        return ;
    }else {
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(() =>{
            Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your account has been created successfully 🎉",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true

}).then((result) =>{
    if(result.dismiss === Swal.DismissReason.timer){
            window.location = "login.html"

    }
});

        })
    }
})

let show = document.getElementById("show")

show.addEventListener("click" , () =>{
    password.type = show.checked ? "text" : "password"
})

// localStorage.setItem("lsRegistered" , "true");
//    window.location.href = "login.html";

