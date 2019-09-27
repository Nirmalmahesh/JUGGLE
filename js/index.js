stopAnimation = async() =>{
    await setTimeout(()=>{
        let building = document.getElementById("building");
        let road = document.getElementById("road");
        let bus_stop = document.getElementById("bus-stop");
        building.style.animationPlayState = "paused";
        road.style.animationPlayState = "paused";
        bus_stop.style.animationPlayState = "paused";
        

    },4500);
    
}
clearPause = () =>{
    let building = document.getElementById("building");
        building.style.animationPlayState = "running";
}