stopAnimation = async() =>{
    loadMusic();
    await setTimeout(()=>{
        let bus = document.getElementById("bus");
        bus.style.animationPlayState = "paused";
    },8000);
 }
loadMusic = () =>{
    let music = new Audio();
    music.src = "../music/first.mp3";
    music.play();
}