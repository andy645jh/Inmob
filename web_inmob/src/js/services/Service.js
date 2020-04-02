import { baseUrl } from '../../json/config.json';

export default class Service 
{
    constructor(entity)
    {
        this.entity = entity + "/";
    }

    // format from api: localhost:8000/entity/
    async getAll() {
        try {
            const response = await fetch(baseUrl + this.entity);
            const dataJson = await response.json();            
            return dataJson;

        } catch (err) {
            console.error(err);
        }
    }

    // format from api: localhost:8000/{id}/entity/
    // id : Parent Id 
    async getAllByParentId(id) {
        try {
            const response = await fetch(baseUrl + id +"/" + this.entity);
            const dataJson = await response.json();            
            return dataJson;

        } catch (err) {
            console.error(err);
        }
    }

    // format from api: localhost:8000/entity/{id}
    // id : Entity Id 
    async search(word) {
        return fetch(baseUrl + this.entity + 'search/' + word, {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    // format from api: localhost:8000/entity/{id}
    // id : Entity Id 
    async get(id) {
        return fetch(baseUrl + this.entity + id, {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    // format from api: localhost:8000/entity/create
    // model : Entity data 
    async create(model) {
        return fetch(baseUrl + this.entity + 'create', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(model)
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.ok;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    // format from api: localhost:8000/entity/{id}
    // id : Entity Id 
    async delete(id) {
        return fetch(baseUrl + this.entity + id, {
            method: "DELETE",
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return true;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    // format from api: localhost:8000/entity/{id}
    // model : Entity data 
    async update(model) {
        return fetch(baseUrl + this.entity + model.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(model)
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.ok;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }

    handleError(error) {
        console.log(error.message);
    }
}