import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const todoList = [{
  item: 'todo',
  done: false,
  id: 788
},
{
  item: 'todo two',
  done: false,
  id: 7867
},
{
  item: 'todo three',
  done: false,
  id: 78098
},
];

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map(todo => (<TodoItem name={todo.item} key={todo.id} done={todo.done} />))}
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
