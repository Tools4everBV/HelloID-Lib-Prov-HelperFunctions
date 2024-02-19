function roundDecimals(num,amount) {
    return +(Math.round(num + "e+" + amount)  + "e-" + amount);
}

// Usage examples:
// Round to 2 decimals
returnValue = roundDecimals(returnValue,2);

// Round to 0 decimals
returnValue = roundDecimals(returnValue,0);