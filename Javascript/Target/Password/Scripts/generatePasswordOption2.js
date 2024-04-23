// generatePasswordOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Password/Scripts/generatePasswordOption2.js]
//
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

    // Format the date as "yyyyMMdd"
    return `${year}${month}${day}`;
}

function generatePassword() {
    let inputDate = Person.Details.BirthDate;

    let password = inputDate ? convertDate(new Date(inputDate)) : null;

    return password;
}

generatePassword();