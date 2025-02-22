
var grundlagenLevel;
var funtktionenLevel;
var geometrieLevel;
var zufallLevel;
var pLevel;



function activateDisplayBar(inputObject, levelsToFill){
    console.log(inputObject);
    levelsToFill = parseInt(levelsToFill);
    console.log(levelsToFill);
    for (let i = 0; i<levelsToFill;i++){
        console.log(inputObject[i])
        inputObject[i].style.display = "block";
    }
    console.log(inputObject);
}


function activateTopics(){
    let tempEl = document.getElementsByClassName("displayBarGrundlagenGeneral");
    activateDisplayBar(tempEl,grundlagenLevel);
    tempEl = document.getElementsByClassName("displayBarFunktionen");
    activateDisplayBar(tempEl,funtktionenLevel);
    tempEl = document.getElementsByClassName("displayBarGeometrie");
    activateDisplayBar(tempEl,geometrieLevel);
    tempEl = document.getElementsByClassName("displayBarZufall");
    activateDisplayBar(tempEl,zufallLevel);
    tempEl = document.getElementsByClassName("displayBarPruefung");
    activateDisplayBar(tempEl,pLevel);

}


function loadAllStats(){
    grundlagenLevel = localStorage.getItem("grundlagen");
    funtktionenLevel = localStorage.getItem("funktionen");
    geometrieLevel = localStorage.getItem("geometrie");
    zufallLevel = localStorage.getItem("zufall");
    pLevel = localStorage.getItem("prüfung");

}



document.addEventListener('DOMContentLoaded', function() {
    loadAllStats();
    activateTopics();

});