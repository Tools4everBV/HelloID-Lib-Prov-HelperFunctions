function generatePassword(){
     
    // Initialize these variables for the algorithm to meet your password complexity rules
    let passwordLength = 8;
    let minUpper = 1;
    let maxUpper = 3;
    let minNumeric = 0;
    let maxNumeric = 2;
    let minSpecial = 1;
    let maxSpecial = 1;
     
     
    // Do not change any code below this line !!!
     
    let numberUpper = Math.floor((Math.random() * maxUpper) + minUpper);
    let numberNumeric = Math.floor((Math.random() * maxNumeric) + minNumeric);
    let numberSpecial = Math.floor((Math.random() * maxSpecial) + minSpecial);
    let numberLower = passwordLength - (numberUpper + numberNumeric + numberSpecial);
                 
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