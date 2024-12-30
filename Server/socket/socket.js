const initializeSocket = (io) => {
<<<<<<< HEAD
    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('join', (userId) => {
            socket.join(`user_${userId}`);
        });

        socket.on('notification', (data) => {
            io.to(`user_${data.userId}`).emit('newNotification', data);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
=======
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('join', (userId) => {
      socket.join(`user_${userId}`);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
>>>>>>> 1c510ab (Sockets and Updates)
};

export default initializeSocket; 