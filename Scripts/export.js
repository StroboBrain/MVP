function exportDivToJPEG() {
    html2canvas(document.getElementById('avatarDiv')).then(canvas => {
        var link = document.createElement('a');
        link.download = 'avatar.jpeg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    });
}