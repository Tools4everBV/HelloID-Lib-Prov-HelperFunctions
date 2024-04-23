// formatInitialsOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Initials/Scripts/formatInitialsOption1.js]
//
function formatInitials(initials) {
    let formattedInitials = ''

    if (initials && initials !== "") {
        // Remove dots and keep the first 3 characters
        formattedInitials = initials.replace(/\./g, '').substring(0, 3);

        // Insert a dot after each character
        formattedInitials = formattedInitials.replace(/(.{1})/g, "$1.");
    }

    return formattedInitials;
}

formatInitials(Person.Name.Initials);