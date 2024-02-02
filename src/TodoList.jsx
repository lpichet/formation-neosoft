/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function TodoList({text, sortOrderIsAsc, handleTextChange, handleSortOrderClick, resultTodos, setSelectedTodo}) {
  return (
    <>
    {text && <span>Recherche en cours {text}</span>}
    {sortOrderIsAsc ? <span>Tri croissant</span> : <span>Tri décroissant</span>}
    <div>
      <input onChange={(e) => handleTextChange(e.target.value)} value={text} />
      <button onClick={() => handleSortOrderClick(true)} disabled={sortOrderIsAsc}>Asc</button>
      <button onClick={() => handleSortOrderClick(false)} disabled={!sortOrderIsAsc}>Desc</button>
    </div>
    {resultTodos.map((todo) => <TodoItem key={todo.id} {...todo} setSelectedTodo={setSelectedTodo} />)}
    </>
  )
}
