// downloading files from the file

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path/to/your/file.zip';  // Change to your file's URL
    link.download = 'yourfile.zip';       // Set the download file name
    link.click();  // Trigger the download
});
