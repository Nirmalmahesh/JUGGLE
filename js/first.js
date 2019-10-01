stopAnimation = async() =>{
    loadMusic();
    await setTimeout(()=>{
        let bus = document.getElementById("bus");
        bus.style.animationPlayState = "paused";
    },8000);
 }
 
loadMusic = () =>{
    let music = new Audio();
    music.src = "./first.mp3";
    music.play();
}
instruction=()=>{
    let info = document.getElementById("info");
    info.style.background = "none";
    info.innerHTML = "The bus contains 15 memebers....blah blah blah"
}