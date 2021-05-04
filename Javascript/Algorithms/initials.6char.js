function formatInitials() {
 
    let initials;
     
    if(Person.Name.Initials && Person.Name.Initials !== "")
    {
        return Person.Name.Initials
            // Remove all dots
            .replace(/([.])/g, '')
            // Take the first three characters
            .substring(0, 3);
    }
     
    return initials;
}
 
formatInitials();
