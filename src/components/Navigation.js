import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="https://johanmosquera.me" className="text-white">
                    {this.props.titulo}
                    <span className="badge badge-pill badge-light ml-2">
                    {this.props.cantidad}
                </span>
                </a>
            </nav>
        );
    }
}

// Es importante exportarlo para poder utilizar el componente.
export default Navigation;
