function getExcluded(){
    const includedDepartments = ["department1","department2"]; // Add all departmentcodes of departments you want to include
    const includedPersons = ["123456","456789"]; // Add all externalID's of persons you want to include
    let returnObject = true;
    if(includedPersons.includes(source.ExternalId)){
        returnObject = false;
    }else{
        source.Contracts.forEach(function(element){
            if(includedDepartments.includes(element.department_code)){ // Edit the contract field used for the departmentcode 
                returnObject = false;
            }
        });
    }
    return returnObject;
};
getExcluded();
