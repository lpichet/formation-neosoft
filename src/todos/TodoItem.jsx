/* eslint-disable react/prop-types */
import './TodoItem.css'

export default function TodoItem({title, completed, onTodoItemClick}) {
    return (
        <div className={completed ? "completed" : "active"} onClick={() => onTodoItemClick({title, completed})}>
            <span>{title}</span>
        </div>
    );
}