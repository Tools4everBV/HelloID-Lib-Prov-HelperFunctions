#########################################################
# HelloID-Conn-Prov-Target-{connectorName}-SubPermissions
# PowerShell V2
#########################################################

# Enable TLS1.2
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12

#region functions
function Resolve-{connectorName}Error {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [object]
        $ErrorObject
    )
    process {
        $httpErrorObj = [PSCustomObject]@{
            ScriptLineNumber = $ErrorObject.InvocationInfo.ScriptLineNumber
            Line             = $ErrorObject.InvocationInfo.Line
            ErrorDetails     = $ErrorObject.Exception.Message
            FriendlyMessage  = $ErrorObject.Exception.Message
        }
        if (-not [string]::IsNullOrEmpty($ErrorObject.ErrorDetails.Message)) {
            $httpErrorObj.ErrorDetails = $ErrorObject.ErrorDetails.Message
        } elseif ($ErrorObject.Exception.GetType().FullName -eq 'System.Net.WebException') {
            if ($null -ne $ErrorObject.Exception.Response) {
                $streamReaderResponse = [System.IO.StreamReader]::new($ErrorObject.Exception.Response.GetResponseStream()).ReadToEnd()
                if (-not [string]::IsNullOrEmpty($streamReaderResponse)) {
                    $httpErrorObj.ErrorDetails = $streamReaderResponse
                }
            }
        }
        try {
            $errorDetailsObject = ($httpErrorObj.ErrorDetails | ConvertFrom-Json)
            $httpErrorObj.FriendlyMessage = $httpErrorObj.ErrorDetails
        } catch {
            $httpErrorObj.FriendlyMessage = $httpErrorObj.ErrorDetails
        }
        Write-Output $httpErrorObj
    }
}
#endregion

try {
    # Collect current permissions
    $currentPermissions = @{}
    foreach ($permission in $actionContext.CurrentPermissions) {
        $currentPermissions[$permission.Reference.Id] = $permission.DisplayName
    }

    # Collect desired permissions
    $desiredPermissions = @{}
    if (-Not($actionContext.Operation -eq "revoke")) {
        foreach ($contract in $personContext.Person.Contracts) {
            if ($contract.Context.InConditions) {
                $desiredPermissions[$contract.Department.ExternalId] = $contract.Department.DisplayName
            }
        }
    }

    # Process desired permissions to grant
    foreach ($permission in $desiredPermissions.GetEnumerator()) {
        $outputContext.SubPermissions.Add([PSCustomObject]@{
            DisplayName = $permission.Value
            Reference   = [PSCustomObject]@{
                Id = $permission.Name
            }
        })

        if (-Not $currentPermissions.ContainsKey($permission.Name)) {
            if (-Not($actionContext.DryRun -eq $true)) {
                # Write permission grant logic here
            }

            $outputContext.AuditLogs.Add([PSCustomObject]@{
                Action  = "GrantPermission"
                Message = "Granted access to department share $($permission.Value)"
                IsError = $false
            })
        }
    }

    # Process current permissions to revoke
    $newCurrentPermissions = @{}
    foreach ($permission in $currentPermissions.GetEnumerator()) {
        if (-Not $desiredPermissions.ContainsKey($permission.Name)) {
            if (-Not($actionContext.DryRun -eq $true)) {
                # Write permission revoke logic here
            }

            $outputContext.AuditLogs.Add([PSCustomObject]@{
                Action  = "RevokePermission"
                Message = "Revoked access to department share $($permission.Value)"
                IsError = $false
            })
        } else {
            $newCurrentPermissions[$permission.Name] = $permission.Value
        }
    }

    # Process permissions to update
    if ($actionContext.Operation -eq "update") {
        foreach ($permission in $newCurrentPermissions.GetEnumerator()) {
            if (-Not($actionContext.DryRun -eq $true)) {
                # Write permission update logic here
            }

            $outputContext.AuditLogs.Add([PSCustomObject]@{
                Action  = "UpdatePermission"
                Message = "Updated access to department share $($permission.Value)"
                IsError = $false
            })
        }
    }

    $outputContext.Success = $true
} catch {
    $outputContext.Success = $false
    $ex = $PSItem
    if ($($ex.Exception.GetType().FullName -eq 'Microsoft.PowerShell.Commands.HttpResponseException') -or
        $($ex.Exception.GetType().FullName -eq 'System.Net.WebException')) {
        $errorObj = Resolve-{connectorName}Error -ErrorObject $ex
        $auditMessage = "Could not manage {connectorName} permissions. Error: $($errorObj.FriendlyMessage)"
        Write-Warning "Error at Line '$($errorObj.ScriptLineNumber)': $($errorObj.Line). Error: $($errorObj.ErrorDetails)"
    } else {
        $auditMessage = "Could not manage {connectorName} permissions. Error: $($_.Exception.Message)"
        Write-Warning "Error at Line '$($ex.InvocationInfo.ScriptLineNumber)': $($ex.InvocationInfo.Line). Error: $($ex.Exception.Message)"
    }
    $outputContext.AuditLogs.Add([PSCustomObject]@{
        Message = $auditMessage
        IsError = $true
    })
}
