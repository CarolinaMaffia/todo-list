import './Item.scss';

const Item = ({ todo, index, completeTodo, deleteTodo, completed }) => {
    return (
        <div className='item-container'>
        <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <p>{todo.text}</p>
        </div>
        <div className="buttons-container">
            <buttom className="btn" onClick={() => completeTodo(index)}>Complete</buttom>
            <buttom className="btn" onClick={deleteTodo}>Delete</buttom>
        </div>
        </div>
    )
};

export default Item;