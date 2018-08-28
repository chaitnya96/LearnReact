import React from 'react'
 var TodoForm = (props) => {
     return (
         <form>
            <input type="text" 
            value={props.currentTask}
            onChange={props.updateTask}
            ></input>
         </form>
     )
 }
 export default TodoForm;