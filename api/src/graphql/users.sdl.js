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
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
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
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
