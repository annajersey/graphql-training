import {buildSchema} from 'graphql';

const schema = buildSchema(`

        type Friend{
            id: ID,
            firstName: String,
            lastName: String,
            gender: Gender,
            age: Int,
            language: String,
            email: String,
            contacts: [Contact]
        }
        type Contact{
            
            firstName: String,
            lastName: String
            }
        type Query{
            getFriend(id: ID): Friend
        }
        enum Gender{
            MALE
            FEMALE
            OTHER
        }
        input FriendInput{
            id: ID,
            firstName: String!,
            lastName: String,
            age: Int,
            gender: Gender,
            language: String,
            email: String,
            contacts: [ContactInput]
        }
        input ContactInput{
           
            firstName: String
            lastName: String
        }
        type Mutation{
            createFriend(input: FriendInput): Friend
        }
`);

export default schema;