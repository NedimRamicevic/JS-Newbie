const div = document.createElement('div');
div.className = "naber2";
document.querySelector('.info').appendChild(div)
for (let index = 0; index < 4; index++) {
    let li = document.createElement('li');
    li.className = "nedim";
    li.innerText = "x";
    li.style.color = "red";
    document.querySelector('.naber2').appendChild(li)   
}