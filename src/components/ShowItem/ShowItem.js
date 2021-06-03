import { useState } from 'react';
import Item from '../Item/Item';
import Form from '../Form/Form';
import './ShowItem.scss';

const ShowItem = () => {
    const [todos, setTodos] = useState([
        { text: "Hi there, write your tasks here!",
          isCompleted: false,
        },
      ]);

    const addTodo = text => {
        const newTodos = [...todos, { text } ];
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos ];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }
    return (
        <div className="show-item-container">
            <div className="form"> 
                <Form addTodo={addTodo}/>
            </div>
            <div>
                {todos.map((todo, index) => ( 
                    <div>
                        <Item 
                            key={index} 
                            index={index} 
                            todo={todo} 
                            completeTodo={completeTodo} 
                            deleteTodo={deleteTodo}
                            // completed={completed}
                        />
                    </div>
                    )) }
                    
            </div>
        </div>
    )
};

export default ShowItem;