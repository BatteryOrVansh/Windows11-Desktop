let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () => {
    console.log("clicked")
    if(startmenu.style.bottom == "47px"){
        console.log("hiding taskbar now")
        startmenu.style.bottom = "-650px"
    }
    else{
        console.log("revealing taskbar now")
        startmenu.style.bottom = "47px"
    }
})