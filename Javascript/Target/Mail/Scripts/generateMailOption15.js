// generateMailOption15.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/Scripts/generateMailOption7.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	j.van.den.boele@domain.local
// 	                    BP	j.van.den.boele-de.vries@domain.local
// 	                    P	j.de.vries@domain.local
// 	                    PB  j.de.vries-van.den.boele@domain.local
// If in use	        B	h.c.van.den.boele@domain.local
// 	                    BP	h.c.van.den.boele-de.vries@domain.local
// 	                    P	h.c.de.vries@domain.local
// 	                    PB  h.c.de.vries-van.den.boele@domain.local
// If also in use   	B	janine.van.den.boele@domain.local
// 	                    BP	janine.van.den.boele-de.vries@domain.local
// 	                    P	janine.de.vries@domain.local
// 	                    PB  janine.de.vries-van.den.boele@domain.local
// If also in use   	B	j.van.den.boele1@domain.local
// 	                    BP	j.van.den.boele-de.vries1@domain.local
// 	                    P	j.de.vries1@domain.local
// 	                    PB  j.de.vries-van.den.boele1@domain.local
// etc.

function generateMail() {
    const domain = 'domain.local';

    let initials = Person.Name.Initials;
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let mailNickName = '';

    let initialsWithoutDots = (initials || '').replace(/[^a-zA-Z]/g, '').toLowerCase();
    let firstLetterNickName = nickName.substring(0, 1).toLowerCase();
    let suffix = '';

    if (initialsWithoutDots !== firstLetterNickName && initialsWithoutDots != '') {
        // Build numeric suffix for Iteration >= 3: 1,2,3... (variation with initials)
        if (Iteration >= 3) {
            suffix = (Iteration - 2).toString();
        }

        // Build the "given name" prefix based on iteration (first letter nickname != initials (without dots))
        switch (Iteration) {
            case 0:
                // Iteration 0: first letter of first name
                mailNickName = nickName.substring(0, 1) + '.';
                break;

            case 1:
                // Iteration 1: initials with dots (letters only)
                mailNickName = initials
                    .replace(/[^a-zA-Z]/g, '') // keep letters only
                    .split('')
                    .join('.') + '.';
                break;

            case 2:
                // Iteration 2: full first name
                mailNickName = nickName + '.';
                break;

            default:
                // Iteration >= 3: fallback to first letter of first name
                mailNickName = nickName.substring(0, 1) + '.';
                break;
        }
    } else {
        // Build numeric suffix for Iteration >= 3: 1,2... (variation without initials)
        if (Iteration >= 2) {
            suffix = (Iteration - 1).toString();
        }

        // Build the "given name" prefix based on iteration (first letter nickname = initials (without dots))
        switch (Iteration) {
            case 0:
                // Iteration 0: first letter of first name
                mailNickName = nickName.substring(0, 1) + '.';
                break;

            case 1:
                // Iteration 2: full first name
                mailNickName = nickName + '.';
                break;

            default:
                // Iteration >= 3: fallback to first letter of first name
                mailNickName = nickName.substring(0, 1) + '.';
                break;
        }
    }

    // Append birth/partner name parts based on convention
    switch (convention) {
        case "BP":
            if (typeof middleName !== 'undefined' && middleName) {
                mailNickName = mailNickName + middleName.replace(/ /g, '.') + '.';
            }
            mailNickName = mailNickName + lastName;

            mailNickName = mailNickName + '-';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) {
                mailNickName = mailNickName + ' ' + middleNamePartner.replace(/ /g, '.') + '.';
            }
            mailNickName = mailNickName + lastNamePartner;
            break;

        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) {
                mailNickName = mailNickName + ' ' + middleNamePartner.replace(/ /g, '.') + '.';
            }
            mailNickName = mailNickName + lastNamePartner;

            mailNickName = mailNickName + '-';
            if (typeof middleName !== 'undefined' && middleName) {
                mailNickName = mailNickName + middleName.replace(/ /g, '.') + '.';
            }
            mailNickName = mailNickName + lastName;
            break;

        case "P":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) {
                mailNickName = mailNickName + middleNamePartner.replace(/ /g, '.') + '.';
            }
            mailNickName = mailNickName + lastNamePartner;
            break;

        case "B":
        default:
            if (typeof middleName !== 'undefined' && middleName) {
                mailNickName = mailNickName + middleName.replace(/ /g, '.') + '.';
            }
            mailNickName = mailNickName + lastName;
            break;
    }

    // Remove whitespace at start/end
    mailNickName = mailNickName.trim();

    // Lowercase
    mailNickName = mailNickName.toLowerCase();

    // Remove diacritical characters (e.g. é -> e)
    mailNickName = deleteDiacriticalMarks(mailNickName);

    // Convert spaces to dots so multi-part names remain readable
    mailNickName = mailNickName.replace(/\s+/g, '.');

    // Remove characters outside the allowed set
    mailNickName = mailNickName.replace(/[^0-9a-zA-Z.\-_]/g, '');

    // Normalize dots: no "..", no leading/trailing "."
    mailNickName = mailNickName
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '');

    // Truncate local-part so suffix + "@domain" still fits within limits
    const maxAttributeLength = (256 - suffix.length - domain.length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Append suffix (if any) and domain
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateMail();
