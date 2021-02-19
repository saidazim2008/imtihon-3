let sam = document.querySelector(".sam")
let mery = document.querySelector(".mery")
let holand = document.querySelector(".holand")
let emoji = document.querySelector(".stikers")
let search  = document.querySelector(".search-input")
let button1 = document.querySelector(".send-message-button-1")
let button2 = document.querySelector(".send-message-button-2")
let button3 = document.querySelector(".send-message-button-3")
let microphone = document.querySelector(".micro-phone")
let chatmery = document.querySelector(".mery-chat")
let chatsam = document.querySelector(".sam-chat")
let chatholand = document.querySelector(".holand-chat")
let sendarea = document.querySelector(".send-message-area")
let chat = document.querySelector(".chat-section ")
let smh = document.querySelectorAll(".users-list li")


sam.onclick = function() {
    chat.style.width = "63%"
    chatsam.style.display = "block"
    chatmery.style.display = "none"
    emoji.style.display = "block"
    chatholand.style.display = "none"
    sam.style.backgroundColor = "skyblue"
    mery.style.backgroundColor = "white"
    holand.style.backgroundColor = "white"
}
mery.onclick = function(){
    chat.style.width = "63%"
    emoji.style.display = "block"
    chatsam.style.display = "none"
    chatholand.style.display = "none"
    chatmery.style.display = "block"
    sam.style.backgroundColor = "white"
    holand.style.backgroundColor = "white"
    mery.style.backgroundColor = "skyblue"
}
holand.onclick = function() {
    chatsam.style.display = "none"
    emoji.style.display = "block"
    chat.style.width = "63%"
    chatholand.style.display = "none"
    chatmery.style.display = "none"
    chatholand.style.display = "block"
    sam.style.backgroundColor = "white"
    mery.style.backgroundColor = "white"
    holand.style.backgroundColor = "skyblue"
}

sendarea.addEventListener("keyup",event => {
    if (event.target.value.length != 0 ) {
        button1.style.display = "block"      
        microphone.style.display = "none"
    }else {
        button1.style.display = "none" 
        microphone.style.display = "block"
    }
})

search.addEventListener("keyup", event => {
    let search = event.target.value.toLowerCase()
    Array.from(smh).forEach(function(username){
        let users = username.querySelector("p")
        let manname = users.textContent
        })
    if (manname.toLowerCase().indexOf(search) != -1) {
        console.log("au")
    }
})

button1.onclick = function() {
    if(sendarea.value.length != 0){
        var item = document.createElement("li");
        item.setAttribute("class","sam-right")
        let samlist = document.querySelector(".sam-list")
        item.textContent = sendarea.value
        sendarea.value = ''
        samlist.appendChild(item)
        
    }else {
        alert("biron nima kiritin!")
    }
}
button2.onclick = function() {
    console.log(sendarea);
    if(sendarea.value.length != 0){
        var item = document.createElement("li");
        item.setAttribute("class","mery-right")
        let merylist = document.querySelector(".mery-list")
        item.textContent = sendarea.value
        sendarea.value = ''
        merylist.appendChild(item)
        
    }else {
        alert("biron nima kiritin!")
    }
}
button3.onclick = function() {
    if(sendarea.value.length != 0){
        var item = document.createElement("li");
        item.setAttribute("class","holand-right")
        let samlist = document.querySelector(".holand-list")
        item.textContent = sendarea.value
        sendarea.value = ''
        holandlist.appendChild(item)
        
    }else {
        alert("biron nima kiritin!")
    } 
}