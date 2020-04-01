import { baseUrl } from '../../json/config.json';

export default class QuestionService 
{
    constructor()
    {
        this.entity = "question/";
    }

    async getAll() {
        try {
            const response = await fetch(baseUrl + this.entity);
            const dataJson = await response.json();            
            return dataJson;

        } catch (err) {
            console.error(err);
        }
    }

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