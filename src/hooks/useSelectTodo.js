import { useState } from 'react';

export function useSelectTodo() {
    const [selectedTodo, setSelectedTodo] = useState(null); // null or {title, completed}

    return [selectedTodo, setSelectedTodo];
}