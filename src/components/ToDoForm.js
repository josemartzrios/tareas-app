import React from "react";

class ToDoForm extends React.Component{

    constructor () {
        super();
        this.state = {
          title: '',
          responsible: '',
          description: '',
          priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.onAddToDo(this.state);
        this.setState({
          title: '',
          responsible: '',
          description: '',
          priority: 'low'
        });
      }
    
      handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Título"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  value={this.state.responsible}
                  onChange={this.handleInputChange}
                  placeholder="Responsable"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Descripción"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                  >
                  <option>baja</option>
                  <option>media</option>
                  <option>alta</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
      }
    
}

export default ToDoForm;