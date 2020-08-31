function Get-ComplexRandomPassword{
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        $Length,
        [Parameter(Mandatory=$true)]
        $NonAlphaChars
    )
    
    $password = [System.Web.Security.Membership]::GeneratePassword($Length, $NonAlphaChars);
    
    return $password;
}

Get-ComplexRandomPassword -Length 16 -NonAlphaChars 5