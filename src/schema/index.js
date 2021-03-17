import { gql } from 'apollo-server-express'

// MORK DATA
const users = [
  {
    id: "1",
    username: "john"
  },
  {
    id: "2",
    username: "honda"
  },
  {
    id: "3",
    username: "matong"
  },
]

const me = users[0]

export const resolvers = {
  Query: {
    me: (parent, args, context, info) => {
      return me
    },
    user: (parent, args, context, info) => {
      const id = args.id
      const user = users.find(user => user.id === id)
      if (user) {
        return user
      }
      throw 'no id'
    },
    users: (parent, args, context, info) => {
      return users
    }
  }
}

export const typeDefs = gql`
  type User{
    id: ID!
    username: String!

  }
  type Query {
    me: User!
    user(id: ID!): User
    users: [User]!
  }
`;