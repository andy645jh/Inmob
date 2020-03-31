class EventsObserver {
    
    static get(key)
    {
        var result = null;
        this.observers.forEach(element => {
            if(element.key == key)
            {
                result = element;
                return result;
            }
        });
        return result;
    }
    
    static validate()
    {
        if(this.observers === undefined) this.observers = [];    
    }

    static getIndex(key)
    {
        var result = -1;
        for (let index = 0; index < this.observers.length; index++) {
            const element = this.observers[index];
            if(element.key == key)
            {
                result = index;
                break;
            }
        }
         
        return result;   
    }

    static subscribe(key, fn) 
    {
        this.validate();
        var ind = this.getIndex(key);
        
        var evt = [];
        if(ind !== -1)
        {
            evt = this.observers[ind]["evt"];
            evt.push(fn);
            this.observers[ind] = { "key": key, "evt" : evt};
        }else{
            evt.push(fn);
            this.observers.push({ "key": key, "evt" : evt});
        }

        console.log("subscribe broadcast: ",this.observers);
    }
  
    static unsubscribe(key, fn) 
    {      
        this.validate();
        var ind = this.getIndex(key);
        
        if(ind !== -1)
        {       
            var evt = this.get(key);     
            evt = evt.filter((subscriber) => subscriber.evt !== fn);
            this.observers[ind] = { "key": key, "evt" : evt};
        }     
    }
  
    static broadcast(key, data) 
    {
        console.log("broadcast antes: ",this.observers);
        this.validate();
        var ind = this.getIndex(key);
        
        if(ind !== -1)
        {          
            console.log("broadcast: ",this.observers); 
            var evt = this.observers[ind]["evt"]; 
            evt.forEach((subscriber) => subscriber(data));            
        }      
    }
}

export default EventsObserver