import { useState } from 'react'
import './App.css'
import todos from './todos.json'
import Header from './Header';
import TodoList from './TodoList';
import TodoItemDetail from './TodoItemDetail';

function App() {
  const [text, setText] = useState("");
  const [sortOrderIsAsc, setSortOrderIsAsc] = useState(true);
  const [resultTodos, setResultTodos] = useState(todos);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const filterData = (textInput, sortIsAsc) => {
    const result = [...todos]
      .filter((todo) => textInput.length === 0 || todo.title.toLowerCase().includes(textInput.toLowerCase()))
      .sort((a, b) => sortIsAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

    setResultTodos(result);
  }

  const handleTextChange = (input) => {
    setText(input);
    filterData(input, sortOrderIsAsc);
  }

  const handleSortOrderClick = (isAsc) => {
    setSortOrderIsAsc(isAsc);
    filterData(text, isAsc);
  }

  const onHeaderClick = () => {
    setSelectedTodo(null)
  }
  
  return (
    <>
    {selectedTodo ? (
      <>
        <Header onHeaderClick={onHeaderClick}><h1>Détail</h1></Header>
        <TodoItemDetail {...selectedTodo} />
      </>
      ) : (
        <>
      <Header onHeaderClick={onHeaderClick}><h1>Liste des todos</h1></Header>
      <TodoList text={text} sortOrderIsAsc={sortOrderIsAsc} handleTextChange={handleTextChange} handleSortOrderClick={handleSortOrderClick} resultTodos={resultTodos} setSelectedTodo={setSelectedTodo} />
      </>
    )}
    
    </>
  )
}

export default App
