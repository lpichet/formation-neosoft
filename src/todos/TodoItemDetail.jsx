/* eslint-disable react/prop-types */
export default function TodoItemDetail({title, completed}) {
    if(!title) return null;
    return (
        <div>
            <h2>{title}</h2>
            <p>{completed ? "Terminé" : "En cours"}</p>
        </div>
    );
}