function generateFirstLetters(myString) {
	
	let firstLettersString = myString;
	
    if (typeof firstLettersString !== 'undefined' && firstLettersString) { firstLettersString = firstLettersString.match(/\b(\w)/g).join('') }
    return firstLettersString;
}

generateFirstLetters(Person.Name.FamilyName)
