import React, { Component } from 'react';

class ListQuestion extends Component {
    
    constructor(props)
    {
        super(props); 

        this.state ={
            questions: [],
            isLoading: false
        };
    }    

    componentDidMount()
    {
        this.updateListQuestion();
    }    

    async updateListQuestion()
    {
        try {            
            this.setState({ isLoading: true });
            const response = await fetch('api/questions',{});            
            const res = await response.json();                
            console.log("Respuesta: ", res);
            this.setState({ questions: res, isLoading: false});
            
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }
    }
    
    render()
    {        
        const {isLoading, questions} = this.state;

        return (
            <>                              
                <div className="row detail-p-tb">
                    <div className="col">
                        <div className="row detail-title">ULTIMAS PREGUNTAS</div>
                        <div className="row">
                            <div className="col">                             
                            {
                                (!isLoading && questions!=null) && (questions.map(q => {
                                    return (<div className="row" key={q.id}><p>Carasteristicas Content</p></div>);
                                }))                                                                                      
                            }
                            </div>                                        
                        </div>
                    </div>
                </div>               
            </>
        )
    }   
}


export default ListQuestion