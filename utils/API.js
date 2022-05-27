import axios from 'axios';
import { validate } from './validator.js';
import config from '../config.json' assert {type: "json"};

async function getInfo(id) {
    const resp = await axios.get(`${config.APIURL}/${id}`);
    const character = {};
    character['id'] = id;
    character['Name'] = resp.data.name;
    character['Status'] = resp.data.status;
    character['Race'] = resp.data.species;
    return character;
}

async function getCharacter(id) {
    return validate(await getInfo(id));
}

async function getCharactersCount() {
    const resp = await axios.get(config.APIURL);
    return JSON.stringify(resp.data.info.count);
}

export { getCharacter, getCharactersCount };