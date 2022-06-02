import testData from '../testData.json' assert {type: "json"};
import { logHidden } from './logger.js';

function validate(character) {
    if(character['Race'] !== testData.allowedRace) {
        logHidden(character['id'], character['Race']);
        character['Name'] = testData.devName;
        character['Race'] = character['Race'].replace(/[A-Za-z\s]/g, '*');
    }
    return character;
}

export { validate };