export default function TodoItemDetail({title, completed}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{completed ? "Terminé" : "En cours"}</p>
        </div>
    );
}