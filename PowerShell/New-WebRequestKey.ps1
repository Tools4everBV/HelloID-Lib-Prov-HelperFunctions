function New-WebRequestKey{
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [String]
        $ApiKey,
 
        [Parameter(Mandatory=$true)]
        [String]
        $ApiSecret,
 
        [Parameter(Mandatory=$true)]
        [Ref]
        $Response
    )
    try{
        Write-HidStatus -Message "Creating HelloID API key" -Event Information
        $Response.Value = $null
        $pair = "${ApiKey}:${ApiSecret}"
        $bytes = [System.Text.Encoding]::ASCII.GetBytes($pair)
        $base64 = [System.Convert]::ToBase64String($bytes)
        $key = "Basic $base64"
        $Response.Value = $key
        Write-HidStatus -Message "Successfully created HelloID API key" -Event Success
    }catch{
        throw "Could not create HelloID API key, errorcode: '0x$('{0:X8}' -f $_.Exception.HResult)', message: $($_.Exception.Message)"
    }
}