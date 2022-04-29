const subBtn = document.getElementById(`submit`);
const url = `http://localhost:3030/jsonstore/collections/students`;
const formEl = document.querySelector(`#form`);
const tbody = document.querySelector(`tbody`);

function main() {
    formEl.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let firstName = data.get(`firstName`);
        let lastName = data.get(`lastName`);
        let facultyNumber = data.get(`facultyNumber`);
        let grade = data.get(`grade`);
        subStudents(url, firstName, lastName, facultyNumber, grade)
        loadStudent(url)
    })
    function subStudents(url, firstName, lastName, facultyNumber, grade) {
        let data = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        }
        let options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
        fetch(url, options);
    }
    function loadStudent(url) {
        fetch(url).then(response => response.json().then(data => {
            tbody.innerHTML = ``;
            Object.values(data).forEach(el => {
                if (el.firstName !== '' && el.lastName !== '' && el.facultyNumber !== '' && el.grade !== '') {
                    let trEl = document.createElement('tr');
                    let firstNameTh = document.createElement(`th`);
                    firstNameTh.textContent = el.firstName
                    let LastNameTh = document.createElement(`th`);
                    LastNameTh.textContent = el.lastName
                    let facultyNumberTh = document.createElement(`th`);
                    facultyNumberTh.textContent = el.facultyNumber;
                    let gradeTh = document.createElement(`th`);
                    gradeTh.textContent = el.grade;
                    trEl.appendChild(firstNameTh);
                    trEl.appendChild(LastNameTh);
                    trEl.appendChild(facultyNumberTh);
                    trEl.appendChild(gradeTh);
                    tbody.appendChild(trEl);
                }
            })
        }))
    }
}
main()