function removeDiacriticMarks(str) {
  //Replace Diacritic Marks and Curly Quotes
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u2018\u2019]/g, "'");
}
