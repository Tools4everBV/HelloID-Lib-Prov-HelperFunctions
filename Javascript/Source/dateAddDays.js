function addDays(date, days) {
    // Create a copy of the input date
    let copy = new Date(date.getTime());

    // Add the specified number of days
    copy.setDate(date.getDate() + days);

    return copy;
}

// Example usage:
let inputDate = new Date('2024-04-30'); // Replace with your actual input date
addDays(inputDate, 1);