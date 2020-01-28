const mchat =document.getElementById("mini-chat")
const chat =document.getElementById("chat")
const input=document.getElementById("text-input")
mchat.onclick=function(){
    chat.classList.remove("active")
}
chat.querySelector(".close-icon").onclick=function(){
    chat.classList.add("active")
}
input.addEventListener("keyup",function(ent){
    if(ent.keyCode==13){
//         if(input.value[0].toUpperCase()==input.value[0]){
//         let divm=document.createElement("div")
//         divm.className="message support"
// // 
//         let ptag=document.createElement("p")
//         ptag.innerText=input.value
// // 
//         let ptime =document.createElement("p")
//         ptime.className="time";
// // 
//         let now=new Date();
//         ptime.innerText=now.getHours()+":"+now.getMinutes()
// //        
//         divm.appendChild(ptag)
//         divm.appendChild(ptime)
//         chat.querySelector("main").appendChild(divm)
//         input.value=""
//     }
//     else{
//         let divm=document.createElement("div")
//         divm.className="message user"
// // 
//         let ptag=document.createElement("p")
//         ptag.innerText=input.value
// // 
//         let ptime =document.createElement("p")
//         ptime.className="time";
// // 
//         let now=new Date();
//         ptime.innerText=now.getHours()+":"+now.getMinutes()
// //        
//         divm.appendChild(ptag)
//         divm.appendChild(ptime)
//         chat.querySelector("main").appendChild(divm)
//         input.value=""
//     }
//     }
// })





if(input.value[0].toUpperCase()==input.value[0]){
    Addmessage("support")
}
else{
    Addmessage("user")
}




function Addmessage(txt){
    let divm=document.createElement("div")
    divm.className="message "+txt
// 
    let ptag=document.createElement("p")
    ptag.innerText=input.value
// 
    let ptime =document.createElement("p")
    ptime.className="time";
// 
    let now=new Date();
    ptime.innerText=now.getHours()+":"+now.getMinutes()
//        
    divm.appendChild(ptag)
    divm.appendChild(ptime)
    chat.querySelector("main").appendChild(divm)
    input.value=""
    chat.querySelector("main").scrollIntoView()
}
}
})


