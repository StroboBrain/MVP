

function navigateToPage(pageUrl) {
    try {
        window.location.href = pageUrl;
    } catch (error) {
        console.error('Navigation error:', error);
    }
}

//TODO nicer implementation and help txt
function helpButton(){
    alert("Help text will follow");
}