function formatInitials() {
 
    let initials;
     
    if(Person.Name.Initials && Person.Name.Initials !== "")
    {
        return Person.Name.Initials
            .replace(/([.])/g, '')
            .substring(0, 6);
    }
     
    return initials;
}
 
formatInitials();
