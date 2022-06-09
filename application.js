import Printer from './utils/printer.js';
import API from './utils/API.js';
import Random from './utils/random.js';
import { argv } from 'node:process';
import Validator from './utils/validator.js';

export default class Application {
    static async myApplication() {
        //const api = new API();
        const id = argv[2] ? argv[2] : Random.getRandomId(await API.getCharactersCount());
        Printer.printInfo(Validator.validate(await API.getInfo(id)));
    }
}

Application.myApplication();