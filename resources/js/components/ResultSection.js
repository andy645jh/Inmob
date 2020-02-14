import React from 'react';

const ResultSection = () => (
    <div className="row blue align-items-center">
        
        <div className="col">RESULT</div>
        <div className="col"></div>
        <div className="col">
            <div className="row dropdown justify-content-end">
                <select className="form-control ms">
                    <option value="+47">De mayor a menor</option>
                    <option value="+46">De menor a mayor</option>
                    <option value="+45">Mas reciente</option>
                    <option value="+45">Menos reciente</option>
                </select>                
            </div>
        </div>
       
    </div> 
)

export default ResultSection