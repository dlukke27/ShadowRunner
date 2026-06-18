const player = document.getElementById("player");
const player = document.getElementById("obstacle");
const player = document.getElementById("score");

let score = 0;

//pular
document.addEventListener("keydown", (e) => {
    if(e.code === "space"){
    
       if(!player.classList.contains("jump")){

          player.classlist.add("jump");

          setTimeout(()=>{

         
 },700);



       }


    }

});