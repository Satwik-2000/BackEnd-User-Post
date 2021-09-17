import {gql} from 'apollo-server-express';

export default gql `
    extend type Query {
      getAllPosts: [Post!]!   
    },

    extend type Mutation {
      createNewPost(newPost: NewPost): Post!
    }

    input NewPost{
      title: String!
      content: String!
      featuredImage: String
    }

    type Post {
        title: String!
        content: String!
        featuredImage: String
        createdAt: String
        updatedAt: String
    }
`;