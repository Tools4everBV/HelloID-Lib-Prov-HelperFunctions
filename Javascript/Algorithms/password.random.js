function generatePassword(){
     
    // Initialize these variables for the algorithm to meet your password complexity rules
    const passwordLength = 8;
    const minUpper = 1;
    const maxUpper = 3;
    const minNumeric = 0;
    const maxNumeric = 2;
    const minSpecial = 1;
    const maxSpecial = 1;
     
     
    // Do not change any code below this line !!!
     
    const numberUpper = Math.floor((Math.random() * maxUpper) + minUpper);
    const numberNumeric = Math.floor((Math.random() * maxNumeric) + minNumeric);
    const numberSpecial = Math.floor((Math.random() * maxSpecial) + minSpecial);
    const numberLower = passwordLength - (numberUpper + numberNumeric + numberSpecial);
                 
    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let numberChars = '0123456789';
    let specialChars = '!#$@*?';
     
    let getRandomValue = function(values) {
        return values.charAt(Math.floor(Math.random() * values.length));
    };
     
    let password = [];
    for(let i = 0; i < numberNumeric; ++i) { password.push(getRandomValue(numberChars)) }
    for(let i = 0; i < numberUpper; ++i) { password.push(getRandomValue(upperChars)) }
    for(let i = 0; i < numberSpecial; ++i) { password.push(getRandomValue(specialChars)) }   
    for(let i = 0; i < numberLower; ++i) { password.push(getRandomValue(lowerChars)) }
         
    function randomizeCharSequence(passwordObject){
        for(let j, x, i = passwordObject.length; i; j = Math.floor(Math.random() * i), x = passwordObject[--i], passwordObject[i] = passwordObject[j], passwordObject[j] = x);
        return passwordObject;
    }
     
    return randomizeCharSequence(password).join('');
}
generatePassword();