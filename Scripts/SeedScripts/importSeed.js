/**
 * Seed Structur per index
 * base 36
 * 0,1 levels
 * 2: grundlagen
 * 3: funktionen
 * 4: geometrie
 * 5: zufall
 * 6: prüfung
 * 8: regionA
 * 10: regionB
 * 12: regionC
 * 14: regionD
 * 16: regionE
 * 18: regionF
 * 20: regionG
 */

var seed = "No seed-string loaded";
var defaultSeed = "0000000000000000000000000000000000000000000000000000";
const maxLevel = 7;

//Lookuptable to go fast
const charMap = {
    a: 10, b: 11, c: 12, d: 13, e: 14, f: 15, g: 16, h: 17, i: 18, j: 19,
    k: 20, l: 21, m: 22, n: 23, o: 24, p: 25, q: 26, r: 27, s: 28, t: 29,
    u: 30, v: 31, w: 32, x: 33, y: 34, z: 35
};

function loadSeed(){
    var sessionSeed = extractQueryString();
    if (checkSeed(sessionSeed)) {
        saveSeed(sessionSeed);
    } else {
        console.log("loading default seed " + defaultSeed);
        saveSeed(defaultSeed);
    }
}


function checkSeed(seedToChecks) {
    // TODO decide on the length/structur of the seed
    if (seedToChecks.length<20) {
        console.log("Seed too shord");
        localStorage.setItem("level","0");
        return false;
    } 
    else if (seedToChecks.substring(0,2)==="00"){
        console.log("No levels acheived");
        localStorage.setItem("level","0");
        return false;
    }
    console.log(seedToChecks + "is a valid seed");
    return true;
}

function saveSeed(seedToSave){
    seed = seedToSave;
    saveLevel(seedToSave);
    saveStats(seedToSave);
    saveWorlds(seedToSave);
}


function extractQueryString() {
    // Get the full URL of the current page
    var currentUrl = window.location.href;
    // Split the URL to get the query string part
    var queryString = currentUrl.split("?")[1];
    if (queryString === undefined) {
        return defaultSeed;
    }
    // Extracts the seed, only works if there is only one query parameter
    return queryString.split("=")[1];
}

function saveSeed(seedToSave){
    seed = seedToSave;
    if (seedToSave!==defaultSeed){
        localStorage.setItem("sessionSeed", seed);
        saveLevel(seed);
        saveStats(seed);
        saveWorlds(seed);
        localStorage.setItem("pageVisited","true");
    } else {
        localStorage.setItem("sessionSeed", seed);
        if (localStorage.getItem("pageVisited")==="false"){
            seed = defaultSeed;
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
    // Level 99 is max
    currentLevel = Math.min(currentLevel,99);
    localStorage.setItem("level",currentLevel);
    console.log(currentLevel);
}

function saveStats(seedToCheck){
    var temp = getIntegerValue(seedToCheck.substring(2,3));
    if (temp>14){ temp = 14};
    localStorage.setItem("grundlagen",temp);
    temp = getIntegerValue(seedToCheck.substring(3,4));
    if (temp>14){ temp = 14};
    localStorage.setItem("funktionen",temp);
    temp = getIntegerValue(seedToCheck.substring(4,5));
    if (temp>14){ temp = 14};
    localStorage.setItem("geometrie",temp);
    temp = getIntegerValue(seedToCheck.substring(5,6));
    if (temp>14){ temp = 14};
    localStorage.setItem("zufall",temp);
    temp = getIntegerValue(seedToCheck.substring(6,7));
    if (temp>14){ temp = 14};
    localStorage.setItem("prüfung",temp);

}

function saveWorlds(seedToCheck){
    var amount;
    var index = 8;
    for (let i = 0; i < 7; i++) {
        // Get the character code for 'A' (65) and add the loop index
        let char = String.fromCharCode(65 + i);
        amount = getIntegerValue(seedToCheck.substring(index,index+1));
        if (amount>7) amount = 7;
        localStorage.setItem("region" + char, amount);
        index+=2;
    }
}



function hasSeed(){
    return seed!="No seed-string loaded";
}



function getSessionSeed(){
    return localStorage.getItem("sessionSeed");
}

//Translates chars into integers, max length of 2 digits
function getIntegerValue(stringInput){
    if (stringInput.length==1){
        return lookUp(stringInput);
    }

    if (stringInput.substring(0,1)==="0") {
        return parseInt(lookUp(stringInput.substring(1,2),10));}

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

function getSeed(){
    if (hasSeed()){
        return seed;
    }
    console.log("No seed-string loaded");
    return null;
}




loadSeed();

