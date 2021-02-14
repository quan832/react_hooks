import { useState } from 'react';
import './App.scss';
import ColorBox from './Components/colorBox';
import TodoList from './Components/TodoList';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love Easy Frontend! 😍 ' },
      { id: 2, title: 'We love Easy Frontend! 🥰 ' },
      { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]
  );
  return (
    <div className="App">
      <h1>React-Hooks-Basic</h1>
      {/* <ColorBox></ColorBox> */}
      <TodoList todos={todoList}></TodoList>
    </div>
  );
}

export default App;
