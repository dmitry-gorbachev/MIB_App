import axios from 'axios';
import config from '../config.json' assert {type: "json"};

async function getInfo(id) {
    const resp = await axios.get(`${config.APIURL}/${id}`);
    return {
        id: id,
        Name: resp.data.name,
        Status: resp.data.status,
        Race: resp.data.species
    };
}

async function getCharactersCount() {
    const resp = await axios.get(config.APIURL);
    return resp.data.info.count;
}

export { getInfo, getCharactersCount };