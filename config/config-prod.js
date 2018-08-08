module.exports = {
    db: {
        connectionURL: `mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@cluster0-5zjes.mongodb.net/test?retryWrites=true`
    },
    app: {
        serverPort: 8080,
        serverHost: 'http://localhost'
    },
    socket: {
        socketServerURL: 'http://localhost:8080'
    }
};