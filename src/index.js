import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/Todoitem';
import TodoForm from './component/TodoForm';

class TodoList extends React.Component{
    constructor(){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
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
            }],
            currentTask : ''
        }
    }

    updateTask(newValue){
        this.setState({
            currentTask : newValue.target.value
        }) 
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
            <section>
                <TodoForm 
                currentTask={ this.state.currentTask }
                UpdateTask={this.updateTask}
                />
                <ul>
                {
                    this.state.tasks.map((task, index) => {
                        return <TodoItem key={task.name} index={index} clickHandler={this.changeStatus} details={task} />
                    })
                }
                </ul>
            </section>
        )
    }
}



ReactDOM.render(< TodoList />,document.getElementById('root'))