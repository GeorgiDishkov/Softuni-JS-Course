import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import api from '../services/services'

export default function TodoList() {
    const [data, setData] = useState([])

    useEffect(() => {
        const result = api.getAll().then(result => {
            setData(Object.values(result))
            console.log(result);
        })
    }, [])
    // useEffect({
    //     api.getAll();
    // }, [])

    const onBlurTodo = (e) => {

        let todo = {
            text: e.target.value,
            isDone: false
        };

        api.createTodo(todo).then(result => console.log(result))

        setData(oldData => [
            ...oldData,
            todo,
        ])
        e.target.value = '';
    }

    async function onDeleteTodoClickHandler(id) {
        let result = await api.dellTodo(id);
        if (result) {
            setData(oldTodos => oldTodos.filter(x => x._id !== id));
        }
    }

    function toggleTodoItemClickHendler(id) {
        setData(oldTodos => {
            return oldTodos.map(x => {
                if (x._id === id) {
                    console.log(x);
                    return { ...x, isDone: !x.isDone };
                }
                return x;
            })
        })
    }

    return (
        <>
            <label htmlFor="todo" >ToDo add</label>
            <input type="text" _id="todo" onBlur={onBlurTodo} name="todo" />
            <ul>
                {data.map(todo =>
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onDelete={onDeleteTodoClickHandler}
                        onClick={toggleTodoItemClickHendler}
                    />
                )}
            </ul>
        </>
    )
}