function Get-ActiveRecords {
    <#
        .SYNOPSIS
            Filters a generic list of records based on date logic
        .DESCRIPTION
            Filters a generic list of records based on date logic
        .EXAMPLE
            PS C:\> Get-ActiveRecords -AttributeStartDate "startdatefield" -AttributeEndDate "enddatefield" -ActivePreInDays 30 -ActivePostInDays 30 ([ref]$managers)
        .INPUTS
            AttributeStartDate
            AttributeEndDate
            ActivePreInDays
            ActivePostInDays
            Records
        .OUTPUTS
            Records
        .NOTES
            See github?
    #>
    param(
        [parameter(Mandatory = $true)][String]$AttributeStartDate,
        [parameter(Mandatory = $true)][String]$AttributeEndDate,
        [parameter(Mandatory = $true)][Int]$ActivePreInDays,
        [parameter(Mandatory = $true)][Int]$ActivePostInDays,
        [parameter(Mandatory = $true)][ref]$Records
    )
    $now = (Get-Date).Date
    $Records.value = $Records.value | Where-Object { ([DateTime]$_.$AttributeStartDate).addDays(-$ActivePreInDays) -le $now -and ([string]::IsNullOrEmpty($_.$AttributeEndDate) -or ([DateTime]$_.$AttributeEndDate).addDays($ActivePostInDays) -gt $now) }
}