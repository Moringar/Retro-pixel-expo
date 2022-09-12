console.log("Script activé! beep-boop")



// QUERY ET VARIABLES ########################################################################################

const poster = document.querySelector(".affiche-container");
let appleClick = "0"
let posterScale = 0.7;

// FIN QUERY ET VARIABLES ########################################################################################





//PARRALAX ELEMENTS  ##################################################################################

const poolElement = document.querySelector("#pool")
const portal = document.querySelector("#portal")
const background = document.querySelector("#background")

const pipes = document.querySelector("#pipes")

const table = document.querySelector("#table")
const mac = document.querySelector("#mac")

const girlHead = document.querySelector("#girlHead")
const girlArm = document.querySelector("#girlArm")
const girlShirt = document.querySelector("#girlShirt")
const girlLeg = document.querySelector("#girlLeg")

//icones en vrac
const twitterIcon = document.querySelector("#twitterIco")
const tiktikIcon = document.querySelector("#tiktokIco")
const nintendo = document.querySelector("#switch")
const joyB = document.querySelector("#joyConbleu")
const joyR = document.querySelector("#joyConRouge")
const netflixIcon = document.querySelector("#netflixIco")

const plante = document.querySelector("#plante")


//Au premier plan
const handMe = document.querySelector("#handMe")

//FIN PARRALAX ELEMENTS  ##################################################################################







// FONCTIONS #########################################################################################

//Normaliser mes valeurs et obtenir un alpha
function normalize(val, max, min){ return (val - min) / (max - min); }

//ma lerp-machine (min, max, alpha)
function lerp(x, y, a){ return x*(1-a) + y*a;}

// FIN DES FONCTIONS #########################################################################################




//RESIZE DU POSTER ################################################################################
poster.addEventListener("click", ()=>{ 
    posterScale = 0.9;
    poster.style.transform = `scale(${posterScale})` 
})



//MAIN PARRALAX CLUSTERFUCK ################################################################################
window.addEventListener("mousemove",(e)=>{


    //alpha form where the user pointer is on the window
    let cursorVerticalAlpha = normalize(e.clientY, window.innerHeight, 0.0);
    let cursorHorizontalAlpha = normalize(e.clientX, window.innerWidth, 0.0);


    // Morph du poster pour donner l'impession d'une rotation
    



    poster.style.transform = `rotateY(${lerp(-5, 5, cursorHorizontalAlpha)}deg) rotateX(${lerp(5, -5, cursorVerticalAlpha)}deg) scale(${posterScale})`

    //Parralax ==============================================================================================================
    // background
    background.style.transform = `translate( ${lerp(5, -5, cursorHorizontalAlpha)}%, ${lerp(5, 0, cursorVerticalAlpha)}%)`

    // Front of the back after the middle 👍
    pipes.style.transform = `translate( ${lerp(7, -7, cursorHorizontalAlpha)}%, ${lerp(12, -10, cursorVerticalAlpha)}%)`

    //Aside the middle
    mac.style.transform = `translate( ${lerp(10, -10, cursorHorizontalAlpha)}%, ${lerp(20, 0, cursorVerticalAlpha)}%)`
    table.style.transform = `translate( ${lerp(7.5, -7.5, cursorHorizontalAlpha)}%, ${lerp(11, 0, cursorVerticalAlpha)}%)`

    // middle
    poolElement.style.transform = `translate( ${lerp(1, -1, cursorHorizontalAlpha)}%, ${lerp(1, 0, cursorVerticalAlpha)}%)
    skewX(${lerp(-1, 1, cursorHorizontalAlpha)}deg)
    scaleY(${lerp(1, 1.1, cursorVerticalAlpha)})`

    portal.style.transform = `translate( ${lerp(3, -3, cursorHorizontalAlpha)}%, ${lerp(1, -1, cursorVerticalAlpha)}%) rotate(10deg) skewX(-28deg)`



    // middleGirl
    girlHead.style.transform = `translate( ${lerp(4, -4, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`

    girlArm.style.transform = `translate( ${lerp(3, -3, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`

    girlLeg.style.transform = `translate( ${lerp(10, -10, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`
    
    girlShirt.style.transform = `translate( ${lerp(9, -9, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`

    // pool icons
    twitterIcon.style.transform = `translate( ${lerp(15, -15, cursorHorizontalAlpha)}%, ${lerp(12, 0, cursorVerticalAlpha)}%)`

    tiktikIcon.style.transform = `translate( ${lerp(13, -13, cursorHorizontalAlpha)}%, ${lerp(20, 0, cursorVerticalAlpha)}%)`

    nintendo.style.transform = `translate( ${lerp(7, -7, cursorHorizontalAlpha)}%, ${lerp(12, 0, cursorVerticalAlpha)}%)`

    joyB.style.transform = `translate( ${lerp(22, -22, cursorHorizontalAlpha)}%, ${lerp(12, 0, cursorVerticalAlpha)}%)`

    joyR.style.transform = `translate( ${lerp(16, -16, cursorHorizontalAlpha)}%, ${lerp(12, 0, cursorVerticalAlpha)}%)`

    netflixIcon.style.transform = `translate( ${lerp(9, -9, cursorHorizontalAlpha)}%, 0%)`

    // premier plan
    handMe.style.transform = `translate( ${lerp(-6, 6, cursorHorizontalAlpha)}%, ${lerp(-3, 3, cursorVerticalAlpha)}%)`

    plante.style.transform = `translate( ${lerp(-1, 2, cursorHorizontalAlpha)}%, ${lerp(-11, 3, cursorVerticalAlpha)}%)`


})

// EasterEgg
mac.addEventListener("click",()=>{
    
    if (appleClick < 40){

        appleClick++
        

        mac.style.filter = "brightness(110%)";
    
        setTimeout(()=>{mac.style.filter = "brightness(100%)"}, 100);
    }

    
    else{
        mac.style.filter = "brightness(200%)";
    }
})
