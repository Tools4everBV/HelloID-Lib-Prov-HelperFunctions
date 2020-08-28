function formatInitials() {
 
    let initials;
     
    if((!Person.Name.Initials === "") || (Person.Name.Initials != null))
    {
        initials = Person.Name.Initials.replace(/([.])/g, '').substring(0, 6);
    }
     
    return initials;
}
 
formatInitials();