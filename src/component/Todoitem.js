import React from 'react'

// class TodoItem extends React.Component{
//     render(){
//         return(
//             <li onClick={
//                 () => { this.props.clickHandler(this.props.index) }
//             } className={this.props.details.completed ? 'completed' : ''}>
//                 { this.props.details.name }
//             </li>
//         )
//     }
// }

var TodoItem = (props) =>{
       return(
        <li onClick={
            () => { props.clickHandler(props.index) }
        } className={props.details.completed ? 'completed' : ''}>
            { props.details.name }
            <button onClick={
                (evt) => {
                    evt.stopPropagation();
                    return props.dt(props.index)
                }
            }>Delete</button>
        </li>
       ) 
}

export default TodoItem;