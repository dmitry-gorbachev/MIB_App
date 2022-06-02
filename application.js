import { printInfo } from './utils/printer.js';
import { getInfo, getCharactersCount } from './utils/API.js';
import { getRandomId } from './utils/random.js';
import { argv } from 'node:process';
import { validate } from './utils/validator.js';


async function myApplication() {
    const id = argv[2] ? argv[2] : getRandomId(await getCharactersCount());
    printInfo(validate(await getInfo(id)));
}


myApplication();