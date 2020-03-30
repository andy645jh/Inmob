import { useDebug } from '../../../json/config.json';

export default class Debug{
    static Log(msg)
    {
        if(useDebug) console.log(msg);
    }

    static Log(msg, obj)
    {
        if(useDebug) console.log(msg, obj);
    }
}