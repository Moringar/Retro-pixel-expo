console.log("Script activé! beep-boop")

//🟢 QUERY ET VARIABLES ================================================================================================
// ================================================================================================

const poster = document.querySelector(".affiche-container");
const titleShaker = document.querySelector("#titleShaker")
const logoHolder = document.querySelector("#logoHolder")

let appleClick = "0"
let posterScale = 0.9;

poster.style.transform = `scale(${posterScale})`

//🔴  FIN QUERY ET VARIABLES ================================================================================================



//🟢 PARRALAX ELEMENTS  ================================================================================================
// ================================================================================================

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
const phone = document.querySelector("#phone")
const phoneCase = document.querySelector("#phoneCase")

//icones en vrac-----------------------------------------
const twitterIcon = document.querySelector("#twitterIco")
const tiktikIcon = document.querySelector("#tiktokIco")
const nintendo = document.querySelector("#switch")
const joyB = document.querySelector("#joyConbleu")
const joyR = document.querySelector("#joyConRouge")
const netflixIcon = document.querySelector("#netflixIco")
const plante = document.querySelector("#plante")


//Au premier plan-------------------------------
const handMe = document.querySelector("#handMe")

//🔴 FIN PARRALAX ELEMENTS  ================================================================================================



//🟢 FONCTIONS ================================================================================================
// ================================================================================================

//La position horizontale de mon curseur de souris est 

//Normaliser et obtenir un alpha d'une valeur donnée (0 à 1)
function normalize(val, max, min){ return (val - min) / (max - min); }


//lerp (min, max, alpha) 
//Pointe une valeur définie par l'alpha (0 à 1), qui se situe entre deux valeurs prédéfinies(x, y)
function lerp(x, y, alpha){ return x * (1 - alpha) + y * alpha; }


// Alpha centré =   minValue: 1 - center:0 -  maxValue:1
function center(alpha){
    let newAlpha = lerp(-1, 1, alpha)
    if( newAlpha < 0) {return newAlpha *= -1}
    else{ return newAlpha}
}

//🔴 FIN DES FONCTIONS ================================================================================================



//🟢 MAIN PARRALAX CLUSTERFUCK ======================================================================
// ================================================================================================

