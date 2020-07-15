
let io = require('socket.io');

// Quand un client se connecte, on le note dans la console
let socket = io.connect('localhost!')