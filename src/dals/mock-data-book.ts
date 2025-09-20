import { Book } from "./book/index.js";

export interface DB {
  books: Book[];
}

export const db: DB = {
  books: [
    {
      id: "1",
      title: "Choque de reyes",
      releaseDate: new Date("09/11/1998"),
      author: "George R. R. Martin",
    },
    {
      id: "2",
      title: "Harry Potter y el prisionero de Azkaban",
      releaseDate: new Date("12/07/1999"),
      author: "J. K. Rowling",
    },
    {
      id: "3",
      title: "The Witcher - The Last Wish",
      releaseDate: new Date("04/11/1993"),
      author: "Andrzej Sapkowski",
    },
    {
      id: "4",
      title: "El Hobbit",
      releaseDate: new Date("01/13/1937"),
      author: "J. R. R. Tolkien",
    },
    {
      id: "5",
      title: "Assassin's Quest",
      releaseDate: new Date("03/03/1997"),
      author: "Robin Hobb",
    },
    {
      id: "6",
      title: "Homeland",
      releaseDate: new Date("09/09/1990"),
      author: "R. A. Salvatore",
    },
    {
      id: "7",
      title: "American Gods",
      releaseDate: new Date("05/06/2001"),
      author: "Neil Gaiman",
    },
  ],
};
