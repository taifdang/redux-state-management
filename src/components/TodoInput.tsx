import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addTodo } from '../store/todoSlice';
import '../styles/TodoInput.css';

export default function TodoInput() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input.trim()));
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                className="input-field"
            />
            <button type="submit" className="add-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                </svg>
            </button>
        </form>
    );
}
