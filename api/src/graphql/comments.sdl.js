export const schema = gql`
  type Comment {
    id: Int!
    body: String!
    image: Image!
    imageId: Int!
    user: User!
    posterId: Int!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    body: String!
    imageId: Int!
    posterId: Int!
  }

  input UpdateCommentInput {
    body: String
    imageId: Int
    posterId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
