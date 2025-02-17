/**
 * Saves the input value to localStorage and returns the input as a string.
 * @returns {string|null} The saved input value or null if the input is invalid.
 */


function saveInput(codeInput) {
    // Saves the Input from the seed
    const inputField = document.getElementById('seedInputField');
    const inputValue = inputField.value;
    if (importSeed(codeInput)) {
        localStorage.setItem('savedInput', inputValue);
        return "Code akzeptiert";
    } else {
        return "Falscher Code eingegeben";
    }
}


/**
 * Takes the input value a string and checks if it is a valid seed.
 * 
 * Currently Seeds are 3 digits long
 */

function importSeed(seed) {
    // TODO decide on the length/structur of the seed
    if (seed.length ==3) {
        return true;
    }
    return false;
}



