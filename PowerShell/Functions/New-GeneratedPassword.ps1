function New-GeneratedPassword {
    <#
    .SYNOPSIS
        This will generate a simple random password like "f6Tk9aqatc$x" and optionally include numbers and/or special characters
    #>
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $false)]
        $MinimumLength = 12,
    
        [Parameter(Mandatory = $false)]
        $MaximumLength = 16,
    
        [Parameter(Mandatory = $false)]
        $MinimumUpperCaseLetters = 1,
    
        [Parameter(Mandatory = $false)]
        $MaximumUpperCaseLetters = 2,
    
        [Parameter(Mandatory = $false)]
        $MinimumDigits = 2,
    
        [Parameter(Mandatory = $false)]
        $MaximumDigits = 3,
                    
        [Parameter(Mandatory = $false)]
        $MinimumSpecialChars = 1,
    
        [Parameter(Mandatory = $false)]
        $MaximumSpecialChars = 2,
            
        [Parameter(Mandatory = $false)]
        $AllowedLowerCaseLetters = 'abcdefghjkmnpqrstuvwxyz',
    
        [Parameter(Mandatory = $false)]
        $AllowedUpperCaseLetters = 'ABCDEFGHJKMNPQRSTUVWXYZ',
            
        [Parameter(Mandatory = $false)]
        $AllowedDigits = '23456789',
    
        [Parameter(Mandatory = $false)]
        $AllowedSpecialChars = '!#$@*?'
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
    
    # Join all generated password characters into one string
    $passwordCharacters = ($lowerCaseLetters + $upperCaseLetters + $digits + $specialChars).replace(" ", "")

    # Define the first character
    $startingCharacter = "$($lowerCaseLetters.ToCharArray() | Get-Random -Count 1)"

    # Remove the character already in $randomPassword from $passwordCharacters once
    $passwordCharacters = $passwordCharacters.Remove($passwordCharacters.IndexOf($startingCharacter), 1)

    # Scramble password characters
    $characterArray = $passwordCharacters.ToCharArray() | Get-Random -Count ($passwordCharacters.Length)

    # Generate the password
    # Set the starting character
    $randomPassword = $startingCharacter
    # Set the remain characters
    $scrambledStringArray = $characterArray
    $randomPassword += -join $scrambledStringArray

    # Output the final password
    return $randomPassword 
}
    
try {
    $params = @{
        MinimumLength           = 12
        MaximumLength           = 12
        MinimumUpperCaseLetters = 1
        MaximumUpperCaseLetters = 2
        MinimumDigits           = 2
        MaximumDigits           = 3
        MinimumSpecialChars     = 1
        MaximumSpecialChars     = 2
        AllowedUpperCaseLetters = 'ABCDEFGHJKMNPQRSTUVWXYZ'
        AllowedLowerCaseLetters = 'abcdefghjkmnpqrstuvwxyz'
        AllowedDigits           = '23456789'
        AllowedSpecialChars     = '!#$@*?'
    }
    
    $Password = New-GeneratedPassword @params

    $returnObject = @{
        password = $Password
    }
    Write-output $returnObject
    
    Write-information "Successfully generated random password"
}
catch {
    Write-error "Error generating random password. Error: $($_.Exception.Message)"
}
