let loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', login);

function login(e) {
    e.preventDefault();
    let name = document.getElementById("username").value;
    let pswd = document.getElementById("pswd").value;
    postData('/users/login', {username: name, password: pswd})
    .then((data) => {
        if(!data.message) {
            window.location.href="Home.html";
        }
    }
    )
    .catch((err) => {
        let error = err.message;
        let p = document.querySelector("#login-form");
        p.innerText = error;
        
    }
    )

}