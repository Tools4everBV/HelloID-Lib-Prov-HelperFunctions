function New-GeneratedPassPhrase {
    <#
    .SYNOPSIS
        This will generate a simple random passphrase like "correct horse battery staple" and optionally include numbers and/or special characters after each word
    #>
    [CmdletBinding(
        SupportsShouldProcess,
        ConfirmImpact = 'Medium'
    )]
    param(
        [Parameter(Mandatory = $false)]
        [ValidateRange(2, 20)]
        [int]$WordCount = 3,
     
        [Parameter(Mandatory = $false)]
        [switch]$RemoveSpaces,
     
        [Parameter(Mandatory = $false)]
        [switch]$RemoveNumbersAndSpecialCharacters,
     
     
        [Parameter(Mandatory = $false)]
        [string]$WordListFilePath = 'https://raw.githubusercontent.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/master/WordList/wordlist.eng.txt'
    )
     
     
    BEGIN {
        $SpecialCharacters = @((33, 35) + (36..38) + (40..46) + (60..62) + (64))
        $Numbers = @(48..57)
    }
     
    PROCESS {
        try {   
            #Grab a wordlist online
            $Site = Invoke-WebRequest -Uri $WordListFilePath
            $FullList = $Site.Content.Trim().split("`n")
                     
            [System.Collections.ArrayList]$3LtrWord = @()
            [System.Collections.ArrayList]$4LtrWord = @()
            [System.Collections.ArrayList]$5LtrWord = @()
            [System.Collections.ArrayList]$6LtrWord = @()
            [System.Collections.ArrayList]$7LtrWord = @()
            [System.Collections.ArrayList]$8LtrWord = @()
            [System.Collections.ArrayList]$9LtrWord = @()
     
            #Separating words into different arrays.
            foreach ($Word in $FullList) {
                switch ($word.Length) {
                    3 { $3LtrWord.Add($Word) | Out-Null }
                    4 { $4LtrWord.Add($Word) | Out-Null }
                    5 { $5LtrWord.Add($Word) | Out-Null }
                    6 { $6LtrWord.Add($Word) | Out-Null }
                    7 { $7LtrWord.Add($Word) | Out-Null }
                    8 { $8LtrWord.Add($Word) | Out-Null }
                    9 { $9LtrWord.Add($Word) | Out-Null }
                }
            }
     
            #Minimum 14 character password if we remove spaces and special characters
            if ($WordCount -le 3) {
                $WordList = $7LtrWord + $8LtrWord + $9LtrWord
            }
     
            if ($WordCount -eq 4) {
                $WordList = $4LtrWord + $5LtrWord + $6LtrWord + $7LtrWord
            }
     
            if ($WordCount -eq 5) {
                $WordList = $4LtrWord + $5LtrWord + $6LtrWord
            }
                 
            if ($WordCount -ge 6) {
                $WordList = $3LtrWord + $4LtrWord + $5LtrWord
            }
     
            $Password = 1..$WordCount | ForEach-Object {
                # if ($_ -eq $WordCount -or $PSBoundParameters.ContainsKey('RemoveNumbersAndSpecialCharacters')) {
                if ($_ -eq $WordCount -or $RemoveNumbersAndSpecialCharacters -eq $true) {
                    $WordList | Get-Random -Count 1
                }
                else {
                        ($WordList | Get-Random -Count 1) + 
                        ([char]($SpecialCharacters + $Numbers | Get-Random -Count 1))
                }
            }
     
            # if ($PSBoundParameters.ContainsKey('RemoveSpaces')) {
            if($RemoveSpaces -eq $true) {
                    ($Password -as [string]).Replace(' ', '')
            }
            else {
                $Password -as [string]
            }
     
        }
        catch {
            Write-Error $_.Exception.Message
        }
    }
    END {
    }
}
    
    
try {
    # Provide a web location for a wordlist - We have 2 template wordlists that can be used:
    # For English words: https://raw.githubusercontent.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/master/WordList/wordlist.eng.txt
    # For Dutch words: https://raw.githubusercontent.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/master/WordList/wordlist.nl.txt
    $Password = New-GeneratedPassPhrase -WordCount 2 -RemoveNumbersAndSpecialCharacters:$true -RemoveSpaces:$false -WordListFilePath 'https://raw.githubusercontent.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/master/WordList/wordlist.eng.txt'

    $returnObject = @{
        password = $Password
    }
    Write-output $returnObject
    
    Write-information "Successfully generated random password"
}
catch {
    Write-error "Error generating random password. Error: $($_.Exception.Message)"
}