function convertDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function getFormattedEndDate() {
    const endDate = sourceContract && sourceContract.DatumUitDienst;
    if (!endDate) return "";

    const date = new Date(endDate);
    return isNaN(date) ? "" : convertDate(date);
}

getFormattedEndDate();