function addDays(date, days) {
    let copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
}

let endDate = sourceContract.iz_einddatum_P01126;
if (endDate != "") {
    const date = new Date(endDate);
    newDate = addDays(date, 1);
} else {
    newDate = new Date('2099-12-31');
}