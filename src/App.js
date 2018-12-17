import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import NewTask from './components/NewTask';

import { tasks } from './task.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({
      // Une el estado actual de las tarea, con una nueva tarea
      tasks: [...this.state.tasks, task]
    });
  }

  handleRemoveTask(index){
    //console.log(index);
    if (window.confirm('Estás seguro de eleiminar la tarea')){
      this.setState({
        tasks: this.state.tasks.filter((task, i)=>{
          return i !== index
        })
      })
    }
  }

  render() {

    // Llamamos los datos y creamos el componente
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-4 mt-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h3>{task.title}</h3>
              <div className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </div>
            </div>

            <div className="card-body">
              <p>{task.description}</p>
              <small>{task.autor}</small>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveTask.bind(this, i)}>Eliminar</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation titulo="Aplicación de Tareas" cantidad={this.state.tasks.length} />

        <div className="container">
          <div className="row mt-4">
            <NewTask onAddTask={this.handleAddTask} className="col-4" />
            {tasks}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
