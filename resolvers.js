class Friend{
    constructor(id, {firstName, lastName, gender, language, email, age, contacts}){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.language = language;
        this.email = email;
        this.gender = gender;
        this.contacts = contacts;
    }
}

const friendDatabase = {}
const resolvers = {
    getFriend: ({id}) => {
        return new Friend(id, friendDatabase[id])
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
}
export default resolvers