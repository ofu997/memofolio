export const schema = gql`
  type Image {
    id: Int!
    title: String!
    url: String!
    likes: Int
    createdAt: String!
    comments: [Comment]!
    likedBy: [User]!
    user: User!
    userId: Int!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    title: String!
    url: String!
    likes: Int
    userId: Int!
  }

  input UpdateImageInput {
    title: String
    url: String
    likes: Int
    userId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
