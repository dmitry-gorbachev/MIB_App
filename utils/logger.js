import fs from 'fs';
import config from '../config.js';
import DateTime from './dateTime.js';

export default class Logger {
    static logHidden(id, race) {
        if (!fs.existsSync(config.logsDir)) {
            fs.mkdir(config.logsDir, err => {
                if(err) {
                    console.error(err);
                }
            });
        }
    
        const string = `${DateTime.now()} : information about ${race} ${id} successfully hidden\n`;
        fs.writeFile(`${config.logsDir}/${config.logFileName}`, string, { flag: 'a+' }, err => {
            if (err) {
              console.error(err);
            }
        });
    }
}
