import {FC} from 'react';
import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css';
type TodoPropType = {
    item: ITodo
}
const TodoComponent:FC<TodoPropType> = ({item}) => {
    return (
        <div className="todo-item">
            <p className={item.completed ? 'complete' : 'noncomplete'}>{item.title}</p>
        </div>
    );
};

export default TodoComponent;