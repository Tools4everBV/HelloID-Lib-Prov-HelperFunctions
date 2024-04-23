// formatInitialsOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Initials/Scripts/formatInitialsOption2.js]
//
function formatInitials(initials) {
    let formattedInitials = ''

    if (initials && initials !== "") {
        // Remove dots and keep the first 6 characters
        formattedInitials = initials.replace(/\./g, '').substring(0, 6);
    }

    return formattedInitials;
}

formatInitials(Person.Name.Initials);