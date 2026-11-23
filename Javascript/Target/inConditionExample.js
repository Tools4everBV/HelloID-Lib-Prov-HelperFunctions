// inConditionExample.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/inConditionExample.js]
//
// Returns the titles of all contracts that are in condition, separated by a comma.
// Note: InCondition is always false in Preview
function getInConditionFunctions() {
    let functions = [];
    let c = Array.from(Person.Contracts);
    for (let i = 0; i < c.length; i++) {
        if (c[i].Context.InConditions) {
            functions.push(c[i].Title.Name);
        }
    }
    return functions.join(', ');
}
getInConditionFunctions();