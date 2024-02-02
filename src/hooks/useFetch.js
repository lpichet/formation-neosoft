/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

export function useFetch(url) {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                  if (!response.ok) {
                      setError('Something went wrong!');
                      return;
                  }
                const data = await response.json();
                setTodos(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchTodos();
      }, [url]);

      return [todos, isLoading, error];
}