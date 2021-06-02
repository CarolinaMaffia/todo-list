import { useState } from 'react';
import './Form.scss';

const Form = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <div className="form-container"> 
            <div className="input-container">
                <input 
                    type="text"
                    placeholder="task" 
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
                <button 
                    className="task-button"
                    onClick={handleSubmit}
                > Save task </button>
            </div>
        </div>
        )
};

export default Form;