import { useDebug } from '../../../json/config.json';

export default class Debug{    

    static Log(msg, obj)
    {
        if(useDebug) {
            if(obj)
            {
                console.log(msg,obj);
            }else{
                console.log(msg);                
            }            
        }
    }

    static Error(msg, obj)
    {
        if(useDebug) 
        {
            if(obj)
            {
                console.error(msg,obj);
            }else{
                console.error(msg);     
            }           
        }
    }
}