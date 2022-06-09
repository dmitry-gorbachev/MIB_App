import testData from '../testData.js';
import Logger from './logger.js';

export default class Validator {
    static validate(character) {
        if(character['Race'] !== testData.allowedRace) {
            Logger.logHidden(character['id'], character['Race']);
            character['Name'] = testData.devName;
            character['Race'] = character['Race'].replace(/[A-Za-z\s]/g, '*');
        }
        return character;
    }
}
