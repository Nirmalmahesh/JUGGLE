//level 1 10s
//level 2 8s
//level 3 8s

var isPaused = false;
resetGame = () =>{
  $(document).ready(function()
    {      
      
        window.location.href = "./index.html"; 
      
    });
}

var musicPaused = false;

mute = () =>{
    
    if(musicPaused){
        music.play();
        let mute = document.getElementById("mute");
        mute.remove();
        let volume = document.createElement("i");
        volume.className = "fas fa-volume-mute fa-2x";
        volume.id="mute";
        let muteContainer = document.getElementById("mute-container"); 
        muteContainer.appendChild(volume);       
        musicPaused = false;
        
    }else{
        music.pause();        
        let mute = document.getElementById("mute");
        mute.remove();
        let volume = document.createElement("i");
        volume.className = "fas fa-volume-up fa-2x";
        volume.id = "mute";
        let muteContainer = document.getElementById("mute-container");
        musicPaused = true;
        muteContainer.appendChild(volume);
    }
    
}
var music = new Audio();
    music.src = "../music/second.mp3";
pauseAnimation = () => {

    if (!isPaused) {
        mute();
        let pauseBlock = document.getElementById("pause-block");
        let btnPause = document.getElementById("btn-pause");
        btnPause.remove();
        let icon = document.createElement("i");
        icon.className = "fas fa-play fa-2x";
        icon.id = "btn-play";
        pauseBlock.appendChild(icon);
        console.log("Pausing!!");
        let building = document.getElementById("building");
        let road = document.getElementById("road");
        let bus_stop = document.getElementById("bus-stop");
        building.style.animationPlayState = "paused";
        road.style.animationPlayState = "paused";
        bus_stop.style.animationPlayState = "paused";
        let runners = document.getElementsByClassName("runner");
        let runnersOut = document.getElementsByClassName("runner-out");

        for (let i = 0; i < runners.length; i++) {
            runners[i].style.animationPlayState = "paused";
        }
        for (let i = 0; i < runnersOut.length; i++) {
            runnersOut[i].style.animationPlayState = "paused";
        }
    } else {
        mute(); 
        let pauseBlock = document.getElementById("pause-block");
        let btnPlay = document.getElementById("btn-play");
        btnPlay.remove();

        let icon = document.createElement("i");
        icon.className = "fas fa-pause fa-2x btn-pause";
        pauseBlock.appendChild(icon);
        console.log("Resuming");

        let runners = document.getElementsByClassName("runner");
        let runnersOut = document.getElementsByClassName("runner-out");
        let model = document.getElementById("text");

        for (let i = 0; i < runners.length; i++) {
            runners[i].style.animationPlayState = "running";
        }
        for (let i = 0; i < runnersOut.length; i++) {
            runnersOut[i].style.animationPlayState = "running";
        }
        if ((level >= 1 && level <= 15) && isPaused) {
            model.style.display = "block";
        } else {
            console.log("out");
            console.log(level, isPaused);
        }

    }
    isPaused = !isPaused;


}


stopAnimation = async () => {
    loadMusic();
    await setTimeout(() => {
        let building = document.getElementById("building");
        let road = document.getElementById("road");
        let bus_stop = document.getElementById("bus-stop");
        building.style.animationPlayState = "paused";
        road.style.animationPlayState = "paused";
        bus_stop.style.animationPlayState = "paused";
        let info = document.getElementById("navbar-info");
        info.style.display = "none";
        
    }, 4500);

}
loadMusic = () => {
    
    music.play();
}
// clearPause = () =>{
//     let building = document.getElementById("building");
//         building.style.animationPlayState = "running";
// }

