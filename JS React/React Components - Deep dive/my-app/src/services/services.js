
const API_PATH = 'http://localhost:3030/jsonstore'

const getAll = () => {
    return fetch(`${API_PATH}/todoList`)
        .then(response => response.json())
}
const createTodo = (todo) => {
    return fetch(`${API_PATH}/todoList`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(todo)
    }).then(response => response.json()).catch((err) => console.log(err));
}

const dellTodo = (id) => {
    console.log(id);
    return fetch(`${API_PATH}/todoList/${id}`, {
        method: 'DELETE',
    })
}
module.exports = {
    getAll,
    createTodo,
    dellTodo
}