import React, { Component } from "react";
import EstateList from "../index_page/EstateList";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import Service from "../../services/Service";
import { SET_ESTATE } from "../../components/utils/Enums";
import EstateForm from "./EstateForm";

class EstatePage extends Component {
    constructor(props)
    {       
        super(props);     
        this.serviceEstates = new Service('estate');
    }

    render() {
        //const { isLoading, estate } = this.state; 
        //Debug.Log("Estate: ",estate);
        return (
            <div className="container"> 
                <EstateForm />
                <EstateList />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(EstatePage);