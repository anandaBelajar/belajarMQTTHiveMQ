var mqtt = require('mqtt') //require mqtt packgae
var client  = mqtt.connect('mqtt:broker.hivemq.com:1883') //setup the mqtt broker

var topic = 'pahe'; //set the topic

client.on('connect', function () {
  client.subscribe(topic, function (err) {
    if (!err) {
      client.publish(topic, 'Hello mqtt'); //publish the messsage
    }
    client.end(); //close the client
  })
})


 
