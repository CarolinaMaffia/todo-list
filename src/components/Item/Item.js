import './Item.scss';

const Item = ({ todo }) => {
    return (
        <div className='item-container'>
            <p>{todo}</p>
        </div>
    )
};

export default Item;