// Quand l'utilisateur bouge son curseur sur son écran.
window.addEventListener("mousemove",(e)=>{

    //alpha form where the user pointer is on the window-------------------------------------------------
    let cursorVerticalAlpha = normalize(e.clientY, window.innerHeight, 0.0);
    let cursorHorizontalAlpha = normalize(e.clientX, window.innerWidth, 0.0);

    // console.log(cursorVerticalAlpha+"/"+cursorHorizontalAlpha)

    console.log(center(cursorHorizontalAlpha))

    


    // 🦕 Rotation du poster & des informations superposées----------------------------------------------------------

    // Le poster entier
    poster.style.transform = `rotateY(${lerp(-8, 8, cursorHorizontalAlpha)}deg) rotateX(${lerp(8, -8, cursorVerticalAlpha)}deg) scale(${posterScale})`

    poster.style.filter = `
    drop-shadow(${lerp(4, -4, cursorHorizontalAlpha)}px ${lerp(4, -4, cursorVerticalAlpha)}px ${lerp(2, 0, center(cursorHorizontalAlpha))}px white)
    
    drop-shadow(${lerp(10, -10, cursorHorizontalAlpha)}px ${lerp(10, -10, cursorVerticalAlpha)}px 12px #5a0799)`

    // Les éléments du header
    titleShaker.style.transform = `
    translate( ${lerp(-3, 3, cursorHorizontalAlpha)}%, ${lerp(-6, 10, cursorVerticalAlpha)}%)
    rotateY(${lerp(-8, 8, cursorHorizontalAlpha)}deg) 
    rotateX(${lerp(8, -5, cursorVerticalAlpha)}deg)`

    titleShaker.style.filter = `drop-shadow(${lerp(4, -2, cursorHorizontalAlpha)}px ${lerp(4, -2, cursorVerticalAlpha)}px 0px #5a0799)`

    // Les éléments du footer
    logoHolder.style.transform = `rotateY(${lerp(-8, 8, cursorHorizontalAlpha)}deg) rotateX(${lerp(8, -8, cursorVerticalAlpha)}deg) scale(${posterScale})`
    logoHolder.style.filter = `
    drop-shadow(${lerp(4, -4, cursorHorizontalAlpha)}px ${lerp(4, -4, cursorVerticalAlpha)}px ${lerp(2, 0, center(cursorHorizontalAlpha))}px #5a0799)
    drop-shadow(${lerp(10, -10, cursorHorizontalAlpha)}px ${lerp(10, -10, cursorVerticalAlpha)}px 12px #5a0799)`
    logoHolder.style.transform = `
    translate( ${lerp(-3, 3, cursorHorizontalAlpha)}%, ${lerp(-15, 15, cursorVerticalAlpha)}%)
    rotateY(${lerp(-8, 8, cursorHorizontalAlpha)}deg) 
    rotateX(${lerp(8, -5, cursorVerticalAlpha)}deg)`

    // 👻 opacité du module de bas de page selon la proximité



    // 🦕 Parralax interieur ---------------------------------------------------------------------------------------------
    // background
    background.style.transform = `translate( ${lerp(5, -5, cursorHorizontalAlpha)}%, ${lerp(5, 0, cursorVerticalAlpha)}%)`

    // Front of the back after the middle 👍---------------------------------------------------------------------------
    pipes.style.transform = `translate( ${lerp(7, -7, cursorHorizontalAlpha)}%, ${lerp(12, -10, cursorVerticalAlpha)}%)`

    //Aside the middle------------------------------------------------------------------------------------------------
    mac.style.transform = `translate( ${lerp(10, -10, cursorHorizontalAlpha)}%, ${lerp(20, 0, cursorVerticalAlpha)}%)`
    table.style.transform = `translate( ${lerp(7.5, -7.5, cursorHorizontalAlpha)}%, ${lerp(11, 0, cursorVerticalAlpha)}%)`

    // middle------------------------------------------------------------------------------------------------------------
    poolElement.style.transform = `translate( ${lerp(1, -1, cursorHorizontalAlpha)}%, ${lerp(1, 0, cursorVerticalAlpha)}%)
    skewX(${lerp(-1, 1, cursorHorizontalAlpha)}deg)
    scaleY(${lerp(1, 1.1, cursorVerticalAlpha)})`

    portal.style.transform = `translate( ${lerp(3, -3, cursorHorizontalAlpha)}%, ${lerp(1, -1, cursorVerticalAlpha)}%) rotate(10deg) skewX(-28deg)`



    // middleGirl------------------------------------------------------------------------------------------------------
    girlHead.style.transform = `translate( ${lerp(4, -4, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`

    girlArm.style.transform = `translate( ${lerp(3, -3, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`

    girlLeg.style.transform = `translate( ${lerp(10, -10, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`
    
    girlShirt.style.transform = `translate( ${lerp(9, -9, cursorHorizontalAlpha)}%, ${lerp(2, 0, cursorVerticalAlpha)}%)`

    //Phone and 3D illusion------------------------------------------------------------------------------------------------------------------------------
    phone.style.transform = `rotateY(${lerp(-10, 10, cursorHorizontalAlpha)}deg) rotateX(${lerp(10, -10, cursorVerticalAlpha)}deg) scale(${posterScale})`

    phoneCase.style.transform = `rotateY(${lerp(-10, 10, cursorHorizontalAlpha)}deg) rotateX(${lerp(10, -10, cursorVerticalAlpha)}deg) scale(${posterScale})
    translate( ${lerp(-1, 1, cursorHorizontalAlpha)}%, ${lerp(-2, 2, cursorVerticalAlpha)}%)`


    // pool icons-------------------------------------------------------------------------------------------------------------
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
//🔴 FIN DU MAIN PARRALAX CLUSTERFUCK =====================================================================================



//🟢 Comportement du module "plus d'informations" du bas de page ===========================
// ================================================================================================

// Ouverture de la secion informations
let info = document.querySelector('#info')
let exit = document.querySelector("#exit")

gsap.to(info.children, {display:"none",opacity:0, duration:0, scale:0})

info.addEventListener("click",()=>{
    gsap.to("#info", {y:-60, width:"80vh", height:"fit-content", borderRadius:"12px", duration:0.1,})
    gsap.to("#info", {backgroundColor:"rgba(255, 255, 255, 0)"})
    gsap.to(info.children, {display:"flex",opacity:100, duration:0.2, scale:1})

    event.stopPropagation();
    })


//fermeture de la section informations
exit.addEventListener("click",()=>{
    gsap.to("#info", {y:0, width:"9vh", height:"9vh", borderRadius:"100% 100% 0% 0%", duration:0.1,})
    gsap.to("#info", {backgroundColor:"#7D29C7"})
    gsap.to(info.children, {display:"none",opacity:0, duration:0, scale:0})
    event.stopPropagation();

})

//🔴 Fin du module "plus d'informations" du bas de page ============================================



//🟢 EasterEgg ================================================================================================
// ================================================================================================

mac.addEventListener("click",()=>{
    
    if (appleClick < 15){

        appleClick++
        

        mac.style.filter = "brightness(110%)";
    
        setTimeout(()=>{mac.style.filter = "brightness(100%)"}, 100);
    }

    
    else{
        mac.style.filter = "brightness(200%)"
        gsap.to("#girlArm", {y:450, ease:'circ.out', duration:2})
        gsap.to("#girlArm", {x:-200, ease:'circ.out', duration:1})
        gsap.to("#girlArm", {opacity:0, duration:0.5, delay:0.5})
        gsap.to("#girlArm", {display:'none', delay:4})

    }
})
//🔴 FIN EasterEgg ================================================================================================