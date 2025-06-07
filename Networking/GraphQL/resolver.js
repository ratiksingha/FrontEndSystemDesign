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
  {
    id:3,
    title: 'The Metamorphosis',
    author: "Kate Chopin",
    PublishedYear: 1915,    
  }
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
  Book:{
    author:(parent ,args ,context,info)=>{
      return authors.find(author => author.name === parent.author);

    }
  },
  Author:{
    books: (parent, args, context, info) => {
      return books.filter(book => book.author === parent.name);
    }
  },
  Query: {
    books: () => books,
    authors: () => authors,
  },
  Mutation:{
    addBook:()=>{

      const newRecord={...args, id : books.length + 1};
      books.push(newRecord);
      return newRecord
    }
  }
};