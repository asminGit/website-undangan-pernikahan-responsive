const navigasi = document.getElementById("navbar-list");
const list = document.getElementById("listbar");

navigasi.style.maxHeight = "0px";

list.addEventListener("click", function(){
    if(navigasi.style.maxHeight == "0px"){
        navigasi.style.maxHeight = "500px";
        navigasi.style.maxWidth = "100%";

    }else{
        navigasi.style.maxHeight = "0px";
    }
})

navigasi.style.transition = "1.0s"


