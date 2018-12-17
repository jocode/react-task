import React, { Component } from 'react';

export default class NewTask extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        //console.log(e.target.value, e.target.name)
        const {value, name}  = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Enviando lo datos...');
        this.props.onAddTask(this.state);
    }
    
    render(){
        return (
            <div className="card">
                <div className="card-header">Nueva Tarea</div>
                <form className="card-body" onSubmit={this.handleSubmit} method="post">
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput}  className="form-control" placeholder="Título"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="autor" onChange={this.handleInput} className="form-control" placeholder="autor"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Descripcion"/>
                    </div>
                    <select name="priority" className="form-control" onChange={this.handleInput}>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                    <button className="btn btn-success mt-2">Guardar</button>
                </form>
            </div>
        );
    }

}