function getPassword() {
    let date = Person.Details.BirthDate;

    let year = date.getUTCFullYear();
    let month = date.getUTCMonth()+1;
    let day = date.getUTCDate();

    if (day < 10) { day = '0' + day; }
    if (month < 10) { month = '0' + month; }

    let formattedDate = '' + year + month + day

    return formattedDate;
}

getPassword();
