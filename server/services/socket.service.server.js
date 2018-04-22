module.exports = function(io) {

  var collaborations = [];

  var socketIdToSession = [];


  io.on('connection', function (socket) {

    // console.log(socket);
    var sessionId = socket.handshake.query['sessionId'];
    socketIdToSession[socket.id] = sessionId;

      if (sessionId in collaborations) {
         collaborations[sessionId]['participants'].push(socket.id);
       } else {
        //turn to mongodb;
        //  redisClient.get(sessionPath + '/' + sessionId, function(data) {
        //    if (data) {
        //      console.log("session terminiated previsouly; pulling back from Redis.");
        //      collaborations[sessionId] = {
        //        // 'cachedChangeEvents': JSON.parse(data),
        //        'cachedChangeEvents': [],
        //        'participants': []
        //      };
        //    } else {
        //      console.log("creating new session");
        //      collaborations[sessionId] = {
        //        'cachedChangeEvents': [],
        //        'participants': []
        //      };
        //    }
        //    collaborations[sessionId]['participants'].push(socket.id);
        //  });
          collaborations[sessionId] = {
            // 'cachedChangeEvents': [],
            'participants': []
          };
          collaborations[sessionId]['participants'].push(socket.id);
       }



    console.log("first handshake from client");

    console.log(socket.id);

    io.emit("message", "from server");

    socket.on('change', function (delta) {
      // console.log(delta);
      // var sessionId = socketIdToSession[socket.id];

      // if (sessionId in collaborations) {
      //   collaborations[sessionId]['cachedChangeEvents'].push(["change", delta, Date.now()]);
      // }

      forwardEvents(socket.id, 'change', delta);

    });

    socket.on('cursorMove', function(cursor) {
      console.log( "cursorMove " + socketIdToSession[socket.id] + " " + cursor ) ;
    cursor = JSON.parse(cursor);
    cursor['socketId'] = socket.id;

    forwardEvents(socket.id, 'cursorMove', JSON.stringify(cursor));
  });

    socket.on('cursorMove', function (cursor) {
      console.log(cursor);

    });

    //   }cursor =
    //   }> {
    //     console.log( "cursorMove " + socketIdToSessionId[socket.id] + " " + cursor ) ;
    //   cursor = JSON.parse(cursor);
    //   cursor['socketId'] = socket.id;
    //
    //   forwardEvents(socket.id, 'cursorMove', JSON.stringify(cursor));
    // });
    //
    // });


//    => {
//   //   console.log( "change " + socketIdToSessionId[socket.id] + " " + delta ) ;
//   // let sessionId = socketIdToSessionId[socket.id];
//   //
//   // if (sessionId in collaborations) {
//   //   collaborations[sessionId]['cachedChangeEvents'].push(["change", delta, Date.now()]);
//   // }
//   //
//   // forwardEvents(socket.id, 'change', delta);
// });

    function forwardEvents(socketId, eventName, dataString) {
      var sessionId = socketIdToSession[socketId];

      if (sessionId in collaborations) {
        var participants = collaborations[sessionId]['participants'];
        for (var i = 0; i < participants.length; i++) {
          if (socket.id != participants[i]) {
            io.to(participants[i]).emit(eventName, dataString);
          }
        }
      } else {
        console.log("WARNING: could not tie socket_id to any collaboration");
      }
    }

  })
}
