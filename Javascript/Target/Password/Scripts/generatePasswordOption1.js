// generatePasswordOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Password/Scripts/generatePasswordOption1.js]
//
// Helper function to shuffle an array
function randomizeCharSequence(passwordObject) {
    for (let j, x, i = passwordObject.length; i; j = Math.floor(Math.random() * i), x = passwordObject[--i], passwordObject[i] = passwordObject[j], passwordObject[j] = x);
    return passwordObject;
}

function generatePassword() {
    // Initialize these variables for the algorithm to meet your password complexity rules
    const passwordLength = 8;
    const minUpper = 1;
    const maxUpper = 3;
    const minNumeric = 0;
    const maxNumeric = 2;
    const minSpecial = 1;
    const maxSpecial = 1;

    // Character sets
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!#$@*?';

    // Do not change any code below this line !!!

    // Helper function to get a random character from a set
    const getRandomValue = (values) => values.charAt(Math.floor(Math.random() * values.length));

    // Generate individual character groups
    const numberUpper = Math.floor(Math.random() * (maxUpper - minUpper + 1)) + minUpper;
    const numberNumeric = Math.floor(Math.random() * (maxNumeric - minNumeric + 1)) + minNumeric;
    const numberSpecial = Math.floor(Math.random() * (maxSpecial - minSpecial + 1)) + minSpecial;
    const numberLower = passwordLength - (numberUpper + numberNumeric + numberSpecial);

    const numericGroup = Array.from({ length: numberNumeric }, () => getRandomValue(numberChars));
    const upperGroup = Array.from({ length: numberUpper }, () => getRandomValue(upperChars));
    const specialGroup = Array.from({ length: numberSpecial }, () => getRandomValue(specialChars));
    const lowerGroup = Array.from({ length: numberLower }, () => getRandomValue(lowerChars));

    // Combine all groups and shuffle the order
    const password = randomizeCharSequence([...numericGroup, ...upperGroup, ...specialGroup, ...lowerGroup]);

    return password.join('');
}

generatePassword();