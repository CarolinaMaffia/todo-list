import { useState } from 'react';
import Form from '../Form/Form';
import Item from '../Item/Item';
import './ShowItem.scss';

const ShowItem = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [...todos, text ];
        setTodos(newTodos);
    };

    return (
        <>
        <Form addTodo={addTodo}/>
        <div>
            {todos.map((todo, index) => ( <Item key={index} index={index} todo={todo}  />)) }
        </div>
        </>
    )
};

export default ShowItem;