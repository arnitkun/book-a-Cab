const request = require('request');
const bodyparser = require('body-parser');

function getAmount(cityList, index) {//index to be replaced by city name
    return (parseFloat(cityList.distances[index]))*10;//rudimentary...
}

function getDistance() {
        return new Promise( function(resolve, reject){
            request({
            url: "http://localhost:3000/getCabs",
            method: 'GET',  
        }, function( err, res, body) {
            if(err) reject(err);
            resolve(body);
        });
    });
}

function bookingHandler(req, res, next) {
    const{user_name, city} = req.body;
    getDistance()
    .then(function(data){
        data = JSON.parse(data);
        console.log("fulfilling: " + data);
        let cost = getAmount(data, 3)
        
        
        res.send({
            "cost": cost
        });
    })
    
}

module.exports = {
    bookingHandler
}