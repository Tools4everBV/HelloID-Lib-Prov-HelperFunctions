function Convert-StringToBoolean {
    param(
        [parameter(Mandatory = $true)]$String
    )
    try {
        if(-not[String]::IsNullOrEmpty($String)){
            $boolean = [System.Convert]::ToBoolean($String)
            return $boolean
        }else{
            Write-Verbose "Provided value equals null or empty. Cannot convert to Boolean"
        }
    } catch {
        throw $_
    }
}

$boolean = Convert-StringToBoolean $string