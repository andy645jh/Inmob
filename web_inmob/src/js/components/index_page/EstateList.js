import React, { Component } from 'react';
import CardInfo from './CardInfo';
import Service from '../../services/Service';
import { connect } from 'react-redux';

class EstateList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estates: null,
            isLoading: null
        };

        this.services = new Service('estate');
    }

    componentDidMount() {
        this.getEstates();
    }

    async getEstates() {
        try {
            this.setState({ isLoading: true });
            
            const filterOpts = {
                word: this.props.searchSelections.palabra,
                city: this.props.searchSelections.ciudad,
                departament: this.props.searchSelections.departamento,
                operation: this.props.searchSelections.operacion,
                estateType: this.props.searchSelections.tipoInmueble,
            }

            const estatesJson = await (this.props.isFiltered ? this.services.search(filterOpts) : this.services.getAll() );
                           
            console.log("Estates 0: ", estatesJson);
            this.setState({ estates: estatesJson, isLoading: false });

        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }
    }

    render() {
        const { isLoading, estates } = this.state;
        //console.log("Estates 1: ", this.state.estates);  
        //console.log("Estates 2: ", estates);  
        return (
            <>
                {isLoading && "Loading ... "}

                <section className="lista row">
                    {
                        (!isLoading && estates != null) &&
                        estates.map((estate) => <CardInfo key={estate.id} id={estate.id} estateInfo={estate} />)
                    }
                </section>
            </>
        );
    }
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});


export default connect(mapStateToProps, {})(EstateList); 