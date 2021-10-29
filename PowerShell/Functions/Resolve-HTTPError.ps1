# This function resolves an HTTP error for both Windows PowerShell and PowerShell Core.
# On Windows PowerShell there's a bug where, if an API returns an error, you'd expect the error to be in $_.ErrorDetails. Which is empty, and the only thing you get
# back is a generic error. The way to work around this is by getting the 'ResponseStream'. Another thing to take into account is that the types on both PS versions 
# are different; [System.Net.WebException] for Windows PowerShell and [Microsoft.PowerShell.Commands.HttpResponseExeption] on PowerShell Core.
function Resolve-HTTPError {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory,
            ValueFromPipeline
        )]
        [object]$ErrorObject
    )
    process {
        $httpErrorObj = [PSCustomObject]@{
            FullyQualifiedErrorId = $ErrorObject.FullyQualifiedErrorId
            MyCommand             = $ErrorObject.InvocationInfo.MyCommand
            RequestUri            = $ErrorObject.TargetObject.RequestUri
            ScriptStackTrace      = $ErrorObject.ScriptStackTrace
            ErrorMessage          = ''
        }
        if ($ErrorObject.Exception.GetType().FullName -eq 'Microsoft.PowerShell.Commands.HttpResponseException') {
            $httpErrorObj.ErrorMessage = $ErrorObject.ErrorDetails.Message
        } elseif ($ErrorObject.Exception.GetType().FullName -eq 'System.Net.WebException') {
            $httpErrorObj.ErrorMessage = [System.IO.StreamReader]::new($ErrorObject.Exception.Response.GetResponseStream()).ReadToEnd()
        }
        Write-Output $httpErrorObj
    }
}

# Usage in a target connector:
# Best practice is to let al your functions (if any) just generate exceptions. Create a single try/catch block and place the dryRun block inside the try. 
# This way, your errorMessages are as clean as possible. (The same goes for the StackTrace). 
# Note that, in the example below, we don't only write a message for any error of type [HttpResponseException] 
# and [WebException] but also for anything else. 
try{
    if (-not ($dryRun -eq $true)){
        # Create logic here
    }
} catch {
    $ex = $PSItem
    if ( $($ex.Exception.GetType().FullName -eq 'Microsoft.PowerShell.Commands.HttpResponseException') -or $($ex.Exception.GetType().FullName -eq 'System.Net.WebException')) {
        $errorObject = Resolve-HTTPError -Error $ex
        Write-Verbose "Could not create account. Error $($errorObject.ErrorMessage)"
    } else {
        Write-Verbose "Could not create account. Error: $($ex.Exception.Message)"
    }
}

# Usage in a source connector:
# For a source connector, you can copy and paste the same code block and use it in the code where you retrieve the persons/departments.
try {
    # persons / departments logic here
} catch {
    $ex = $PSItem
    if ( $($ex.Exception.GetType().FullName -eq 'Microsoft.PowerShell.Commands.HttpResponseException') -or $($ex.Exception.GetType().FullName -eq 'System.Net.WebException')) {
        $errorObject = Resolve-HTTPError -Error $ex
        Write-Verbose "Could not retrieve... Error $($errorObject.ErrorMessage)"
    } else {
        Write-Verbose "Could not retrieve... Error: $($ex.Exception.Message)"
    }
}
