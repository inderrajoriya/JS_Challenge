
document.getElementById("para").innerText = " Hare Krishna ";
let btn = document.getElementById('btn');

btn.addEventListener("click" , function() {
    let box = document.querySelector(".box")
    box.style.backgroundColor='#ffff'
})


let newDiv = document.createElement('div')
newDiv.textContent = "this is new div"
document.body.appendChild(newDiv)


let newLi = document.createElement('li');
newLi.textContent = 'New list item';
let ul = document.querySelector('ul');
ul.appendChild(newLi);


let heading = document.getElementById('heading')
heading.parentNode.removeChild(heading)

let parentElement = document.getElementById('unorderList');
parentElement.removeChild(parentElement.lastElementChild);

document.querySelector('img').setAttribute('src', 'newImagePath.jpg');
let element = document.getElementById('myElement');
element.classList.add('newClass');
element.classList.remove('oldClass');
