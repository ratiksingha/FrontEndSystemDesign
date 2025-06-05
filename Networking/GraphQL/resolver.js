// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

const books = [
  {
    id:1,
    title: 'The Awakening',
    author: 'Kate Chopin',
    PublishedYear: 1899,
  },
  {
    id:2,
    title: 'City of Glass',
    author: 'Paul Auster',
    PublishedYear: 1985,
  },
];

const authors = [
  {
    id:1,
    name: 'Kate Chopin',
  },
  {
    id:2,
    name: 'Paul Auster',
  },
];


export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};