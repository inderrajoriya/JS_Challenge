function add(item) {
    const li = document.createElement('li')
    li.innerHTML= `${item}`
 const newlist= document.querySelector("list-item")
newlist.appendChild(li)

}


add('HTML')