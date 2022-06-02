import fs from 'fs';
import Config from '../config.js';
import DateTime from './dateTime.js';

export default class Logger {
    static logHidden(id, race) {
        if (!fs.existsSync(Config.logsDir)) {
            fs.mkdir(Config.logsDir, err => {
                if(err) {
                    console.error(err);
                }
            });
        }
    
        const string = `${DateTime.now()} : information about ${race} ${id} successfully hidden\n`;
        fs.writeFile(`${Config.logsDir}/${Config.logFileName}`, string, { flag: 'a+' }, err => {
            if (err) {
              console.error(err);
            }
        });
    }
}
