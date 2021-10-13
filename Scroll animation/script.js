const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes(){
const triggerBottom = window.innerHeight * 2.6 / 5 

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
//  the getBoundingClientRect is a method that gets the size and position of an element relative to te view-port 

if(boxTop < triggerBottom){
    box.classList.add('show')
}else {
    box.classList.remove('show')
}
    })
}
