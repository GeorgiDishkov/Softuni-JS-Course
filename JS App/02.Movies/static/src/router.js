
export function createView(section) {
    hideAll()
    section.style.display = '';
}

 let views = [...document.querySelectorAll(".view-selection")]
function hideAll() {
    views.forEach((e) => e.style.display = 'none')
}
let userItams = [...document.querySelectorAll(`#user`)];
let guestItams = [...document.querySelectorAll(`#guest`)];

export function naviUpdate () {
    if(localStorage.getItem("user")){
        userItams.forEach((e)=> e.style.display = ``)
        guestItams.forEach((e)=> e.style.display = `none`)
    }else{
        userItams.forEach((e)=> e.style.display = `none`)
        guestItams.forEach((e)=> e.style.display = ``)
    }
}