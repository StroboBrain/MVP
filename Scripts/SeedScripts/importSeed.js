/**
 * Written very sleepig
 */

var seed = "No seed-string loaded";



/**
 * Takes the input value a string and checks if it is a valid seed.
 * 
 * Currently Seeds are 3 digits long
 */

function checkSeed(seed) {
    // TODO decide on the length/structur of the seed currently 3 chars
    if (seed.length>=21) {
        return true;
    }
    console.log(seed + "is not a valid seed");
    
    return false;
}

//Lookuptable to go fast
const charMap = {
    a: 10, b: 11, c: 12, d: 13, e: 14, f: 15, g: 16, h: 17, i: 18, j: 19,
    k: 20, l: 21, m: 22, n: 23, o: 24, p: 25, q: 26, r: 27, s: 28, t: 29,
    u: 30, v: 31, w: 32, x: 33, y: 34, z: 35
};


function extractQueryString() {
    // Get the full URL of the current page
    var currentUrl = window.location.href;
    
    // Split the URL to get the query string part
    var queryString = currentUrl.split("?")[1];

    if (queryString == undefined) {
        console.log("No query string found, default seed loaded: 000..");
        return "0000000000000000000000000000000000000000000000000000000000000000000000";
    }

    // Extracts the seed, only works if there is only one query parameter
    return queryString.split("=")[1];
}

function saveSeed(seedToSave){
    seed = seedToSave;
    if (seedToSave!==0){
        localStorage.setItem("sessionSeed", seed);
        saveLevel(seed);
        saveStats(seed);
        saveWorlds(seed);
        localStorage.setItem("pageVisited","true");
    } else {
        localStorage.setItem("sessionSeed", seed);
        if (localStorage.getItem("pageVisited")==="false"){
            seed = "00000000000000000000000000000000000000000000000000000000000000000000000000";
            saveLevel(seed);
            saveStats(seed);
            saveWorlds(seed);
            localStorage.setItem("pageVisited","true");
        }
    }

    
}



function saveLevel(seedToCheck){
    console.log(seedToCheck.substring(0,2));
    var currentLevel = getIntegerValue(seedToCheck.substring(0,2));
    localStorage.setItem("level",currentLevel);
    console.log(currentLevel);
}

function saveStats(seedToCheck){
    var temp = getIntegerValue(seedToCheck.substring(2,3));
    localStorage.setItem("grundlagen",temp);
    temp = getIntegerValue(seedToCheck.substring(3,4));
    localStorage.setItem("funktionen",temp);
    temp = getIntegerValue(seedToCheck.substring(4,5));
    localStorage.setItem("geometrie",temp);
    temp = getIntegerValue(seedToCheck.substring(5,6));
    localStorage.setItem("zufall",temp);
    temp = getIntegerValue(seedToCheck.substring(6,7));
    localStorage.setItem("prüfung",temp);

}

function saveWorlds(seedToCheck){
    var amount;
    var index = 8;
    for (let i = 0; i < 7; i++) {
        // Get the character code for 'A' (65) and add the loop index
        let char = String.fromCharCode(65 + i);
        amount = getIntegerValue(seedToCheck.substring(index,index+1));
        localStorage.setItem("region" + char, amount);
        index+=2;
    }
}

function loadSeed(){
    var sessionSeed = extractQueryString();
    if (checkSeed(sessionSeed)) {
        saveSeed(sessionSeed);
    }
    console.log("Seed loaded: " + seed);
}

function hasSeed(){
    return seed!="No seed-string loaded";
}

function getSeed(){	
    if (hasSeed()){
        return seed;
    }
    console.log("No seed-string loaded");
    return null;
}

function getSessionSeed(){
    return localStorage.getItem("sessionSeed");
}

//Translates chars into integers, max length of 2 digits
function getIntegerValue(stringInput){
    if (stringInput.length==1){
        return lookUp(stringInput);
    }
    //Only works if the first char is a digit

    // Hope you like ugly code =D =D
    var value = parseInt(lookUp(stringInput.substring(0,1),10))*36 + parseInt(lookUp(stringInput.substring(1,2),10));

    return value;

    function lookUp(char){
        if (char.length!==1){
            console.error("Input must be single char");
        }

        return charMap[char] || char;
    }

}

loadSeed();
