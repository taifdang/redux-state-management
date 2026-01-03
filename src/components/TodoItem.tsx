import { Todo } from '../store/todoSlice';
import '../styles/TodoItem.css';

interface TodoItemProps {
    todo: Todo;
    onToggle: () => void;
    onRemove: () => void;
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle}
                className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={onRemove} className="delete-btn" aria-label="Delete todo">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2M9 4h6v2H9zm8 16H7V8h10z"></path>
                </svg>
            </button>
        </li>
    );
}