generateRunner = () => {
    let runner = document.createElement("div");
    let container = document.getElementById("runner-container");
    runner.className = "runner";
    if (isPaused) {
        runner.style.animationPlayState = "paused";
    }
    container.appendChild(runner);
    return runner;
}
generateRunnerOut = () => {
    let runner = document.createElement("div");
    let container = document.getElementById("runner-container");
    runner.className = "runner-out";
    container.appendChild(runner);
    if (isPaused) {
        runner.style.animationPlayState = "paused";
    }
    return runner;
}

//getting in
gettingIn = (delay, timer) => {

    setTimeout(() => {
        let runner = setInterval(() => {
            let runner = generateRunner();
            runner.style.display = "hidden";
        }, delay);
        setTimeout(() => { clearInterval(runner) }, timer);
        created = Math.floor(timer / delay);
    }, 2000)


};

//Getting Out
//getting in
gettingOut = (count, timer) => {
    let interval = timer / count;
    setTimeout(() => {
        let runner = setInterval(() => {
            let runner = generateRunnerOut();
        }, interval);
        setTimeout(() => {
            clearInterval(runner);
            let model = document.getElementById("text");
            if ((level >= 1 && level <= 15) && !isPaused) {
                model.style.display = "block";
            }
        }, timer);
    }, 3000)
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
var score = 0;
var scorecard = document.getElementById('scorecard');
startGame = () => {
    stopAnimation();
    if (lifes > 0) {
        if (level == 1) {
            let delayRandom = getRandomIntInclusive(5000, 4000);
            let timerRandom = getRandomIntInclusive(9000, 10000);
            let created = Math.floor(timerRandom / delayRandom);
            start(delayRandom, timerRandom);

        } else if (level == 2) {
            let delayRandom = getRandomIntInclusive(4500, 3500);
            let timerRandom = getRandomIntInclusive(8500, 9500);
            start(delayRandom, timerRandom);

        } else if (level == 3) {
            let delayRandom = getRandomIntInclusive(4000, 3000);
            let timerRandom = getRandomIntInclusive(8000, 9000);
            start(delayRandom, timerRandom);
        }
        else if (level == 4) {
            let delayRandom = getRandomIntInclusive(3500, 2500);
            let timerRandom = getRandomIntInclusive(7500, 8500);
            start(delayRandom, timerRandom);
        }
        else if (level == 5) {
            let delayRandom = getRandomIntInclusive(3000, 2000);
            let timerRandom = getRandomIntInclusive(7000, 8000);
            start(delayRandom, timerRandom);
        }
        else if (level == 6) {
            let delayRandom = getRandomIntInclusive(2500, 1500);
            let timerRandom = getRandomIntInclusive(6500, 7500);
            start(delayRandom, timerRandom);
        }
        else if (level == 7) {
            let delayRandom = getRandomIntInclusive(2000, 1400);
            let timerRandom = getRandomIntInclusive(6000, 7000);
            start(delayRandom, timerRandom);
        }
        else if (level == 8) {
            let delayRandom = getRandomIntInclusive(1500, 1300);
            let timerRandom = getRandomIntInclusive(5500, 6500);
            start(delayRandom, timerRandom);
        }
        else if (level == 9) {
            let delayRandom = getRandomIntInclusive(1400, 1200);
            let timerRandom = getRandomIntInclusive(5000, 6000);
            start(delayRandom, timerRandom);
        }
        else if (level == 10) {
            let delayRandom = getRandomIntInclusive(1300, 1100);
            let timerRandom = getRandomIntInclusive(4500, 5500);
            start(delayRandom, timerRandom);
        }
        else if (level == 11) {
            let delayRandom = getRandomIntInclusive(1200, 1000);
            let timerRandom = getRandomIntInclusive(4000, 5000);
            start(delayRandom, timerRandom);
        }
        else if (level == 12) {
            let delayRandom = getRandomIntInclusive(1100, 900);
            let timerRandom = getRandomIntInclusive(3500, 4500);
            start(delayRandom, timerRandom);
        }
        else if (level == 13) {
            let delayRandom = getRandomIntInclusive(1000, 800);
            let timerRandom = getRandomIntInclusive(3000, 4000);
            start(delayRandom, timerRandom);
        }
        else if (level == 14) {
            let delayRandom = getRandomIntInclusive(1000, 1500);
            let timerRandom = getRandomIntInclusive(6000, 9000);
            start(delayRandom, timerRandom);
        }
        else if (level == 15) {
            let delayRandom = getRandomIntInclusive(800, 1000);
            let timerRandom = getRandomIntInclusive(7000, 8000);
            start(delayRandom, timerRandom);
        }
    } else {
        let model = document.getElementById("text");
        model.style.display = "none";
        var gameover = document.getElementById('gameover');
        gameover.style.display = "block";

        scorecard.style.display = "block";
        scorecard.innerHTML = "Your score : " + score;
    }
}
validateAnswer = () => {
    let entered = document.getElementById("answer").value;
    if (Number(entered) == answer) {
        document.getElementById("text").style.display = "none";
        document.getElementById("bus").style.animation = "bus-move 7s linear";
        if (level == 1) {
            score = score + 10;
            document.getElementById("level").innerHTML = "Level 2";
            level = 2;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 2) {
            score = score + 15;
            document.getElementById("level").innerHTML = "Level 3";
            level = 3;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        }
        else if (level == 3) {
            score = score + 20;
            document.getElementById("level").innerHTML = "Level 4";
            level = 4;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        }
        else if (level == 4) {
            score = score + 25;
            document.getElementById("level").innerHTML = "Level 5";
            level = 5;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        }
        else if (level == 5) {
            score = score + 30;
            document.getElementById("level").innerHTML = "Level 6";
            level = 6;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        }
        else if (level == 6) {
            score = score + 35;
            document.getElementById("level").innerHTML = "Level 7";
            level = 7;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 7) {
            score = score + 40;
            document.getElementById("level").innerHTML = "Level 8";
            level = 8;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 8) {
            score = score + 40;
            document.getElementById("level").innerHTML = "Level 9";
            level = 9;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 9) {
            score = score + 45;
            document.getElementById("level").innerHTML = "Level 10";
            level = 10;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 10) {
            score = score + 50;
            document.getElementById("level").innerHTML = "Level 11";
            level = 11;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 11) {
            score = score + 50;
            document.getElementById("level").innerHTML = "Level 12";
            level = 12;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 12) {
            score = score + 55;
            document.getElementById("level").innerHTML = "Level 13";
            level = 13;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 13) {
            score = score + 60;
            document.getElementById("level").innerHTML = "Level 14";
            level = 14;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 14) {
            score = score + 70;
            document.getElementById("level").innerHTML = "Level 15";
            level = 15;
            document.getElementById('score').innerHTML = "Score : " + score;
            console.clear();
        } else if (level == 15) {
            score = score + 100;
            document.getElementById('win').style.display = "block";
            let scorecard = document.getElementById('scorecard');
            scorecard.style.display = "block";
            scorecard.innerHTML = "Your score : " + score;
        }
        startGame();
    } else {
        window.alert("wrong Input");
        lifes--;
        let hearts = document.getElementsByClassName("heart");
        hearts[0].remove();
        console.log("life : " + lifes);
        startGame();
    }

}

function start(delayRandom, timerRandom) {
    let created = Math.floor(timerRandom / delayRandom);
    let dropped = getRandomIntInclusive(1, created);
    gettingIn(delayRandom, timerRandom);
    gettingOut(dropped, timerRandom);
    console.log("In " + created);
    console.log("Out " + dropped);
    console.log("default Passengers " + defaultPassengers);
    console.log("Answer : ", (defaultPassengers + created) - dropped);
    answer = (defaultPassengers + created) - dropped;
    defaultPassengers = answer;
}

//getting out

/**setTimeout(()=>{
    setInterval(()=>{
        let runner = generateRunnerOut();

    },1000);
},4000) */

