const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5raXRzYWluaSIsImEiOiJja3Jhc2l4N2swcmM5Mm9xdWRxZG94bHp0In0.ekqmyn9gaRaRQwWBhpQZMQ&limit=1'
    
    request({url ,json: true},(error,{body}) => {
       if (error){
            callback('Unable to connect to weather service!', undefined)
         }   
       else if(body.features.length === 0){
            callback('Unable to find location.n Try another search.', undefined)   
         }
       else {
            callback(undefined , {
                 latitude: body.features[0].center[1],
                 longitude: body.features[0].center[0],
                 location: body.features[0].place_name
            })  
       }  
    })
}

module.exports = geoCode