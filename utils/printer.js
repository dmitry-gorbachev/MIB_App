function printInfo(character) {
    Object.entries(character).forEach(([key, value]) => {
        if(key !== 'id') {
            console.log(`${key}: ${value}`);
        }
    })
}

export { printInfo } ;