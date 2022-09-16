const express = require('express');
const graphql = require('graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} = graphql;
const {graphqlHTTP} = require('express-graphql');
const app = express();
const PORT = 6969;
const userData = require('./MOCK_DATA.json');
const schema = require('./Schema/index')
const cors=require("cors");

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

 
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));



app.listen(PORT, ()=> {
    console.log('Server Running on Port 6969')
})