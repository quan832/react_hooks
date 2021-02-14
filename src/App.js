import { useState } from 'react';
import './App.scss';
import ColorBox from './Components/colorBox';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love Easy Frontend! 😍 ' },
      { id: 2, title: 'We love Easy Frontend! 🥰 ' },
      { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]
  );
  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodolist = [...todoList];
    newTodolist.splice(index, 1);
    setTodoList(newTodolist);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('form submit: ', formValues);
    // add new todo to current to do list 
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,

    }
    newTodoList.push(newTodo);
    setTodoList(newTodoList); 
  }
  return (
    <div className="App">
      <h1>React-Hooks-Basic</h1>
      {/* <ColorBox></ColorBox> */}
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList onTodoClick={handleTodoClick} todos={todoList}></TodoList>
    </div>
  );
}

export default App;
