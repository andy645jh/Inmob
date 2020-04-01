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

    static Error(msg)
    {
        if(useDebug) console.error(msg);
    }

    static Error(msg, obj)
    {
        if(useDebug) console.error(msg, obj);
    }
}