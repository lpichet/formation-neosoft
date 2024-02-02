import './TodoItem.css'

export default function TodoItem({title, completed, setSelectedTodo}) {
    return (
        <div className={completed ? "completed" : "active"} onClick={() => setSelectedTodo({title, completed})}>
            <span>{title}</span>
        </div>
    );
}