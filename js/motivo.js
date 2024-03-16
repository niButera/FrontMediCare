document.getElementById("expandButton").addEventListener("click", function() {
    console.log("Botão clicado!");
    var expandedContent = document.getElementById("expandedContent");
    if (expandedContent.style.display === "none") {
        expandedContent.style.display = "block";
    } else {
        expandedContent.style.display = "none";
    }
});