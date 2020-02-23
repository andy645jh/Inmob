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
        const data = new FormData(event.target);
        console.log("sendQuestion: ",data);
        this.sendQuestion(data);
    }

    async sendQuestion(data)
    {
        try {            
            const response = await fetch('https://demo9207076.mockable.io/questions',
            {
                method: 'POST',
                body: data,
            });
            
            const estatesJson = await response;                
            console.log("Estates 0: ", estatesJson);
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
                                    <label htmlFor="pregunta">Inquietudes acerca del Inmueble</label>
                                    <textarea className="form-control" id="pregunta" name="pregunta"></textarea>
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