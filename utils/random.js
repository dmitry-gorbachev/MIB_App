export default class Random {
    static getRandomId(max) {
        return Math.floor(Math.random() * max);
    }
}
