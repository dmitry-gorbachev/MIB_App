export default class DateTime {
    static now() {
        const dateTime = new Date();
        const year = dateTime.getFullYear();
        let month = this.fullNum(dateTime.getMonth() + 1);
        let day = this.fullNum(dateTime.getDate());
        
        let hours = this.fullNum(dateTime.getHours());
        let minutes = this.fullNum(dateTime.getMinutes());
    
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    
    static fullNum(number) {
        const decadeSize = 10;
        return number < decadeSize ? `0${number}` : number;
    }
}
