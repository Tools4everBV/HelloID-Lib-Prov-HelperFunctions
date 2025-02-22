###############################################################
# HelloID-Conn-Prov-Target-{connectorName]-EntitlementImport-Account
# PowerShell V2
###############################################################

# Enable TLS1.2
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12

#region functions
#endregion

try {
    Write-Information 'Starting target account import'
    $splatGetAllAccountParams = @{
        Uri     = ''
        Method  = 'GET'
    }
    $existingAccounts = Invoke-RestMethod @splatGetAllAccountParams

    foreach ($account in $existingAccounts){
        Write-Output @{
            AccountReference = @{
                Identification = $account.id
            }
            # DisplayName is only visible within the account import report
            DisplayName = $account.firstName + $account.lastName
            UserName    = $account.email
            Enabled     = $account.active

            # Make sure the account data is filtered to match the $actionContext.Data
            Data        = $account
        }
    }
    Write-Information 'Target account import completed'
} catch {
    Write-Verbose "Error at Line '$($_.InvocationInfo.ScriptLineNumber)': $($_.InvocationInfo.Line). Error: $($_.Exception.Message). Details: $($_.ErrorDetails)"
}
