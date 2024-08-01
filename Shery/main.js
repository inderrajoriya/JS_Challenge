var elem = document.querySelectorAll(".elem")
elem.forEach(function(val){
    val.addEventListener("mouseenter" , function(e) {
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave" , function(e) {
        val.childNodes[3].style.opacity=0

    })
    val.addEventListener("mousemove" , function(e) {
        val.childNodes[3].style.left = e.x+'px'
        val.childNodes[3].top = e.y + "px"
    })
})

