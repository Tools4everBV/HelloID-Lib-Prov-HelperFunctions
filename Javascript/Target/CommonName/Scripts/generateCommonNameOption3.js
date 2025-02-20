// Template: generateCommonNameOption3.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/CommonName/Scripts/generateCommonNameOption3.js]
// Note: there are no commas used
// Mapping logic to generate the CommonName according to the following convention.
// First choice	        B	Boele H.C. van den (Janine)
// 	                    BP	Boele–de Vries H.C. van den (Janine)
// 	                    P	Vries H.C. de (Janine)
// 	                    PB  Vries–van den Boele H.C. de (Janine)
// If in use	        B	Boele H.C. van den (Janine) 2
// 	                    BP	Boele–de Vries H.C. van den (Janine) 2
// 	                    P	Vries H.C. de (Janine) 2
// 	                    PB  Vries–van den Boele H.C. de (Janine) 2
// If also in use   	B	Boele H.C. van den (Janine) 3
// 	                    BP	Boele–de Vries H.C. van den (Janine) 3
// 	                    P	Vries H.C. de (Janine) 3
// 	                    PB  Vries–van den Boele H.C. de (Janine) 3
// etc.
function generateCommonName() {
    let initials = Person.Name.Initials;
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let commonName = '';
    switch (convention) {
        case "BP":
            commonName = commonName + lastName;

            commonName = commonName + '-';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + middleNamePartner + ' ' }
            commonName = commonName + lastNamePartner;

            commonName = commonName + ' ';
            commonName = commonName + initials;
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + ' ' + middleName }

            commonName = commonName + ' (' + nickName + ')';

            break;
        case "PB":
            commonName = commonName + lastNamePartner;

            commonName = commonName + '-';
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + middleName + ' ' }
            commonName = commonName + lastName;

            commonName = commonName + ' ';
            commonName = commonName + initials;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + ' ' + middleNamePartner }

            commonName = commonName + ' (' + nickName + ')';

            break;
        case "P":
            commonName = commonName + lastNamePartner;

            commonName = commonName + ' ';
            commonName = commonName + initials;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + ' ' + middleNamePartner }

            commonName = commonName + ' (' + nickName + ')';

            break;
        case "B":
        default:
            commonName = commonName + lastName;

            commonName = commonName + ' ';
            commonName = commonName + initials;
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + ' ' + middleName }

            commonName = commonName + ' (' + nickName + ')';

            break;
    }
    // Trim spaces at start and end
    commonName = commonName.trim();

    // Shorten string to maxAttributeLength minus iteration length
    let suffix = ''
    let iterationToUse = Iteration + 1
    if (iterationToUse.toString().length <= 1) {
        suffix = Iteration === 0 ? '' : (' ' + iterationToUse);
    }
    else {
        suffix = Iteration === 0 ? '' : (' ' + iterationToUse);
    }
    const maxAttributeLength = (64 - suffix.toString().length);
    commonName = commonName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    commonName = commonName + suffix;

    return commonName;
}

generateCommonName();