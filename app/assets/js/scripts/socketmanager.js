let host = 'daemon-de-standard-02.cursehosting.fr'
let port = 25712

module.exports.loginClient = function(username, password, callback){
    const net = require('net');

    let socket = new net.Socket();

    socket.connect(port, host, function(){
        socket.write("login: "+username.trim()+","+password.trim())

            socket.on('data', function(data){
                
                console.log('result : '+data)

                socket.end();
                socket.destroy();

                callback(data);
                //return data === 'Login OK';
             });
    });
};

module.exports.getNews = function(callback){
    const net = require('net');
    let socket = new net.Socket();

    socket.connect(port, host, function(){
        socket.write('news');

        socket.on('data', function(data){ 
            console.log('news list : '+String(data));

            let news = String(data).split("$split$");

            console.log('news : '+news);

            callback(news);
        });
    });
}


module.exports.serverOnline = function(){
    const net = require('net');
    let socket = new net.Socket();

    return socket.connect(port, host, function(){
        socket.end();
        socket.destroy();
    });
}