import React, { Component } from 'react';
import placeholder from '../../../img/placeholder.jpg'; // Tell Webpack this JS file uses this image
import CardIconRow from './CardIconsRow';
import { Redirect } from 'react-router-dom';

class CardInfo extends Component
{
    
    constructor(props) {
        super(props);
        //this.history = useHistory();
        this.state = {
            showDetail:false
        }
    }

    onClick (e) {
        //this.history.push('/detail/1');
        this.setState({showDetail:true});
        console.log('/detail/1');        
    }

    render() {
        
        if (this.state.showDetail) {
            return <Redirect to='/detail/1'/>
        }
        return (            
            <div className="card-info col-sm-3 col-md-4" onClick={(e) => this.onClick(e)}>
                <div className="card">
            
                    <div className="card-body">
                        <h5 className="card-title">APTO {this.props.id}</h5>
                        <img className="card-img-top" src={placeholder} alt="placeholder" />
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                        <CardIconRow id={0} />
                        <CardIconRow id={1} />
                    </div>
                </div>
            </div>            
        )
    }
}

export default CardInfo;