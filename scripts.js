document.querySelectorAll("a[download]").forEach(button => {
    button.addEventListener("click", function() {
        alert("Your download will begin soon!");
    });
});
