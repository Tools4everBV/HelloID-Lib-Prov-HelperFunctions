function convertDate(date) {
    // Get day, month, and year components
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    // Format the date as "dd-mm-yyyy"
    return `${day}-${month}-${year}`;
}

// Example usage:
function getValue(){
    let inputDate = new Date('2024-04-30'); // Replace with your actual input date
    let returnDate = inputDate ? convertDate(new Date(inputDate)) : null;

    return returnDate;
}

getValue();
