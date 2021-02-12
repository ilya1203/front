import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ClientsService{
	constructor(){	}
	
	getClient(pk) {
		console.log(pk.pk.match.params.pk);
        const url = 'http://iluach2.pythonanywhere.com/api/'+pk.pk.match.params.pk+':443';
        return axios.get(url).then(response => response.data);
        return axios.get(url).then(response => response.data);
    }
	
}