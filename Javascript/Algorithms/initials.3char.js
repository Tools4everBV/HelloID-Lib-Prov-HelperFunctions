function formatInitials() {
 
    let initials;
     
    if(Person.Name.Initials && Person.Name.Initials !== "")
    {
        return Person.Name.Initials
            // Remove all dots
            .replace(/([.])/g, '')
            // Take the first three characters
            .substring(0, 3)
            // Insert (.) after each char
            .replace(/(.{1})/g,"$1.");
    }

    return initials;
}

formatInitials();
