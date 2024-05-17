function addDays(date, days) {
    // Create a copy of the input date
    let copy = new Date(date.getTime());

    // Add the specified number of days
    copy.setDate(date.getDate() + days);

    return copy;
}

// Example usage:
function getValue(){
    let inputDate = new Date('2024-04-30'); // Replace with your actual input date
    let returnDate = addDays(inputDate, 1);

    return returnDate;
}

getValue();
