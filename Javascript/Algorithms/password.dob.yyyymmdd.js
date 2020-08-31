function getPassword() {
    let date = Person.Details.BirthDate;

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    if (day < 10) { day = '0' + day; }
    if (month < 10) { month = '0' + month; }

    let formattedDate = '' + year + month + day

    return formattedDate;
}

getPassword();
