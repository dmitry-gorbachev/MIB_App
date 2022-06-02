import axios from 'axios';
import config from '../config.js';

export default class API {
    static async getInfo(id) {
        const resp = await axios.get(`${config.APIURL}/${id}`);
        return {
            id: id,
            Name: resp.data.name,
            Status: resp.data.status,
            Race: resp.data.species
        };
    }
    
    static async getCharactersCount() {
        const resp = await axios.get(config.APIURL);
        return resp.data.info.count;
    }
}
