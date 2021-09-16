const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { DB, PORT } from './config';
import {success, error} from 'consola';
import {typeDefs, resolvers} from './graphql';
const client = require('./database')

// POSTGRESQL CONNECTION
client.connect();

client.query('select * from userpostdemo', (err, result) => {
    if(!err) {
        console.log(result.rows);
    }
    client.end();
})


// APOLLO SERVER
const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
});

const app = express();
const startApp = async() => {
    //Inject apollo server middleware on Express Application
    await server.start();
    server.applyMiddleware({app});
    app.listen(PORT, () => success({
        badge: true, 
        message: `Server started on PORT ${PORT}` 
    }));
}

startApp();