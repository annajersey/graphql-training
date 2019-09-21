import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req,res) => {
    res.send("test")
});
const root = {hello: () => "Hello"}
app.use('/graphqltest', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))
app.listen(8080, () => console.log("sfsakalskjg"));















