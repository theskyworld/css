const cycle = document.getElementById('cycle');
console.log(cycle);
document.addEventListener('click',function (event){
    // console.log(event.clientX)
    // console.log(cycle.backgroundColor)
    cycle.style.transform = 'translateY(' + (event.clientY - 30) + 'px)'
    cycle.style.transform += 'translateX(' + (event.clientX - 30) + 'px)'
})