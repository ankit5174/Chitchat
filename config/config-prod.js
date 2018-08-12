module.exports = {
    db: {
        connectionURL:`mongodb://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@cluster0-shard-00-00-u4wwc.mongodb.net:27017,cluster0-shard-00-01-u4wwc.mongodb.net:27017,cluster0-shard-00-02-u4wwc.mongodb.net:27017/chitchat?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
    },
    app: {
        serverPort: 8080,
        serverHost: 'http://localhost'
    },
    socket: {
        socketServerURL: 'http://localhost:8080'
    }
};