document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "Text has been changed!";
});


document.getElementById("toggleImage").addEventListener("dblclick", function() {
    this.style.display = this.style.display === "none" ? "block" : "none";
});


document.getElementById('chngeColor').addEventListener('mousemove' , function () {
    this.style.backgroundColor = "yellow";
})

document.getElementById('resetColor').addEventListener('mouseout' , function () {
    this.style.backgroundColor = "red";
    
})

document.getElementById('keydown').addEventListener('keydown' , function(e){
    console.log("Key pressed:", e.key);
})

document.getElementById('keyup').addEventListener('keyup',function(){
    document.getElementById('para').textContent=this.value;

})

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted:", new FormData(this));
});


document.getElementById('cars').addEventListener('change' , function() {
    document.getElementById('optionShowing').textContent = "Selected: " + this.value;
})

document.getElementById("itemList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        document.getElementById('listItemShow').textContent = `${event.target.textContent}`
        console.log("Clicked item:", event.target.textContent);
    }
});

document.getElementById("addChild").addEventListener("click", function() {
    const newChild = document.createElement("div");
    newChild.textContent = "New Child Element";
    document.getElementById("parentElement").appendChild(newChild);
});

document.getElementById("parentElement").addEventListener("click", function(event) {
    console.log("Child element clicked:", event.target.textContent);
});