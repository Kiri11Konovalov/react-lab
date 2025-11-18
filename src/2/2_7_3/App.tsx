import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export type Todo = {
    id: number;
    title: string;
    done: boolean;
}

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title: string) {
        // Используем spread-оператор для создания нового массива с добавленным элементом
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            }
        ]);
    }

    function handleChangeTodo(nextTodo: Todo) {
        // Используем map для создания нового массива с измененным элементом
        setTodos(todos.map(todo => {
            if (todo.id === nextTodo.id) {
                return nextTodo;
            }
            return todo;
        }));
    }

    function handleDeleteTodo(todoId: number) {
        // Используем filter для создания нового массива без удаленного элемента
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}