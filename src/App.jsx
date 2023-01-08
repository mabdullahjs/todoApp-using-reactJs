import React, { useState } from 'react'

function App() {
  let [text , setText] = useState("");
  let [todo , setTodo] = useState([]);
  function todoVal(e){
    setText(e.target.value);
  }
  function addTodo(){
    setTodo([
      ...todo , {
        title:text
      }
    ])
    setText("")
    // console.log(todo);
  }

  function deleteTodo(e){
    console.log(e);
    let deleted = todo.splice(e , e++);
    setTodo(deleted);

  }
  return (
    <div style={{marginLeft:"45%"}}>
      <h1>Todo App</h1>
      <label> Enter Text Here: <br />
      <input value={text} onChange={todoVal} type="text" />
      </label> <br /><br />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todo.map((item , i)=>{
          return <div key={i}>
            <p >{item.title}</p>
            <button>Edit</button>
            <button onClick={()=> deleteTodo(i)}>Delete</button>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default App