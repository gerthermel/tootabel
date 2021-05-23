const sess = require('./session');

module.exports = function(channels){
    return async function(req, res, next){
        var channelOnOff = {
            messageAlert: false,
            notificationAlert: false,
            friendRequestAlert: false,
            userOnline: false,
        }
        var mySocket = 0;
        var io = req.app.get('socketio');
        var roomId = `user_${ sess.get('userId') }`;
        if( typeof channels != 'undefined' && channels.length>0 ){
            for(var key in channels){
                var channel = channels[key];
                channelOnOff[channel] = true;
            }
        }else{
            channelOnOff[messageAlert] = true;
            channelOnOff[notificationAlert] = true;
            channelOnOff[friendRequestAlert] = true;
        }
        io.on('connection', function(socket) {
            io.removeAllListeners('connection')
            if( sess.get('userId') ){
                socket.join(roomId);
                var mySocket = socket.id;
                var myAlias = sess.get('userAlias');
                io.sockets.sockets[mySocket]['userInfo'] = {alias:myAlias, status: 'online' };
                if( typeof io.sockets[`onlineUsers`] == 'undefined')
                    io.sockets[`onlineUsers`] = [];

                if( typeof io.sockets.onlineUsers[myAlias] == 'undefined')
                    io.sockets.onlineUsers[myAlias] = [];

                io.sockets.onlineUsers[myAlias][mySocket] = mySocket
                io.sockets[sess.get('userAlias')] = {socketId: mySocket}
                io.sockets[`s_${mySocket}`] = {alias: sess.get('userAlias')}
                io.emit('userConnected',  {socketId: mySocket});
                
            }

            
            if( channelOnOff.messageAlert && sess.get('userId'))
                socket.on('messageAlert', function(data){
                    socket.broadcast.to(roomId).emit('messageAlert', data);
                })
            
            if( channelOnOff.notificationAlert && sess.get('userId'))
                socket.on('notificationAlert', function(data){
                    socket.broadcast.to(roomId).emit('notificationAlert', data);
                })
            
            if( channelOnOff.friendRequestAlert && sess.get('userId'))
                socket.on('friendRequestAlert', function(data){
                    socket.broadcast.to(roomId).emit('friendRequestAlert', data);
                })

                
            socket.on('userOnline', function(data){
                var socketId = data.socketId
                io.sockets.sockets[socketId].userInfo.status = 'online';
                var alias =  io.sockets.sockets[socketId].userInfo.alias;
                io.emit('userOnline', {alias: alias});
            })

            socket.on('userAway', function(data){
                var socketId = data.socketId
                if( typeof  io.sockets.sockets[socketId] != 'undefined'){
                    io.sockets.sockets[socketId].userInfo.status = 'away';
                    var alias =  io.sockets.sockets[socketId].userInfo.alias;
                    io.emit('userAway', {alias: alias});
                }
            })

            socket.on('disconnect', function(){
                var socketId = socket.id
                if( typeof io.sockets[`s_${socketId}`] != 'undefined'){
                    var alias = io.sockets[`s_${socketId}`].alias
                    delete io.sockets.onlineUsers[alias][socketId]
                    delete io.sockets[sess.get('userAlias')];
                    delete io.sockets[`s_${socketId}`];
                    if( Object.keys(io.sockets.onlineUsers[myAlias]).length == 0){
                        io.emit('userOffline', {alias: alias});
                    }
                }

            });
        })//end of io
        next();
    }
}






