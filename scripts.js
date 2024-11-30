// downloading files from the file

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'file/vinay.pdf';  // Change to your file's URL
    link.download = 'vinay1.pdf';       // Set the download file name
    link.click();  // Trigger the download
});


// Second button

document.getElementById('downloadBtn1').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'file/vinay1.pdf';  // Change to your file's URL
    link.download = 'vinay1.pdf';       // Set the download file name
    link.click();  // Trigger the download
});
