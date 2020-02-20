class StorageData {    
    static get(key)
    {
        return localStorage.getItem(key);
    }

    static set(key, value)
    {
        localStorage.setItem(key, value);
    }

    static clear()
    {
        localStorage.clear();        
    }

    static remove(key)
    {
        localStorage.removeItem(key);
    }
}

export default StorageData