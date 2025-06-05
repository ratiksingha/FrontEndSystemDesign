// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;


export const typeDefs=`#graphql


type Author {
id : ID!
name : String!
books: [Book]


}

type Book {
  id: ID!
  title: String!
  author: String!
  PublishedYear: Int
}

# It is like GET in REST API , whatever we define in Query, we can fetch that data
# if we want a single book , we can use query like books:Book but if we want to fetch all books, we can use books:[Book] 
type Query {
  books: [Book]
  authors: [Author]
}



#to update the schema, we use Mutation like POST in REST API


`;