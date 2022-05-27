import { getCharactersCount } from './API.js';

async function getRandomId() {
    const max = await getCharactersCount();
    return Math.floor(Math.random() * max);
}

export { getRandomId };