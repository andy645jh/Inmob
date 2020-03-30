import React, { Component } from 'react';
import CardInfo from './CardInfo';

class EstateList extends Component {
    constructor(props)
    {
        super(props); 
        this.state = {
            estates: null,
            isLoading: null
        };
    }

    componentDidMount() {
        this.getEstates();              
    }

    async getEstates() {
        if (! this.state.players) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch('api/estate',{});
                
                const estatesJson = await response.json();                
                //console.log("Estates 0: ", estatesJson);
                this.setState({ estates: estatesJson, isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    render() {
        const { isLoading, estates } = this.state; 
        //console.log("Estates 1: ", this.state.estates);  
        //console.log("Estates 2: ", estates);  
        return (
            <>
            { isLoading && "Loading ... " }

            <section className="lista row">
            {
                (!isLoading && estates!=null) && 
                estates.map((estate) => <CardInfo key={estate.id} id={estate.id}/>)                  
            }
            </section>   
            </>             
        );
    }    
}
export default EstateList