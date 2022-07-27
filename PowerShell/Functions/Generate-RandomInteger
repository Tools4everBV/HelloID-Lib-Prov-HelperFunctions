function generateRandomInteger {
    param(
        [parameter(Mandatory = $true)]
        $Min,

        [parameter(Mandatory = $true)]
        $Max,

        [parameter(Mandatory = $false)]
        $AmountOfChars,

        [parameter(Mandatory = $false)]
        $PrefixWhenAmountOfCharsNotReached
    )
    # Define range of allowed numbers
    $inputRange = $min..$max

    # Returns a random integer between defined range
    $randomInt = Get-Random -InputObject $inputRange
    
    if ($amountOfChars -and $prefixWhenAmountOfCharsNotReached) {
        # Make sure random integer is specified amount of characters long, if not, prefix with specified prefix
        $randomInt = ([string]$randomInt).PadLeft($amountOfChars, "$prefixWhenAmountOfCharsNotReached")
    }

    return $randomInt
}

generateRandomInteger -Min 4 -Max 36 -AmountOfChars 4 -PrefixWhenAmountOfCharsNotReached '0'