import { routing } from './router.js'
export function auth (username) {
    // console.log(username , auth);
    if(username){
        document.getElementById("guest").style.display = "none";
        document.getElementById("user").style.display = "inline";
        document.getElementsByClassName(`email`)[0].childNodes[1].textContent = username;
    }else{
        document.getElementById("guest").style.display = "inline";
        document.getElementById("user").style.display = "none";
        document.getElementsByClassName(`email`)[0].childNodes[1].textContent = `guest`
    }
    routing(`Home`);
}