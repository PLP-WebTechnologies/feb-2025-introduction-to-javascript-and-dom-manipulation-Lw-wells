
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("title").textContent = "Nissan Patrol Y62 is one of the best cars to drive 🎉";
    document.getElementById("description").style.color = "red"; 
});


document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.classList.toggle("hidden"); 
});