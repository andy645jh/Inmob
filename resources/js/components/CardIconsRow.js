import React from 'react';
import bed_icon from '../../img/bed.png';

const CardIconRow = ({ id }) => (
    
    <div className="row">   
        <div className="col">                        
            <img src={bed_icon} alt="" width="32" height="32" title="Bootstrap"/>                     
            <span>0</span>  
        </div>  
            
        <div className="col borde-lat"></div>           

        <div className="col">
            <img src={bed_icon} alt="" width="32" height="32" title="Bootstrap"/>                     
        
            <p>0</p>
        </div>
        
    </div>                
      
)

export default CardIconRow