

let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")

let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , (e) =>{
    e.preventDefault()
    if(username.value == "" || password.value == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please fill data!",
        });
        return ;
    }else{
        if(getUserName.trim() === username.value.trim() && getPassword === password.value){
            Swal.fire({
            icon: "success",
            title: "Welcome back! You have logged in successfully 👋",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            setTimeout(() =>{
                localStorage.setItem("LisoggedIn" , "true");
                window.location = "index.html"
            } , 1000)
        }
    );
        }else {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "UserName or Password is worng!",
        });
        return ;
        }
    }
})
 
show.addEventListener("click" , () =>{
    password.type = show.checked ? "text" : "password"
})

// localStorage.setItem("lislogedin" , "true");
//    window.location.href = "index.html";
