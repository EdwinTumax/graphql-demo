'use strict';
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const app = express();
const port = process.env.port || 3000;

const typeDefs = readFileSync(
    join(__dirname,'lib','schema.graphql'),
    'utf-8'
);

const schema = makeExecutableSchema({ typeDefs, resolvers});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(port,() => {
    console.log(`Server is listening at http://localhost:${port}`);
});

/*graphql({schema: schema,source:'{ hello }', rootValue: resolvers}).then((data) => {
    console.log(data);
});*/