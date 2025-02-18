/*
This script translates the seed into the charts
*/


// Seed is storeda as a local field (array of integers)
var sessionSeed;



function initializeStats(){
    sessionSeed = localStorage.getItem("sessionSeed");
}

function seedToArray(seedInput){
    return seedInput.split("");
}

// Input: Array of strings
// Output: Array of integers
function seedStringArrayToInt(seedArray){
    // Logs if the input was not an array
    if (!Array.isArray(seedArray)){
        console.log("Input is not an array" + seedArray);
        return null;
    }

    for (var i = 0; i < seedArray.length; i++){
        seedArray[i] = charToNumber(seedArray[i]);
        
    }
    return seedArray;
}

// Decoding the string, with a = 10
function charToNumber(char) {
    // Convert to lowercase to handle both uppercase and lowercase inputs
    char = char.toLowerCase();
    // Get the ASCII value of 'a' and subtract it to get a = 0, b = 1, etc.
    // Then add 10 to start from 10
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
}
function initializeBarChart(inputArray) {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Vektor', 'Lazer', 'Prozente'],
            datasets: [{
                label: "Fähigkeiten",
                data: inputArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}




// Is run on loaded
function initializeCharts(){
    initializeStats();
    var skillRanks = seedToArray(sessionSeed);
    initializeBarChart(skillRanks);
}

// Initialize the chart when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeCharts);
