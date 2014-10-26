var util = require('util'),
    twitter = require('twitter'),
    twit = require('./config');

twit.stream('user', {track:'prufrock123'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
    });
});