function Write-HidStatus{
    [CmdletBinding()]
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
        Hid-Write-Status -Message $Message -Event $Event
    }
}