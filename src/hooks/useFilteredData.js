import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export function useFilteredData() {
  const [text, setText] = useState("");
  const [sortOrderIsAsc, setSortOrderIsAsc] = useState(true);
  const [todos, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
  const [resultTodos, setResultTodos] = useState([]);

  useEffect(() => {
    setResultTodos(todos);
  }, [todos]);

  const filterData = (textInput, sortIsAsc) => {
    const result = [...todos]
      .filter((todo) => textInput.length === 0 || todo.title.toLowerCase().includes(textInput.toLowerCase()))
      .sort((a, b) => sortIsAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

    setResultTodos(result);
  };

  const handleTextChange = (input) => {
    setText(input);
    filterData(input, sortOrderIsAsc);
  }

  const handleSortOrderClick = (isAsc) => {
    setSortOrderIsAsc(isAsc);
    filterData(text, isAsc);
  }

    return {resultTodos, text, handleTextChange, sortOrderIsAsc, handleSortOrderClick, isLoading, error};
}