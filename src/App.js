import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import {Addtodos} from './MyComponents/Addtodos';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {About} from './MyComponents/About';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null)
 {
   initTodo=[]; 
  }else{
    initTodo= JSON.parse(localStorage.getItem("todos"));

  }

  const onDelete = (todo)=>{
    console.log("this is delete",todo);
    setTodos(todos.filter((e) =>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title,desc)=>{
    console.log("hey i am selected",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
    sno= todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  

  }
  const [todos, setTodos] = useState (initTodo);   
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
    <Header title="My Todos List" searchBar={false}/>
    <Switch>
      <Route exact path="/" render={()=>{
        return(
          <>
        <Addtodos addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        </>
        )
      }}>
      </Route>
      <Route exact path="/about">
        <About  />
      </Route>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
