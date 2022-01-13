function toggle() {
    let buttonPosition = document.getElementsByTagName(`span`)[0].textContent;
  
    if (buttonPosition == `More`){
        document.getElementsByTagName(`span`)[0].textContent = `Less`
        document.getElementById(`extra`).style.display=`block`;
    }else if (buttonPosition == `Less`){
        document.getElementsByTagName(`span`)[0].textContent = `More`
        document.getElementById(`extra`).style.display=`none`;
    }
}