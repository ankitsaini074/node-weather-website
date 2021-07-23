const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=d18bc11ff91de2215ba7e997e01341a0&query=' + latitude + ',' + longitude + '&units=f'

 request({url ,json: true},(error,{body}) => {
      if (error){
           callback('Unable to connect to weather service', undefined)
      }
      else if(body.error){
           callback('Unable to find location', undefined)
      }
      else {
           callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' degrees out. It feels like ' + body.current.precip + '% chance of rain. The wind speed is ' + body.current.wind_speed + '%')   
       }
    })
 }

 module.exports = forecast  