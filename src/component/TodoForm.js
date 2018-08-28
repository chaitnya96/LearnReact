import React from 'react'
 var TodoForm = (props) => {
     return (
         <form onSubmit={props.at}>
            <input type="text" 
            value={props.currentTask}
            onChange={props.ut}
            ></input>
            <button type="submit">Submit</button>
         </form>
     )
 }
 export default TodoForm;