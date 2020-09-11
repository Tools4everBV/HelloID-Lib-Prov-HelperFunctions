
function Write-HidSummary{
    [cmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        $Message,
 
        [Parameter(Mandatory=$true)]
        [String]
        $Event
    )
    if([String]::IsNullOrEmpty($portalBaseUrl) -eq $true){
        Write-Output ($Message)
    }else{
        Hid-Write-Summary -Message $Message -Event $Event
    }
}