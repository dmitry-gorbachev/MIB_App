function now() {
    const dateTime = new Date();
    const year = dateTime.getFullYear();
    let month = fullNum(dateTime.getMonth() + 1);
    let day = fullNum(dateTime.getDate());
    
    let hours = fullNum(dateTime.getHours());
    let minutes = fullNum(dateTime.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function fullNum(number) {
    const decadeSize = 10;
    return number < decadeSize ? `0${number}` : number;
}

export { now }