import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

// components

import { toDos } from './toDos.json';
import ToDoForm from './components/ToDoForm';





class App extends React.Component {

  constructor(){
  super();
    this.state = {
      toDos
    }
  this.handleAddToDo = this.handleAddToDo.bind(this);
 }

// Agregar tareas
 handleAddToDo(toDo){
  this.setState({
    toDos: [...this.state.toDos, toDo]
  })
 }

//  recorre todas las tareas y si el indice es distinto elimina la tarea
 removeToDo(index){
  if(window.confirm('¿Estás seguro que quieres elimina la tarea?')){
    this.setState({
      toDos:  this.state.toDos.filter((e, i)=> {
        return i !== index;
      })
    })
  }
 }

  render(){

    const todos = this.state.toDos.map((todo, i ) => {
      return (

        <div className="col-md-4" key={i}>
          <div className='card mt-4'>

            <div className="card-header">
              {/* todo de la variable iterada de cada card */}
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-warning ml-2">
                {todo.priority}
              </span>
            </div>

            <div className="card-body">
              {/* todo de la variable iterada de cada card */}
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>

            <div className="card-footer">
              <button 
                className="btn btn-danger"
                onClick={this.removeToDo.bind(this, i)}
              >Eliminar</button>
            </div>

          </div>
        </div>
      )
    })

    return (
      <div className="App">
        
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-5">
              {this.state.toDos.length}
            </span>
          </a>
        </nav>
        
        <div className="container">
          <div className="row mt-4">

            <div className="col-md-3 text-center">
              <ToDoForm onAddToDo={this.handleAddToDo}/>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              { todos }
            </div>
          </div>
        </div>
      </div>
    )
  }      
};

export default App;
