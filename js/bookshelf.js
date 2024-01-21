const myBookshelf = {
  typeOfMedia: "Audio",
  SpacesOnShelf: 9,
  loggedIn: true,
  books: [
    {
      name: "The Word is Murder: A Novel",
      author: "Anthony Horowiz",
      genre: "Crime fiction",
      lengthHours: 9,
      lengthMinutes: 2,
      available: true,
      language: "English",
    },
    {
      name: "House of Correction: A Novel",
      author: "Anthony Nicci French",
      genre: "Crime fiction",
      lengthHours: 11,
      lengthMinutes: 20,
      available: false,
      language: "English",
    },
    {
      name: "What's Eating Gilbert Grape",
      author: "Peter Hedges",
      genre: "Fiction",
      lengthHours: 11,
      lengthMinutes: 43,
      available: true,
      language: "English",
    },
    {
      name: "Historia om det nye namnet",
      author: "Elena Ferrante",
      genre: "Fiction",
      lengthHours: 12,
      lengthMinutes: 10,
      available: true,
      language: "Norwegian",
    },
    {
      name: "The Woman at the Wheel",
      author: "Penny Haw",
      genre: "Fiction",
      lengthHours: 11,
      lengthMinutes: 9,
      available: true,
      language: "English",
    },
  ],
};

var itemsOnShelf = document.querySelector(".bookshelf ul");

showBooks();

function showBooks() {
  for (var i = 0; i < myBookshelf.books.length; i++) {
    var item = myBookshelf.books[i];

    itemsOnShelf.innerHTML =
      itemsOnShelf.innerHTML +
      "<li>" +
      item.name +
      "<br>" +
      item.author +
      "</li>";
  }
}

function noBooks() {
  itemsOnShelf.innerHTML = "";
}

var heading = document.querySelector("h1");
var button = document.querySelector("button");

function changeHeading() {
  myBookshelf.loggedIn = !myBookshelf.loggedIn;
  if (myBookshelf.loggedIn) {
    heading.innerHTML = "Logged in";
    showBooks();
  } else {
    heading.innerHTML = "Logged out";
    noBooks();
  }
}

button.onclick = changeHeading;
