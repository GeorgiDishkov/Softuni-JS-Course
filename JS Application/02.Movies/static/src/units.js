
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
        let user = JSON.parse(localStorage.getItem("user"));
        window.accessToken = user.accessToken
        let wellcomeText = userItams[0].children
        let userObj = JSON.parse(localStorage.getItem("user"))
        wellcomeText[0].textContent = `Welcome, ${userObj.username}`;
        userItams.forEach((e)=> e.style.display = ``)
        guestItams.forEach((e)=> e.style.display = `none`)
    }else{
        userItams.forEach((e)=> e.style.display = `none`)
        guestItams.forEach((e)=> e.style.display = ``)
    }
}