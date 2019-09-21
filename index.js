import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("test")
});

class Friend{
    constructor(id, {firstName, lastName, gender, language, email}){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName
        this.language = language;
        this.email = email;
        this.gender = gender;
    }
}

const friendDatabase = {}
const root = {
    friend: () => {
        return {
            "id": 17,
            "firstName": "qwe",
            "lastName": "yu",
            "gender": "jfgj",
            "language": "gjfgh",
            "email": "hgfcx"
        }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
}
app.use('/graphqltest', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))
app.listen(8080, () => console.log("sfsakalskjg"));















