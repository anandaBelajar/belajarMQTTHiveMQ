let mqtt = require('mqtt'); //require mqtt package
let client = mqtt.connect('mqtt:broker.hivemq.com:1883'); //setup the broker

var topic = 'pahe'; //set the topic

client.on('connect', function () {
  client.subscribe(topic, function (err) {
    console.log('concted to a broker...'); //when connection to boker success display this
    console.log('subscribed to topic : ' + topic); //display the subscribed topic of the mqtt broker
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log('topic : ' + topic + ' message : ' + message.toString()) //show th message
  //client.end() //client.end digunakan untuk menghentikan listening pada suatu broker
})
