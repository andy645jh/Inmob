import React, { Component } from 'react';
import placeholder from '../../../img/placeholder.jpg'; // Tell Webpack this JS file uses this image
import CardIconRow from './CardIconsRow';
import { SET_ESTATE } from '../../components/utils/Enums';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class CardInfo extends Component
{

    onClick (e) {
       
        this.props.history.push('/detail/'+this.props.estateInfo.id);
        this.props.setEstate(this.props.estateInfo);           
    }

    render() {        
       
        return (            
            <div className="card-info col-sm-3 col-md-4" onClick={(e) => this.onClick(e)}>
                <div className="card">
            
                    <div className="card-body">
                        <h5 className="card-title">{this.props.estateInfo.neighborhood} ${this.props.estateInfo.price}</h5>
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

const mapStateToProps = state => ({
    estate: state.reducerDetailPage.estate
});

const mapDispatchToProps = dispatch => ({
    setEstate(estate)
    {
        dispatch({
            type: SET_ESTATE,
            estate
        });
    }
});

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(CardInfo));