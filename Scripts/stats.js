
let grundlagendLevel;
let funtktionenLevel;
let GeometrieLevel;
let ZufallLevel;
let Prüfung;



function activateDisplayBar(inputObject, levelsToFill){
    console.log(inputObject);
    for (let i = 0; i<levelsToFill;i++){
        console.log(inputObject[i])
        inputObject[i].style.display = "block";
    }
    console.log(inputObject);
}


function activateTopic(topic){
    let achievedLevels = localStorage.getItem(topic);
    activateDisplayBar(topic,achievedLevels);
}

function loadAllStats(){
    
    let displayBarElements = document.getElementsByClassName('displayBarGrundlagenGeneral');
    activateDisplayBar(displayBarElements,5);
}

function loadStats(levelName, LocalStorageName){
    levelName = LogalStorage.getItem(LocalStorageName);
}




document.addEventListener('DOMContentLoaded', function() {
    loadAllStats();
    // Your code here
});