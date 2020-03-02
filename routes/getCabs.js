/*
    This module generates an array that contains 10(default) random numbers
    used a distances of cabs from the hub. Since it is random each time, it should be used
    once for every point/city in our network
*/

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function generateCabs(number = 10){
    var cabDistances = [];
    for(let i = 0; i < number; i++) {
        cabDistances.push(getRandomArbitrary(0, 50));
    }
    
    return cabDistances;
}

function cabHandler(req, res, next) {
    let cabsFromHub = generateCabs();
    // console.log(cabsFromHub);
    res.send({
        distances: cabsFromHub
    });
}

module.exports = {
    cabHandler
}