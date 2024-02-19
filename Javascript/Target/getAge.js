// This function will return the current age of the user
function getAge() {
    let age = '';

    if (Person.Details.BirthDate !== 'undefined' && Person.Details.BirthDate) {
        const currentDate = new Date();
        const ageDiff = currentDate - Person.Details.BirthDate;
        const ageDate = new Date(ageDiff);
        
        age = Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return age;
}

getAge();