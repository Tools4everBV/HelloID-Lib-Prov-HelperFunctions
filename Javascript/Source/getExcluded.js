function getExcluded(){
    let includedDepartments = ["department1","department2"]; // Add all departmentcodes you want to include
    let returnObject = "";
    source.Contracts.forEach(function(element){
        if(includedDepartments.includes(element.department_code)){ // Edit the contract field used for the departmentcode 
            returnObject = "Included";
        }
    });
    if(returnObject == "Included"){
        return true;
    }else{
        return false;
    }
};
getExcluded();