<#
.SYNOPSIS
    Create HelloID Audit Message
.DESCRIPTION
   Create HelloID Audit Message (PSCustomObject)
.EXAMPLE
    PS C:\> New-AuditLogMessage  "ErrorMEssage $($_.Exception.Message)" -Action "Createaccount" -IsError
 .EXAMPLE
    PS C:\> New-AuditLogMessage  "Successfully Created!"
.EXAMPLE
    PS C:\> New-AuditLogMessage  "Failed to Create!" -IsError
#>
function New-AuditLogMessage {
    param (
        [parameter(Mandatory,
            Position = 0)]
        [string]  # The Audit Message
        $Message,

        [switch]
        $IsError,

        [string] # Note, these enum values might be changing in the future.
        [ValidateSet(
            "CreateAccount", "EnableAccount",
            "UpdateAccount", "DisableAccount",
            "MoveAccount", "DeleteAccount",
            "GrantMembership", "RevokeMembership",
            "CreateMailbox", "GrantDynamicPermission",
            "UpdateDynamicPermission", "RevokeDynamicPermission")]
        $Action
    )
    $returnValue = @{
        Message = $message
        IsError = $IsError;
    }
    if (-not [string]::IsNullOrEmpty( $Action)) {
        $returnValue += @{
            action = $Action
        }
    }
    Write-Output ([PSCustomObject]$returnValue)
}


#New-AuditLogMessage  "ErrorMEssage $($_.Exception.Message)" -Action "Createaccount" -IsError


