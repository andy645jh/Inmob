import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Counter from './Counter';

export default class Example extends Component {
    constructor(props)
    {
        super(props);
        this.state = { amount: 5};
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component Nuevo</div>
                            <Input onChange={ (d) => this.onChange(d) } />
                            <div className="card-body">Aca se vera reflejado el cambio</div>
                            <Counter amount={ this.state.amount } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChange(dato)
    {
        console.log("Cambio a: "+dato);
        this.setState({amount: dato});
        console.log("Amount: ",this.state);
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
