let myBtn = document.getElementById("btn");
let sidebar = document.getElementById("sidebar");

sidebar.style.display = "none"

myBtn.addEventListener("click", ()=> {
    sidebar.toggleAttribute("active")
    if (sidebar.hasAttribute("active")){
        sidebar.style.display = "block";
        myBtn.innerText = "Close Sidebar";
    }
    else {
        sidebar.style.display = "none";
        myBtn.innerText = "Open Sidebar";
    }
})