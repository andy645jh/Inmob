import React, { Component } from 'react';
import Enums from '../utils/Enums';
import EventsObserver from '../utils/EventsObserver';

class ListQuestion extends Component {
    
    constructor(props)
    {
        super(props); 

        this.state ={
            questions: [],
            isLoading: false
        };

        this.callback = (data) => {
            this.updateListQuestion();
        };
        EventsObserver.subscribe(Enums.ADD_QUESTION, this.callback);
    }    

    componentDidMount()
    {
        this.updateListQuestion();
    }    
    
    componentWillUnmount()
    {
        EventsObserver.unsubscribe(Enums.ADD_QUESTION, this.callback);
    }

    async updateListQuestion()
    {
        try {            
            this.setState({ isLoading: true });
            const response = await fetch('api/questions',{});            
            const res = await response.json();                
            console.log("Respuesta: ", res);
            this.setState({ questions: res, isLoading: false });            
            
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
                                    return (<div className="row" key={q.id}><p>{q.content}</p></div>);
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