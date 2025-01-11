import {useEffect, useState} from 'react';
import {ITodo} from "../../models/ITodo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../services/api.service.ts";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos()
            .then(response => {
                setTodos(response);
            });
    }, []);

    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};

export default TodoComponents;