const banana = 7 // inches
const lego = 0.377 // inches
const trumpet = 19 // inches
const cat = 9.5 // inches
let userHeight = document.getElementById("heightCalcInput").value;


function getHeight(){
    let userHeight = document.getElementById("heightCalcInput").value;
    //inches to lego converter
    let legoHeight = userHeight / lego
    let corLegoHeight = legoHeight.toFixed(2)
    //inches to cat converter
    let catHeight = userHeight / cat
    let corCatHeight = catHeight.toFixed(2)
    // inches to trumpet converter
    let trumpetHeight = userHeight / trumpet
    let corTrumpetHeight = trumpetHeight.toFixed(2)
    // inches to banana converter
    let bananaHeight = userHeight / banana
    let corBanHeight = bananaHeight.toFixed(2)
    document.getElementById("outputDiv").innerHTML = ("<p>You are " + corCatHeight + " cats tall <br> You are "+ corBanHeight + " bananas tall! <br> You are "+ corLegoHeight + " legos tall! <br>You are " + corTrumpetHeight + " trumpets tall!</p>")
}