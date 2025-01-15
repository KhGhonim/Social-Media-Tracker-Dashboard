const initializeSocket = (io) => {
  // Track connected users
  const connectedUsers = new Map();

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    socket.on('join', (userId) => {
      const roomName = `user_${userId}`;
      socket.join(roomName);
      connectedUsers.set(userId, socket.id);
      console.log(`User ${userId} joined room ${roomName}`);

    });

    socket.on('disconnect', () => {
      // Clean up disconnected user
      for (const [userId, socketId] of Array.from(connectedUsers.entries())) {
        if (socketId === socket.id) {
          connectedUsers.delete(userId);
          console.log(`User ${userId} disconnected`);
          break;
        }
      }
    });
  });

  return {
    emitToUser: (userId, event, data) => {
      const roomName = `user_${userId}`;
      io.to(roomName).emit(event, data);
      console.log(`Emitted ${event} to room ${roomName}:`, data);
    }
  };
};

export default initializeSocket;