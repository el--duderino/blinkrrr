var util = require('util'),
    twitter = require('twitter'),
    twit = new twitter({
        consumer_key: 'cDiHeyuiqEPJ69MnSaZiWpvcb',
        consumer_secret: '6S5rO7Q7CIKsb5YKfpufaDIfO9CuURMkkKzILlp321srhCg9V2',
        access_token_key: '1669525340-mHGaWXKWQ7li3hYJaZYbdYdQn30UUVi4n5E4Adh',
        access_token_secret: '0Nd9ScMmfn8rp9uaaBfpAlbPxNxpxAqn9CKHjyUJ88nbK'
    });

twit.stream('user', {track:'prufrock123'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
    });
});