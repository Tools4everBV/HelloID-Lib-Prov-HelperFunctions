// Note: InCondition is always false in Preview
function getInConditionFunctions() {
    let functions = '';
    let c = Array.from(Person.Contracts);
    for (let i = 0; i < c.length; i++) {
        if (c[i].Context.InConditions) {
            functions = functions + c[i].Title.Name;
        }
    }
    return functions;
}
getInConditionFunctions();