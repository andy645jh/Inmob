import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Counter extends React.Component
{        
    constructor(props)
    {
        super(props);   
    }

    render()
    {
        const { amount } = this.props; 
        var rows = [];
        for(var i=0; i<amount; i++)
        {
            rows.push( <Card id={i} key={i} />);
        }
        return (
            <>
            <label>{amount}</label>            
            <div className="row">{ rows }</div>
            </>
        );
    }
}

export default Counter