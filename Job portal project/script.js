function showMenu(){
    document.getElementById("menu").Value;
}
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", ()=>{
    if (ul.style.display==="none"){
        ul.style.display = "block"
    }
    else{
         ul.style.display = "none";
    }
})