import testData from '../testData.json' assert {type: "json"};
import { logHidden } from './logger.js';

function validate(character) {
    if(character['Race'] !== 'Human') {
        logHidden(character['id'], character['Race']);
        character['Name'] = testData.devName;
        character['Race'] = character['Race'].replace(/[A-Za-z]/g, '*');
    }
    return character;
}

export { validate };