import React, { Component } from 'react';
import Enums from '../utils/Enums';
import FeatureSection from './FeatureSection';
import EventsObserver from '../utils/EventsObserver';

class SectionQuestion extends Component {
    
    constructor(props)
    {
        super(props); 

        this.state ={
            question: "",
            content: "",
            words: 256
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleSubmit(event) 
    {        
        event.preventDefault();
        
        if (this.state.content !== "")
        {
            var data = new FormData(event.target);
            data.append('estate_id',this.props.id);        
            this.sendQuestion(data);
        }        
    }

    async sendQuestion(data)
    {
        try {            
            const response = await fetch('api/question/create',
            {
                method: 'POST',
                body: data                
            });
            
            const res = await response;   
            EventsObserver.broadcast(Enums.ADD_QUESTION, null);
            this.setState({ content: "" });
            console.log("Respuesta: ", res);
            //this.setState({ estate: this.getEstate(estatesJson.estates,this.id), isLoading: false});
            
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }
    }
    
    onChange(e)
    {
        if (e.target.value.length <= 256)
        {
            var w = 256 - e.target.value.length; 
            this.setState({ content: e.target.value, words: w });              
        }        
    }

    render()
    {        
        return (
            <>                              
                <div className="row detail-p-tb">
                    <FeatureSection />
                    <div className="col">
                        <div className="row detail-title">
                            <div className="col">PREGUNTAS</div>
                        </div>
                        <div className="row">
                            <form className="w-100" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="content">Inquietudes acerca del Inmueble</label>
                                    <textarea className="form-control" id="content" name="content" value={this.state.content} onChange={(e) => this.onChange(e)}></textarea>
                                    <small id="emailHelp" className="form-text text-muted">Max {this.state.words} palabras.</small>
                                </div>                                       
                                
                                <button className="btn btn-primary">Enviar</button>                                        
                            </form>
                        </div>
                    </div>
                </div>                
            </>
        )
    }   
}


export default SectionQuestion