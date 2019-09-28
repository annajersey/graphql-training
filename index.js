import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from "./resolvers";

const app = express();

app.get('/', (req, res) => {
    res.send("test")
});
const root = resolvers;
app.use('/graphqltest', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))
app.listen(8080, () => console.log("running"));















