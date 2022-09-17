// import { useEffect } from "react";
import "./TodoItem.css";

export default function TodoItem({
    onDelete,
    onClick,
    todo
}) {

    //to do useEffect to make reqests with reqests and response 

    // useEffect(() => {
    //     console.log(`${todo.id} Mounted`);
    //     return () => {
    //         console.log(`${todo.id} Unmount`);
    //     }
    // }, []);

    return <li onClick={() => onClick(todo._id)} className={todo.isDone ? 'todo-done' : ''}>
        todo = {todo.text}
        <button onClick={() => onDelete(todo._id)}>x</button>
    </li>
}