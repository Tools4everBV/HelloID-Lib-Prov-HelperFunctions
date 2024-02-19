function formatInitials() {
 
    let initials;
     
    if(Person.Name.Initials && Person.Name.Initials !== "")
    {
        return Person.Name.Initials
            // Remove all dots
            .replace(/([.])/g, '')
            // Take the first six characters
            .substring(0, 6);
    }
     
    return initials;
}
 
formatInitials();
