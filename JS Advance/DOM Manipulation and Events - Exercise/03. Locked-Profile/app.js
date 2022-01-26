function lockedProfile() {

    document.getElementById(`main`).addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.tagName == `BUTTON`) {
            let isActive = e.target.parentElement.querySelector(`input[type="radio"][value = "unlock"]`).checked;
            if (isActive) {
                if (e.target.textContent == `Show more`) {
                    e.target.parentNode.querySelector(`div`).style.display = `block`;
                    e.target.textContent = `Hide it`;
                } else if (e.target.textContent == `Hide it`) {
                    e.target.parentNode.querySelector(`div`).style.display = `none`;
                    e.target.parentNode.querySelector(`div`);
                    e.target.textContent = `Show more`;
                }
            }
        }
    }
}