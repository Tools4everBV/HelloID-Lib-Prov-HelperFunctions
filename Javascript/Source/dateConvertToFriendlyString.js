function convertDate(date) {
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let year = date.getFullYear();
    return day + "-" + month + "-" + year;
}

function convertDate(date) {
    // Get day, month, and year components
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    // Format the date as "dd-mm-yyyy"
    return `${day}-${month}-${year}`;
}

// Example usage:
let inputDate = new Date('2024-04-30'); // Replace with your actual input date
inputDate ? convertDate(new Date(inputDate)) : null;