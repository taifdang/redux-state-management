import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { removeTodo, toggleTodo, clearToDo } from '../store/todoSlice';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

export default function TodoList() {
    // useSelector gets the current state value from the Redux store
    const todos = useSelector((state: RootState) => state.todos.todos);

    // useDispatch lets you send actions
    const dispatch = useDispatch<AppDispatch>();

    // avoid prop drilling
    // new state = reducers(old state, action)

    // dispatch(toggleTodo(todo.id)) =
    // {
    //   type: "todos/toggleTodo",
    //   payload: {
    //     id: "123",
    //   }
    // }

    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
        <div className="todo-list">
            <div className="todo-stats">
                <p>Total: {todos.length}</p>
                <p>Completed: {completedCount}</p>
                <div style={{ "flex": "1 1 0%" }}></div>
                <button onClick={() => dispatch(clearToDo())} className='todo-btn-clear'>Clear All</button>
            </div>
            <div className="todo-list-item__wrapper">
                <div className="todo-list-item">
                    {todos.length === 0 ? (
                        <p className="empty-message">No todos yet. Add one to get started!</p>
                    ) : (
                        <ul className="todos">
                            {todos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={() => dispatch(toggleTodo(todo.id))}
                                    onRemove={() => dispatch(removeTodo(todo.id))}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
