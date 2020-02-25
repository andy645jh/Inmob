import React, { Component } from 'react';

class SectionQuestion extends Component {
    
    constructor(props)
    {
        super(props); 

        this.state ={
            question: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleSubmit(event) 
    {
        event.preventDefault();
        var data = new FormData(event.target);
        data.append('estate_id',this.props.id);        
        this.sendQuestion(data);
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
            console.log("Respuesta: ", res);
            //this.setState({ estate: this.getEstate(estatesJson.estates,this.id), isLoading: false});
            
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }
    }
    
    render()
    {        
        return (
            <>                              
                <div className="row detail-p-tb">
                    <div className="col">
                        <div className="row detail-title">
                            <div className="col">CARACTERISTICAS</div>
                        </div>
                        <div className="row">Caracteristicas Content</div>
                    </div>
                    <div className="col">
                        <div className="row detail-title">
                            <div className="col">PREGUNTAS</div>
                        </div>
                        <div className="row">
                            <form className="w-100" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="content">Inquietudes acerca del Inmueble</label>
                                    <textarea className="form-control" id="content" name="content"></textarea>
                                    <small id="emailHelp" className="form-text text-muted">Max 256 palabras.</small>
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