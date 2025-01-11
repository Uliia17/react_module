import {useEffect, useState} from 'react';
import {ITodo} from "../../models/ITodo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getAllTodos} from "../../services/api.service.ts";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getAllTodos().then(({ todos }) => {
            console.log(todos);
            setTodos(todos);
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
