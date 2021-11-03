//Function to remove special characters for germany based on countrycode
function deleteDiacriticalMarksAdditional (inputString) {
    const map = {'ae':'ä','oe':'ö','ue':'ü','Ae':'Ä','Oe':'Ö','Ue':'Ü','ss':'ß'};
    for (let pattern in map) {
        inputString = inputString.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return inputString;
}

deleteDiacriticalMarksAdditional()