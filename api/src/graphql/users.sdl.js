export const schema = gql`
  type User {
    id: Int!
    name: String!
    handle: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    profilePicUrl: String
    bio: String
    jwt: String
    localStoragePassword: String
    userLikes: [Image]!
    images: [Image]!
    comments: [Comment]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    handle: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    profilePicUrl: String
    bio: String
    jwt: String
    localStoragePassword: String
  }

  input UpdateUserInput {
    name: String
    handle: String
    email: String
    password: String
    isAdmin: Boolean
    profilePicUrl: String
    bio: String
    jwt: String
    localStoragePassword: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
