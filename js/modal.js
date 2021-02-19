let menumodal = document.querySelector(".modals")
let mainbutton = document.querySelector(".main-button")
let bgcopc= document.querySelector(".bgc-opacity")
let opacity = document.querySelector(".opacity")
let settings = document.querySelector(".settings")
let object = document.querySelector(".object-modal")
let exit = document.querySelector(".modal-exit")
let infoexit = document.querySelector(".profile-exit")
let btn = document.querySelector(".btn-edit")
let modaledit = document.querySelector(".edit-profile")
let prev = document.querySelector(".prev")
let profilesam = document.querySelector(".profile-sam")
let profile = document.querySelector(".profile-modal")


btn.onclick = function() {
    btn.style.cursor = "pointer"
    modaledit.style.display = "block"
    object.style.display = "none"
}
infoexit.onclick = function(){
    bgcopc.style.display = "none"
}

profilesam.onclick = function(){
    opacity.style.display = "block"
    profile.style.display = "block"
}

window.addEventListener("click", function(event){
    if(event.target == opacity) {
        opacity.style.display= "none"
    }
}) 

prev.onclick = function() {
    btn.style.cursor = "pointer"
    modaledit.style.display = "none"
    object.style.display = "block"
}

mainbutton.onclick = function() {
    mainbutton.style.cursor = "pointer"
    modaledit.style.display = "none"
    bgcopc.style.display= "block"
    menumodal.style.display = "block"
    object.style.display = "none"
}

window.addEventListener("click", function(event){
    if(event.target == bgcopc) {
        bgcopc.style.display= "none"
    }
}) 

settings.onclick = function() {
    settings.style.cursor = "pointer"
    object.style.display = "block"
    modaledit.style.display = "none"
}
exit.onclick = function() {
    object.style.display = "none"
}