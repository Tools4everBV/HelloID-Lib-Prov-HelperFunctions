function addDays(date, days) {
    // Create a copy of the input date
    let copy = new Date(date.getTime());

    // Add the specified number of days
    copy.setDate(date.getDate() + days);

    return copy;
}

function getEndDate(endDate) {
    let newDate = null;

    if (endDate) {
        // If an end date is provided, calculate the new date by adding 1 day
        const date = new Date(endDate);
        newDate = addDays(date, 1);
    } else {
        // If no end date is provided, set the new date to December 31, 2099
        newDate = new Date('2099-12-31');
    }

    return newDate;
}

// Example usage:
getEndDate(sourceContract.EndDate);