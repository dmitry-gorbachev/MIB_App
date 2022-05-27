import fs from 'fs';
import config from '../config.json' assert {type: 'json'};
import { now } from './dateTime.js';

function logHidden(id, race) {
    if (!fs.existsSync(config.logsDir)) {
        fs.mkdir(config.logsDir, err => {
            if(err) {
                console.error(err);
            }
        });
    }

    const string = `${now()} : information about ${race} ${id} successfully hidden\n`;
    fs.writeFile(`${config.logsDir}/${config.logFileName}`, string, { flag: 'a+' }, err => {
        if (err) {
          console.error(err);
        }
    });
}

export { logHidden };