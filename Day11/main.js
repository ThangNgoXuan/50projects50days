
window.addEventListener("keypress", log)

function log(event) {
    console.log(event)
    if(event) {
        document.getElementById("content").style.display = "flex"
        document.getElementById("btn-start").style.display = "none"
        document.getElementById("key").innerHTML=`${event.key}`
        document.getElementById("code").innerHTML=`${event.code}`
        document.getElementById("keycode").innerHTML=`${event.keyCode}`


    }
}



