import './App.css';
import {TodoApp} from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className={'head-intro'}>todos</p>
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
