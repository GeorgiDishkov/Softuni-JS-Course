function lockedProfile() {
    const main = document.getElementById(`main`);
    main.innerHTML = ``;
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    let profileCounter = 0;
    fetch(url)
        // profile creator
        .then(response => {
            response.json()
                .then(data => {
                    let keys = Object.keys(data)

                    for (const key of keys) {
                        // console.log(data[key].username);
                        //create profiles here !
                        let profileDiv = document.createElement(`div`);
                        profileDiv.className = `profile`;
                        //img holder
                        let imgHolder = document.createElement(`img`);
                        imgHolder.className = `userIcon`;
                        imgHolder.src = "./iconProfile2.png";
                        profileDiv.appendChild(imgHolder);
                        //lock label 
                        let lockLabel = document.createElement(`label`);
                        lockLabel.textContent = `Lock`;
                        profileDiv.appendChild(lockLabel);
                        //lock radio button
                        let lockRadioButton = document.createElement(`input`);
                        lockRadioButton.type = "radio";
                        lockRadioButton.name = `user${profileCounter}Locked`;
                        lockRadioButton.value = `lock`
                        lockRadioButton.checked = `true`;
                        profileDiv.appendChild(lockRadioButton);
                        // unlock label
                        let unlockLabel = document.createElement(`label`);
                        unlockLabel.textContent = `Unlock`;
                        profileDiv.appendChild(unlockLabel);
                        //lock radio button
                        let unlockRadioButton = document.createElement(`input`);
                        unlockRadioButton.type = "radio";
                        unlockRadioButton.name = `user${profileCounter}Locked`;
                        unlockRadioButton.value = `unlock`
                        profileDiv.appendChild(unlockRadioButton);
                        //br element
                        let br = document.createElement("BR");
                        profileDiv.appendChild(br);
                        //hr element
                        let hr = document.createElement("HR");
                        profileDiv.appendChild(hr);
                        // Username
                        let usernameLable = document.createElement(`label`);
                        usernameLable.textContent = `Username`;
                        profileDiv.appendChild(usernameLable);
                        //usernameInput
                        let usernameInput = document.createElement(`input`);
                        usernameInput.type = 'text';
                        usernameInput.value = data[key].username;
                        usernameInput.disabled = true;
                        usernameInput.readOnly = true;
                        profileDiv.appendChild(usernameInput);

                        //usernameDiv
                        let usernameDiv = document.createElement(`div`);
                        usernameDiv.id = `user${profileCounter}HiddenFields`;
                        usernameDiv.style.display = 'none';
                        //hr element
                        let lowhr = document.createElement("HR");
                        usernameDiv.appendChild(lowhr);
                        // emailLabel
                        let emailLabel = document.createElement(`label`);
                        emailLabel.textContent = `Email`;
                        usernameDiv.appendChild(emailLabel);
                        // emailInput 
                        let emailInput = document.createElement(`input`);
                        emailInput.type = 'email';
                        emailInput.name = `user${profileCounter}Username`;
                        emailInput.value = data[key].email;
                        emailInput.disabled = true;
                        emailInput.readOnly = true;
                        usernameDiv.appendChild(emailInput);
                        let ageBr = document.createElement(`BR`);
                        usernameDiv.appendChild(ageBr);
                        //leable age 
                        let ageLabel = document.createElement(`label`);
                        ageLabel.textContent = `Age:`;
                        usernameDiv.appendChild(ageLabel);
                        // age input
                        let ageInputBr = document.createElement(`BR`);
                        usernameDiv.appendChild(ageInputBr);

                        let ageInput = document.createElement(`input`);
                        ageInput.type = `text`;
                        ageInput.name = `user${profileCounter}Username`;
                        ageInput.value = data[key].age;
                        ageInput.disabled = true;
                        ageInput.readOnly = true;
                        //appen it to main divs 
                        usernameDiv.appendChild(ageInput);
                        // showMoreBtn 
                        let showMoreBtn = document.createElement("button");
                        showMoreBtn.textContent = `Show more`
                        showMoreBtn.className = `user${profileCounter}Username`;
                        profileDiv.appendChild(usernameDiv);
                        profileDiv.appendChild(showMoreBtn);
                        main.appendChild(profileDiv);
                        profileCounter++;
                    }
                })
        })
    function locked(e) {
        let whereClick = e.target
        if (whereClick.type === 'submit') {
            let currentClass = e.target.classList.value
            let numberOfProfile = currentClass.split('user')
            let mechanism = document.getElementsByName(`user${numberOfProfile[1][0]}Locked`)
            if (whereClick.textContent === 'Show more' && mechanism[1].checked === true) {
                //get info about locked or not locked
                let profileHidenShet = document.querySelector(`#user${numberOfProfile[1][0]}HiddenFields`)
                profileHidenShet.style.display = 'block';
                whereClick.textContent = 'Show less';
            } else {
                let profileHidenShet = document.querySelector(`#user${numberOfProfile[1][0]}HiddenFields`)
                profileHidenShet.style.display = 'none';
                whereClick.textContent = 'Show more'
            }
        } if (e.target.value === `lock`) {
            let currentName = e.target.name
            let nameNumber = currentName.split('user')
            let btns = document.querySelectorAll(`button`);
            for (const btn of btns) {
                if(btn.className == `user${nameNumber[1][0]}Username`){
                    btn.textContent = `Show more`
                }
            }
            let profileHidenShet = document.querySelector(`#user${nameNumber[1][0]}HiddenFields`)
            profileHidenShet.style.display = 'none';
        }
    }
    main.addEventListener('click', locked);
}