/**
 * Saves the input value to localStorage and returns the input as a string.
 */

var seed = "No seed-string loaded";



/**
 * Takes the input value a string and checks if it is a valid seed.
 * 
 * Currently Seeds are 3 digits long
 */

function checkSeed(seed) {
    // TODO decide on the length/structur of the seed currently 3 chars
    if (seed.length==3) {
        return true;
    }
    
    console.log(seed + "is not a valid seed");
    return false;
    
}


function extractQueryString() {
    // Get the full URL of the current page
    var currentUrl = window.location.href;
    
    // Split the URL to get the query string part
    var queryString = currentUrl.split("?")[1];

    if (queryString == undefined) {
        console.log("No query string found, default seed loaded: 000");
        return "000";
    }

    // Extracts the seed, only works if there is only one query parameter
    return queryString.split("=")[1];
}

function saveSeed(seedToSave){
    seed = seedToSave;
    localStorage.setItem("sessionSeed", seed);
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

//load the seed on opening the webpage
loadSeed();
