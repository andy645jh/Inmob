import React, { Component } from 'react';
import placeholder from '../../../img/placeholder.jpg';
import DetailTitle from './DetailTitle';
import SectionQuestion from './SectionQuestion';
import ListQuestion from './ListQuestion';
import TitleBlueBg from './TitleBlueBg';                 
import EstateService from '../../services/EstateService';
import Debug from '../utils/Debug';
import { SET_ESTATE } from '../../actions/ActionsDetailPage';
import { connect } from 'react-redux';

class DetailPage extends Component {
    constructor(props)
    {       
        super(props);
        this.state = {
            estate: null,
            isLoading: null
        };
        
        this.id = props.match.params.id;
        this.serviceEstates = new EstateService();

        Debug.Log("Match: ", this.id);
    }

    componentDidMount()
    {
        this.processData();
    }

    async processData() {        
        try {
            this.setState({ isLoading: true });
            
            const estatesJson = await this.serviceEstates.get(this.id);
            if(estatesJson.length>0)
            {
                Debug.Log(estatesJson[0]);
                this.setState({ estate: estatesJson[0], isLoading: false});
            }else{
                Debug.Error("Los datos para el id "+this.id+" son nulos", estatesJson);
            }
            
        } catch (err) {
            this.setState({ isLoading: false });
            Debug.Error(err);
        }        
    }  

    render() {
        const { isLoading, estate } = this.state; 
        Debug.Log("Estate: ",estate);
        return (
            <div className="container">                                 
                {isLoading && "Loading ... "}
                
                {
                    (!isLoading && estate!=null) && 
                    (<>
                        <DetailTitle title="RESULT" />
            
                        <div className="row detail-p-tb">
                            <div className="col"><img src={placeholder} className="w-100" /></div>
                            <div className="col">   
                                <TitleBlueBg title="DESCRIPCION"/>                                                    
                                <div className="row">{estate.description}</div>
                                <div className="row">Iconos</div>
                            </div>
                        </div>

                        <SectionQuestion id={this.id} />

                        <ListQuestion id={this.id} />
                    </>)
                }
                
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);