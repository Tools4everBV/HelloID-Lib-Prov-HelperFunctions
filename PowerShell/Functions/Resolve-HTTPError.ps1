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
        $HttpErrorObj = @{
            FullyQualifiedErrorId = $ErrorObject.FullyQualifiedErrorId
            InvocationInfo        = $ErrorObject.InvocationInfo.MyCommand
            TargetObject          = $ErrorObject.TargetObject.RequestUri
            StackTrace            = $ErrorObject.ScriptStackTrace
        }
        if ($ErrorObject.Exception.GetType().FullName -eq 'Microsoft.PowerShell.Commands.HttpResponseException') {
            $HttpErrorObj['ErrorMessage'] = $ErrorObject.ErrorDetails.Message
        } elseif ($ErrorObject.Exception.GetType().FullName -eq 'System.Net.WebException') {
            $stream = $ErrorObject.Exception.Response.GetResponseStream()
            $stream.Position = 0
            $streamReader = New-Object System.IO.StreamReader $Stream
            $errorResponse = $StreamReader.ReadToEnd()
            $HttpErrorObj['ErrorMessage'] = $errorResponse
        }
        Write-Output $HttpErrorObj
    }
}

# Usage in a target connector:
# Prefered place to use this function (Resolve-HTTPError) is in the $dryRun and to let your functions (if any) just generate exceptions. This way, your errorMessages are 
# as clean as possible. (The same goes for the StackTrace). Note that, in the example below, we don't only write a message for any error of type [HttpResponseException] 
# and [WebException] but also for anything else. 
if(-not($dryRun -eq $true)){
    try{

    } catch {
        $ex = $PSItem
        if ( $($ex.Exception.GetType().FullName -eq 'Microsoft.PowerShell.Commands.HttpResponseException') -or $($ex.Exception.GetType().FullName -eq 'System.Net.WebException')) {
            $errorObject = Resolve-HTTPError -Error $ex
            Write-Verbose "Could not retrieve... Error $($errorObject.ErrorMessage)"
        } else {
            Write-Verbose "Could not retrieve... Error: $($ex.Exception.Message)"
        }
    }
}

# Usage in a source connector:
# For a source connector, you can copy and paste the same code block and use it in the code where you retrieve the persons/departments.
