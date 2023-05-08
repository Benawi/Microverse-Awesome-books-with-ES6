import AdderRemovebooks from './modules/AdderRemovebooks.js';
import ListBooks from './modules/listBook.js';
import Navigation from './modules/Navigation.js';
import { DateTime } from './modules/luxon.js';

const adderRemovebooks = new AdderRemovebooks();
const listBooks = new ListBooks();
const nav = new Navigation();
const datetime = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
const form = document.querySelector('form');

listBooks.generate(adderRemovebooks.list(), datetime);
nav.navigation.addEventListener('click', (event) => {
  if (event.target.id === 'nav-home') {
    nav.sectionShow(document.getElementById('nav-list'));
  } else if (event.target.nodeName === 'A') {
    nav.sectionShow(event.target);
  }
});
document.addEventListener('click', (event) => {
  if (event.target && event.target.className.includes('remove-book')) {
    adderRemovebooks.removeBook(event.target);
    listBooks.generate(adderRemovebooks.list(), datetime);
  }
});

form.addEventListener('submit', (event) => {
  adderRemovebooks.addBooks();
  listBooks.generate(adderRemovebooks.list(), datetime);
  event.preventDefault();
});