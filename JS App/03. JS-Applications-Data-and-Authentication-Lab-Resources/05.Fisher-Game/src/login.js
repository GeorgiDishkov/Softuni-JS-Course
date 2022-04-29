
const url = `http://localhost:3030/users/login`
export function login() {
    let options = {
        method: 'GET',
        
    }
    fetch(url)
}
function getInfo() {

    const form = document.querySelector(`form`);
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let email = formData.get('email');
        let password = formData.get('password');
        console.log(email,password);
        login(email,password);
    })
}
getInfo();