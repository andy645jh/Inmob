import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component
{        
    constructor(props)
    {
        super(props);       
        this.callback = this.props.onChange;
        this.state = {};
        console.log("constructor: ",this.props);
    }

    async componentDidMount()
    {
        console.log("componentDidMount");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    handleChange (e)
    {
        console.log(e.target.value);       
        //console.log("Props: ", this.props); 
        console.log("Cb: ", this.callback); 
        //const { cb } = this.props;
        this.callback(e.target.value);
        //this.setState({ search: e.target.value });
    }

    render()
    {
        return (<input id="num" onChange={(e) => this.handleChange(e)} />);
    }
}

export default Input