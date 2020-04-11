import React, { Component } from 'react';
import EventsObserver from '../utils/EventsObserver';
import TitleBlueBg from './TitleBlueBg';
import Service from '../../services/Service';

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

        this.serviceQuestion = new Service('question');
    }    

    componentDidMount()
    {
        this.updateListQuestion();
    }    
    
    componentWillUnmount()
    {
        //EventsObserver.unsubscribe(Enums.ADD_QUESTION, this.callback);
    }

    async updateListQuestion()
    {
        try {            
            this.setState({ isLoading: true });
            //const response = await fetch('http://localhost:8000/api/questions',{});            
            const res = await this.serviceQuestion.getAllByParentId(this.props.id);                
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
                        <TitleBlueBg title="ULTIMAS PREGUNTAS"/>                        
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