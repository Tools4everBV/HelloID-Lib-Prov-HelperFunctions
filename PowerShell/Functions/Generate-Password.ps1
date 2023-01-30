function Generate-Password {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $false)]
        $MinimumLength = 8,

        [Parameter(Mandatory = $false)]
        $MaximumLength = 16,

        [Parameter(Mandatory = $false)]
        $MinimumUpperCaseLetters = 1,

        [Parameter(Mandatory = $false)]
        $MaximumUpperCaseLetters = 2,

        [Parameter(Mandatory = $false)]
        $MinimumDigits,

        [Parameter(Mandatory = $false)]
        $MaximumDigits,
                
        [Parameter(Mandatory = $false)]
        $MinimumSpecialChars,

        [Parameter(Mandatory = $false)]
        $MaximumSpecialChars,
        
        [Parameter(Mandatory = $false)]
        $AllowedLowerCaseLetters = "abcdefghiklmnoprstuvwxyz",

        [Parameter(Mandatory = $false)]
        $AllowedUpperCaseLetters = "ABCDEFGHKLMNOPRSTUVWXYZ",
        
        [Parameter(Mandatory = $false)]
        $AllowedDigits = "1234567890",

        [Parameter(Mandatory = $false)]
        $AllowedSpecialChars = "@#$%^&*-_!+=:?/();"
    )
    $lowerCaseLetters = $null
    $upperCaseLetters = $null
    $digits = $null
    $specialChars = $null

    # Total length of random password
    if ($MinimumLength -ne $MaximumLength) {
        $totalLength = Get-Random -Minimum $MinimumLength -Maximum $MaximumLength
    }
    else {
        $totalLength = $MaximumLength
    }

    <#--------- Upper case letters ---------#>
    # Total length of allowed upper case letters
    if ($MinimumUpperCaseLetters -and $MaximumUpperCaseLetters) {
        $amountOfUpperCaseLetters = Get-Random -Minimum $MinimumUpperCaseLetters -Maximum $MaximumUpperCaseLetters
    }
    elseif ($MinimumUpperCaseLetters -and !$MaximumUpperCaseLetters) {
        $amountOfUpperCaseLetters = Get-Random -Minimum $MinimumUpperCaseLetters -maximum ($MinimumUpperCaseLetters + 1)
    }
    elseif (!$MinimumUpperCaseLetters -and $MaximumUpperCaseLetters) {
        $amountOfUpperCaseLetters = Get-Random -Minimum ($MaximumUpperCaseLetters - 1) -Maximum $MaximumUpperCaseLetters
    }
    else {
        $amountOfUpperCaseLetters = 0
    }

    # Get random upper case letters
    if ($amountOfUpperCaseLetters -gt 0) {
        $random = 1..$amountOfUpperCaseLetters | ForEach-Object { Get-Random -Maximum $AllowedUpperCaseLetters.Length }
        $upperCaseLetters = ([String]$AllowedUpperCaseLetters[$random]).replace(" ", "")
    }

    <#--------- Digits ---------#>
    # Total length of allowed digits
    if ($MinimumDigits -and $MaximumDigits) {
        $amountOfDigits = Get-Random -Minimum $MinimumDigits -Maximum $MaximumDigits
    }
    elseif ($MinimumDigits -and !$MaximumDigits) {
        $amountOfDigits = Get-Random -Minimum $MinimumDigits -maximum ($MinimumDigits + 1)
    }
    elseif (!$MinimumDigits -and $MaximumDigits) {
        $amountOfDigits = Get-Random -Minimum ($MaximumDigits - 1) -Maximum $MaximumDigits
    }
    else {
        $amountOfDigits = 0
    }

    # Get random digits
    if ($amountOfDigits -gt 0) {
        $random = 1..$amountOfDigits | ForEach-Object { Get-Random -Maximum $AllowedDigits.Length }
        $digits = ([String]$AllowedDigits[$random]).replace(" ", "")
    }


    <#--------- Special Characters ---------#>
    # Total length of allowed special characters
    if ($MinimumSpecialChars -and $MaximumSpecialChars) {
        $amountOfSpecialChars = Get-Random -Minimum $MinimumSpecialChars -Maximum $MaximumSpecialChars
    }
    elseif ($MinimumSpecialChars -and !$MaximumSpecialChars) {
        $amountOfSpecialChars = Get-Random -Minimum $MinimumSpecialChars -maximum ($MinimumSpecialChars + 1)
    }
    elseif (!$MinimumSpecialChars -and $MaximumSpecialChars) {
        $amountOfSpecialChars = Get-Random -Minimum ($MaximumSpecialChars - 1) -Maximum $MaximumSpecialChars
    }
    else {
        $amountOfSpecialChars = 0
    }

    # Get random special chars
    if ($amountOfSpecialChars -gt 0) {
        $random = 1..$amountOfSpecialChars | ForEach-Object { Get-Random -Maximum $AllowedSpecialChars.Length }
        $specialChars = ([String]$AllowedSpecialChars[$random]).replace(" ", "")
    }

    <#--------- Lower case letters ---------#>
    # Get random lower case letters
    $amountOfLowerCaseLetters = ($totalLength - $amountOfUpperCaseLetters - $amountOfDigits - $amountOfSpecialChars)
    $random = 1..$amountOfLowerCaseLetters | ForEach-Object { Get-Random -Maximum $AllowedLowerCaseLetters.Length }
    $lowerCaseLetters = ([String]$AllowedLowerCaseLetters[$random]).replace(" ", "")

    # Join all generated password charactesr to one string
    $passwordCharacters = ($lowerCaseLetters + $upperCaseLetters + $digits + $specialChars).replace(" ", "")

    # Scramble password characters
    $characterArray = $passwordCharacters.ToCharArray()   
    $scrambledStringArray = $characterArray | Get-Random -Count ($characterArray.Length)
    $randomPassword = -join $scrambledStringArray
    return $randomPassword
}

Generate-Password -MinimumLength 8 -MaximumLength 8 -MinimumDigits 1