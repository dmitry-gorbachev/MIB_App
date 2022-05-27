import { printInfo } from './utils/printer.js';
import { getCharacter } from './utils/API.js';
import { getRandomId } from './utils/random.js';
import { argv } from 'node:process';

printInfo(await getCharacter(argv[2] ? argv[2] : await getRandomId()));
