import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id }) => (
    <div className="col-md-4">
        <label onClick={ ()=> console.log("Change Color") }>Card {id + 1}</label>
    </div>
)

export default Card