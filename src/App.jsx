import React, { useState } from 'react'

function App() {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([]);
  function todoVal(e) {
    setText(e.target.value);
  }
  function addTodo() {
    setTodo([
      ...todo, {
        title: text
      }
    ])
    setText("")
    // console.log(todo);
  }

  function deleteTodo(e) {
    // console.log(e);
    let filter = todo.filter((item , i)=>{
      return i != e
    })
    console.log(filter);
    setTodo(filter)
  }
  return (
    <div style={{ marginLeft: "45%" }}>
      <h1>Todo App</h1>
      <label> Enter Text Here: <br />
        <input value={text} onChange={todoVal} type="text" />
      </label> <br /><br />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todo.map((item, i) => {
          return <div key={i}>
            <p >{item.title}</p>
            <button>Edit</button>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </div>
        })}
      </div>

    </div>
  )
}

export default App
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [text, settext] = useState("");
//   const [tasks, settasks] = useState([]);
//   let handleOnChange = (val) => {
//     settext(val.target.value);
//   };
//   let addTsks = () => {
//     settasks([...tasks,  text ]);
//     settext("");
//   };
//   let deleteTasks = (id)=>{
// let fltr = tasks.filter((val,indx)=>{
//   return indx !== id;
// })
// console.log(fltr);
// settasks(fltr);
//   }

//   return (
//     <>
//       <div className="App App-header">
//         <h2> Todo List: </h2>
//         <div>
//           <input
//             placeholder="Enter task here..."
//             value={text}
//             onChange={handleOnChange}
//           />
//           <button onClick={addTsks}>Add</button>
//         </div>
//         <div>
//           {tasks.map((items,index)=>{ return <p key={index}>{items} <button >Edit</button><button onClick={()=>{
//             deleteTasks(index)
//           }}>Delete</button></p>  })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;