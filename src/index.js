import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/Todoitem'

class TodoList extends React.Component{
    constructor(){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.state={
            tasks:[{
                name : "Buy Milk",
                completed : false
            },
            {
                name : "Buy Cheese",
                completed : false
            },
            {
                name : "Buy Bread",
                completed : false
            }]
        }
    }
    changeStatus(index)
    {
        console.log(this.state.tasks[index]);
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState(
            {
                tasks : tasks
            }
        )
    }
    render(){
        return(
            <ul>
               {
                   this.state.tasks.map((task, index) => {
                       return <TodoItem key={task.name} index={index} clickHandler={this.changeStatus} details={task} />
                   })
               }
            </ul>
        )
    }
}



ReactDOM.render(< TodoList />,document.getElementById('root'))