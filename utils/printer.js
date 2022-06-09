export default class Printer {
    static printInfo(character) {
        if(typeof(character) === 'object') {
            Object.entries(character).forEach(([key, value]) => {
                if(key !== 'id') {
                    console.log(`${key}: ${value}`);
                }
            })
        } else {
            console.log(character);
        }
    }

    static printError(message) {
        console.log(`[Error] ${message}`);
    }
}
