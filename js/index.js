//level 1 10s
//level 2 8s
//level 3 8s

stopAnimation = async() =>{
    loadMusic();
    await setTimeout(()=>{
        let building = document.getElementById("building");
        let road = document.getElementById("road");
        let bus_stop = document.getElementById("bus-stop");
        building.style.animationPlayState = "paused";
        road.style.animationPlayState = "paused";
        bus_stop.style.animationPlayState = "paused";
        

    },4500);
    
}
loadMusic = () =>{
    let music = new Audio();
    music.src = "../music/second.mp3";
    music.play();
}
clearPause = () =>{
    let building = document.getElementById("building");
        building.style.animationPlayState = "running";
}

generateRunner =()=>{
    let runner = document.createElement("div");
    let container = document.getElementById("runner-container");
    runner.className = "runner";
    container.appendChild(runner);
    return runner;
}
generateRunnerOut =()=>{
    let runner = document.createElement("div");
    let container = document.getElementById("runner-container");
    runner.className = "runner-out";
    container.appendChild(runner);
    return runner;
}

//getting in
gettingIn = (delay,timer) =>{
    
    setTimeout(()=>{
        let runner = setInterval(()=>{
            let runner = generateRunner();
            runner.style.display="hidden";
        },delay); 
        setTimeout(()=>{clearInterval(runner)},timer);        
        created = Math.floor(timer/delay);
    },2000) 
    

};

//Getting Out
//getting in
gettingOut = (count,timer) =>{    
    let interval =   timer/count;    
    setTimeout(()=>{
        let runner = setInterval(()=>{
            let runner = generateRunnerOut();            
        },interval); 
        setTimeout(()=>{
            clearInterval(runner);
            let model = document.getElementById("text");
            model.style.display="block";
        },timer);
    },3000)
};

//TO Generate a random number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  var level = 1;
  var defaultPassengers = 15;
  var answer = 0;
  var lifes = 3;
startGame = () =>{
    stopAnimation();
    if(level == 1){
        let delayRandom = getRandomIntInclusive(1000,1500);
        let timerRandom = getRandomIntInclusive(6000,9000);
        let created = Math.floor(timerRandom/delayRandom);
        let dropped  = getRandomIntInclusive(1,created);    
        gettingIn(delayRandom,timerRandom);
        gettingOut(dropped,timerRandom);
        console.log("In "+created);
        console.log("Out "+dropped);
        console.log("default Passengers "+defaultPassengers);
        console.log("Answer : ",(defaultPassengers+created)-dropped);
        answer = (defaultPassengers+created)-dropped;
        defaultPassengers = answer;
        
    }else if(level == 2){
        let delayRandom = getRandomIntInclusive(800,1000);
        let timerRandom = getRandomIntInclusive(8000,10000);
        let created = Math.floor(timerRandom/delayRandom);
        let dropped  = getRandomIntInclusive(1,created);    
        gettingIn(delayRandom,timerRandom);
        gettingOut(dropped,timerRandom);
        console.log("In "+created);
        console.log("Out "+dropped);
        console.log("default Passengers "+defaultPassengers);
        console.log("Answer : ",(defaultPassengers+created)-dropped);
        answer = (defaultPassengers+created)-dropped;
        defaultPassengers = answer;
    }else if(level == 3){
        let delayRandom = getRandomIntInclusive(500,600);
        let timerRandom = getRandomIntInclusive(7000,9000);
        let created = Math.floor(timerRandom/delayRandom);
        let dropped  = getRandomIntInclusive(1,created);    
        gettingIn(delayRandom,timerRandom);
        gettingOut(dropped,timerRandom);
        console.log("In "+created);
        console.log("Out "+dropped);
        console.log("default Passengers "+defaultPassengers);
        console.log("Answer : ",(defaultPassengers+created)-dropped);
        answer = (defaultPassengers+created)-dropped;
    }
}
validateAnswer = () =>{
    let entered = document.getElementById("answer").value;
    if(Number(entered) == answer){
        document.getElementById("text").style.display = "none";
        document.getElementById("bus").style.animation = "bus-move 7s linear";
        if(level == 1){
            document.getElementById("level").innerHTML = "Level 2";
            level = 2;
            console.clear();
        }else if(level == 2){
            document.getElementById("level").innerHTML = "Level 3";
            level = 3;
            console.clear();
        }
        startGame();
    }else{
        window.alert("wrong Input");
        lifes--;
       let hearts = document.getElementsByClassName("heart");
       hearts[0].remove();
       startGame();
    }
}
//getting out

/**setTimeout(()=>{
    setInterval(()=>{
        let runner = generateRunnerOut();
        
    },1000); 
},4000) */

