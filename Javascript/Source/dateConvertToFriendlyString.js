function convertDate(date) {
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let year = date.getFullYear();
    return day + "-" + month + "-" + year;
}

let endDate = sourceContract.iz_einddatum_P01126;
if (endDate != "") {
    const date = new Date(endDate);
    newDate = convertDate(date);
} else {
    newDate = ""
}
