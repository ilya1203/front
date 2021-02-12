import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ClientsService{
	constructor(){	}
	
	getClient(pk) {
		console.log(pk.pk.match.params.pk);
        const url = 'http://127.0.0.1:8000/api/'+pk.pk.match.params.pk;
        return axios.get(url).then(response => response.data);
        return axios.get(url).then(response => response.data);
    }
	
}