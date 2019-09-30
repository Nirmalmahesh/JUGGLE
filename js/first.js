stopAnimation = async() =>{
    await setTimeout(()=>{
        let bus = document.getElementById("bus");
        bus.style.animationPlayState = "paused";
    },8000);
 }
