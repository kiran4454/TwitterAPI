var Twitter = require('twitter');
var config = require('./config')
var T = new Twitter(config);
const express=require('express');
const app=express();
var tweet = {
status: 'Trail!!' } // this is the tweet message
T.post('statuses/update', tweet, tweeted) // this is how we actually post a tweet ,again takes three params 'statuses/update' , tweet message and a call back function
function tweeted(err, data, response) {
if(err){
console.log("Something went wrong!");
}
else{
console.log("It worked!");
}
} 
app.listen(3000,()=>console.log('listening on port 3000'));