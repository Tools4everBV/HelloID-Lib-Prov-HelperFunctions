function convertDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function getFormattedStartDate() {
    const startDate = sourceContract && sourceContract.DatumInDienst;
    if (!startDate) return "";

    const date = new Date(startDate);
    return isNaN(date) ? "" : convertDate(date);
}

getFormattedStartDate();