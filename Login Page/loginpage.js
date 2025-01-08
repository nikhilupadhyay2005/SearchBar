

const containerE1 = document.getElementById("container");
const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click" ,() =>
        containerE1.classList.add("active"),
);

loginBtn.addEventListener("click",()=>
    containerE1.classList.remove("active"),
);