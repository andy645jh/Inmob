import React from 'react';
import placeholder from '../../../img/placeholder.jpg'; // Tell Webpack this JS file uses this image
import CardIconRow from './CardIconsRow';
import StorageData from '../utils/StorageData';

function CardInfo({ id })
{
    function onClick()
    {
        StorageData.set("id", id);
        location.href = "/detail";
    }

    return(
        <div className="card-info col-sm-3 col-md-4" onClick={onClick}>
            <div className="card">
            
                <div className="card-body">
                    <h5 className="card-title">APTO {id}</h5>
                    <img className="card-img-top" src={placeholder} alt="placeholder" />
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                    <CardIconRow id={0} />
                    <CardIconRow id={1} />
                </div>
            </div>
        </div>
    )
}

export default CardInfo