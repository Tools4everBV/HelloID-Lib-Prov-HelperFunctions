function formatInitials() {
 
    let initials;
     
    if((!Person.Name.Initials === "") || (Person.Name.Initials != null))
    {
        initials = Person.Name.Initials.replace(/([.])/g, '').substring(0, 3);
         
        // Insert (.) after each char
        initials = initials.replace(/(.{1})/g,"$1.");
    }
     
    return initials;
}
 
formatInitials();