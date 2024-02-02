import './App.css'
import Header from './Header';
import TodoList from './todos/TodoList';
import TodoItemDetail from './todos/TodoItemDetail';
import { useFilteredData } from './hooks/useFilteredData';
import { useSelectTodo } from './hooks/useSelectTodo';

function App() {
  const { isLoading, error, resultTodos, text, handleTextChange, sortOrderIsAsc, handleSortOrderClick } = useFilteredData();
  const [selectedTodo, setSelectedTodo] = useSelectTodo();
  // useEffect(() => {
  //   console.log("je m'affiche à chaque fois");
  // });

  // useEffect(() => {
  //   console.log("je m'affiche une fois");
  // }, []);

  // useEffect(() => {
  //   const logResize = (e) => console.log('resize', e);
  //   window.addEventListener('resize', logResize);
  //   return () => window.removeEventListener('resize', logResize); 
  // });
  if(isLoading) return <div>Chargement en cours...</div>;
  if(error) return <div>Erreur: {error}</div>;

  return (
    <>
    {selectedTodo ? (
      <>
        <Header onHeaderClick={() => setSelectedTodo(null)}><h1>Détail</h1></Header>
        <TodoItemDetail {...selectedTodo} />
      </>
      ) : (
      <>
        <Header onHeaderClick={() => setSelectedTodo(null)}><h1>Liste des todos</h1></Header>
        <TodoList text={text} 
          sortOrderIsAsc={sortOrderIsAsc} 
          handleTextChange={handleTextChange} 
          handleSortOrderClick={handleSortOrderClick} 
          resultTodos={resultTodos} 
          onTodoItemClick={setSelectedTodo} />
      </>
    )}
    </>
  )
}

export default App
