function printInfo(character) {
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

export { printInfo } ;