import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/Todoitem';
import TodoForm from './component/TodoForm';

class TodoList extends React.Component{
    constructor(){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.ut= this.ut.bind(this);
        this.at=this.at.bind(this);
        this.dt=this.dt.bind(this);
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

    ut(v){  //updateTask
        this.setState({
            currentTask : v.target.value,
        })
    }
    
    at(evt){
        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push(
            {
                name : currentTask,
                completed : false
            }
        )
        this.setState({
            tasks:tasks,
            currentTask:''
        })
    }

    dt(index){
        console.log(index);
        let tasks = this.state.tasks;
        tasks.splice(index,1)

        this.setState({
            tasks
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
                <TodoForm currentTask={this.state.currentTask}
                        ut={this.ut}
                        at={this.at}
                />
                <ul>
                {
                    this.state.tasks.map((task, index) => {
                        console.log(task.name+' - '+ index);
                        return <TodoItem
                         key={task.name} 
                         index={index} 
                         dt={this.dt}
                         clickHandler={this.changeStatus} 
                         details={task} />
                    })
                }
                </ul>
            </section>
        )
    }
}



ReactDOM.render(< TodoList />,document.getElementById('root'))