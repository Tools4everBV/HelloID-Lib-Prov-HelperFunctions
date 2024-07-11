<#
.SYNOPSIS
    Example function of a custom Invoke-<ConnectorName>RestMethod.
.DESCRIPTION
    Example function of a custom Invoke-<ConnectorName>RestMethod for use in Custom PowerShell connectors.
.EXAMPLE
    This example function can be populated with web request information.
    You can add default headers, or if you need to retrieve large amounts of data, you can add Skip/Take logic.

.OUTPUTS
    The function returns the web request response.

.NOTES

#>

function Invoke-ConnectorNameRestMethod {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [ValidateNotNullOrEmpty()]
        [string]
        $Method,

        [Parameter(Mandatory)]
        [ValidateNotNullOrEmpty()]
        [string]
        $Uri,

        [object]
        $Body,

        [string]
        $ContentType = 'application/json',

        [Parameter(Mandatory)]
        [System.Collections.IDictionary]
        $Headers
    )

    process {
        try {
            $splatParams = @{
                Uri         = $Uri
                Headers     = $Headers
                Method      = $Method
                ContentType = $ContentType
            }

            if ($Body) {
                $splatParams['Body'] = $Body
            }
            Invoke-RestMethod @splatParams -Verbose:$false
        } catch {
            $PSCmdlet.ThrowTerminatingError($_)
        }
    }
}