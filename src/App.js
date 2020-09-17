import React from 'react';
import './App.css';
import TodoList from './containers/ToDoList/TodoList'
import NewTodo from './containers/ToDoList/NewTodo/NewTodo'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path='/todos' exact render={()=><TodoList title = "My TODOS"/>}/>
        {/* props pass */}
        <Route path='/todos/:id' exact component={TodoDetail}/>
        <Route path='/new-todo' exact component={NewTodo}/>
        <Redirect exact from='/' to='todos'/>
        <Route render={()=><h1>Not Found</h1>} />
        </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
