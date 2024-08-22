const undangan = document.getElementById("isi-undagan");
const undanganB = document.getElementById("isi-undagan2");
const undanganC = document.getElementById("isi-undagan3");
const buka = document.getElementById("open-undangan");

// undangan.style.display = "none";

// buka.addEventListener("click", function(){
    
//     if (undangan.style.display == "none"){
//         undangan.style.display = "block";
//         buka.textContent = "sumbunyi"


//     }else{
//         undangan.style.display = "none"
//         undangan.style.display = "block"
//         buka.textContent = "tampilkan"

//     }
// })

buka.addEventListener("click", function(){
    if(undangan){
        undangan.style.display = "block";
        undanganB.style.display = "block";
        undanganC.style.display = "block"
    }
})