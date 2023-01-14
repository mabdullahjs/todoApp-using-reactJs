import React, { useState } from 'react'

function App() {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([]);
  let [disabled, setDisabled] = useState(true);
  let [disedit, setDisedit] = useState(false);
  let [disAdd, setDisAdd] = useState(false);
  let [index, setIndex] = useState(0);

  function todoVal(e) {
    setText(e.target.value);
  }
  function addTodo() {
    setDisabled(true)
    setTodo([
      ...todo, {
        title: text
      }
    ])
    setText("")
  }


  // Delete Todo


  function deleteTodo(e) {
    let filter = todo.filter((item, i) => {
      return i !== e
    })
    setTodo(filter);
  }

  // Edit Todo

  function editTodo(e) {
    setText(todo[e].title);
    setDisabled(false);
    setIndex(e);
    setDisedit(true);
    setDisAdd(true);
  }

  //save Todo

  function saveTodo() {
    const newArray = [...todo];
    newArray[index] = {title: text};
    setTodo(newArray);
    setText("");
    setDisedit(false);
    setDisAdd(false);
    setDisabled(true);
  }


  return (
    <div style={{ marginLeft: "45%" }}>
      <h1>Todo App</h1>
      <label> Enter Text Here: <br />
        <input value={text} onChange={todoVal} type="text" />
      </label> <br /><br />
      <button disabled={disAdd} onClick={addTodo}>Add Todo</button>
      <button disabled={disabled} onClick={saveTodo} >Edit Todo</button>
      <div>
        {todo.map((item, i) => {
          return <div key={i}>
            <p >{item.title}</p>
            <button onClick={() => deleteTodo(i)}>Delete</button>
            <button disabled={disedit} onClick={() => editTodo(i)}>Edit</button>
          </div>
        })}
      </div>

    </div>
  )
}

export default App;