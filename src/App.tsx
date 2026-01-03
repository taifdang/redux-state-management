import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <h1 style={{"textAlign":"left"}}>Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
