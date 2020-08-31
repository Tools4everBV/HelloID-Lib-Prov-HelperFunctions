function generateSamAccountName() {
    const suffix = Iteration === 0 ? '' : Iteration;
    let maxAttributeLength = 20 - suffix.toString().length;
     
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
 
    let sAMAccountName = firstName + '.';
    //Check if the middleName variable contains data
    if (typeof middleName !== 'undefined' && middleName) { sAMAccountName = sAMAccountName + middleName.replace(/\s+/g, '.') + '.' }
    sAMAccountName = sAMAccountName + lastName;
 
    //Remove tailing ...
    sAMAccountName = sAMAccountName.replace(/\.+$/, "");
 
    //Remove leading ...
    sAMAccountName = sAMAccountName.replace(/^\.+/, "");
 
    //Convert to lower case
    sAMAccountName = sAMAccountName.toLowerCase();
 
    //Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName);
     
    //Remove specific chars   
    sAMAccountName = sAMAccountName.replace(/[^0-9a-zA-Z.]/g, '');
 
    //Shorten string to maxAttributeLength minus iteration length
    sAMAccountName = sAMAccountName.trim().substring(0, maxAttributeLength) + suffix;
 
    return sAMAccountName;
}
 
generateSamAccountName();