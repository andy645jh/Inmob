import React, { Component } from 'react';
import FeatureSection from './FeatureSection';
import TitleBlueBg from './TitleBlueBg';
import QuestionService from '../../services/QuestionService';
import Debug from '../utils/Debug';
class SectionQuestion extends Component {
    
    constructor(props)
    {
        super(props); 

        this.state ={
            question: "",
            content: "",
            words: 256
        };

        this.questionServices = new QuestionService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleSubmit(event) 
    {        
        event.preventDefault();
        Debug.Log("Content: ", this.state.content);

        if (this.state.content !== "")
        {
            var data = {
                content: this.state.content,                
                estate_id: this.props.id
            };
            
            this.sendQuestion(data);
        }        
    }

    async sendQuestion(data)
    {
        try {
            const response = await this.questionServices.create(data);        
            console.log("Respuesta: ", response);
            
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
                        <TitleBlueBg title="PREGUNTAS"/>                          
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