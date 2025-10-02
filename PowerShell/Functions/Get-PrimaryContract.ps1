function Get-PrimaryContract {
    <#
        .SYNOPSIS
            Retrieves the primary contract from an array of contracts based on specified sorting criteria.
        .DESCRIPTION
            This function filters an array of contracts and identifies the primary contract based on sorting properties.
            The primary contract is the currently active contract with the highest priority (as defined by sorting criteria).
        .PARAMETER Contracts
            An array of contract objects to be processed.
        .PARAMETER FTEProperty
            The property name representing the Full-Time Equivalent (FTE) value in each contract.
        .PARAMETER HoursPerWeekProperty
            The property name representing the hours per week value in each contract.
        .PARAMETER PercentageProperty
            The property name representing the percentage value in each contract.
        .PARAMETER SequenceProperty
            The property name representing the sequence or priority value in each contract.
        .PARAMETER EndDateProperty
            The property name representing the end date of each contract.
        .PARAMETER StartDateProperty
            The property name representing the start date of each contract.
        .OUTPUTS
            Returns the primary contract object.
        .EXAMPLE
            PS C:\> Get-PrimaryContract -Contracts $contractArray -FTEProperty "FTE" -HoursPerWeekProperty "HoursPerWeek" -SequenceProperty "Sequence" -EndDateProperty "EndDate" -StartDateProperty "StartDate"
        .NOTES
            The calculation for the primary contract is set to match the calculation in HelloID Provisioning.
            FTE - Descending
            HoursPerWeek - Descending
            Percentage - Descending
            Sequence - Descending
            EndDate - Descending
            StartDate - Ascending
            Feel free to change this to your needs.
    #> 
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [ValidateNotNullOrEmpty()]
        [array]
        $contracts,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [string]
        $FTEProperty,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [string]
        $HoursPerWeekProperty,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [string]
        $SequenceProperty,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [string]
        $PercentageProperty,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [string]
        $EndDateProperty,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [string]
        $StartDateProperty
    )

    process {
        try {
            # Define sorting properties
            $sortingProperties = @(
                @{ Expression = { $_.$FTEProperty -as [int] }; Descending = $true },
                @{ Expression = { $_.$HoursPerWeekProperty -as [int] }; Descending = $true },
                @{ Expression = { $_.$PercentageProperty -as [int] }; Descending = $true },
                @{ Expression = { $_.$SequenceProperty -as [int] }; Descending = $true },
                @{
                    Expression = {
                        if ([string]::IsNullOrEmpty($_.$EndDateProperty)) {
                            [datetime]::MaxValue
                        }
                        else {
                            $_.$EndDateProperty -as [datetime]
                        }
                    }
                    Descending = $true
                },
                @{ Expression = { $_.$StartDateProperty -as [datetime] }; Descending = $false }
            )

            # Sort the contracts
            $sortedContracts = $contracts | Sort-Object -Property $sortingProperties

            # Get primary contract from active contracts
            $currentDate = (Get-Date).Date
            $primaryContract = $null
            $primaryContract = $sortedContracts | Where-Object {
                ($_.$StartDateProperty -as [datetime]).Date -le $currentDate -and
                (($_.$EndDateProperty -as [datetime]).Date -ge $currentDate -or [string]::IsNullOrEmpty($_.$EndDateProperty))
            } | Select-Object -First 1

            # If no primary contract found in active contracts, get primary contract from future contracts
            if ($null -eq $primaryContract) {
                $primaryContract = $sortedContracts | Where-Object {
                    ($_.$StartDateProperty -as [datetime]).Date -gt $currentDate
                } | Select-Object -First 1
            }

            # If no primary contract found in future contracts, get primary contract from past contracts
            if ($null -eq $primaryContract) {
                $primaryContract = $sortedContracts | Where-Object {
                    ($_.$EndDateProperty -as [datetime]).Date -lt $currentDate
                } | Select-Object -First 1
            }

            Write-Output $primaryContract
        }
        catch {
            throw $_
        }
    }
}

$contracts = @(
    @{
        dv_percentageDeelbetrekking_P00404  = "1"
        dv_urenPerWeek_P01109               = "40"
        dv_persNrDV_identificatieDV_dvVlgnr = "4"
        dv_einddatum_P00830                 = ""
        dv_begindatum_P00322                = "2023-10-01"
    },
    @{
        dv_percentageDeelbetrekking_P00404  = "0.6"
        dv_urenPerWeek_P01109               = "24"
        dv_persNrDV_identificatieDV_dvVlgnr = "2"
        dv_einddatum_P00830                 = ""
        dv_begindatum_P00322                = "2023-10-01"
    },
    @{
        dv_percentageDeelbetrekking_P00404  = "0.4"
        dv_urenPerWeek_P01109               = "16"
        dv_persNrDV_identificatieDV_dvVlgnr = "1"
        dv_einddatum_P00830                 = "2024-01-15"
        dv_begindatum_P00322                = "2023-10-01"
    },
    @{
        dv_percentageDeelbetrekking_P00404  = "0.6"
        dv_urenPerWeek_P01109               = "24"
        dv_persNrDV_identificatieDV_dvVlgnr = "2"
        dv_einddatum_P00830                 = "2024-01-15"
        dv_begindatum_P00322                = "2024-10-01"
    },
    @{
        dv_percentageDeelbetrekking_P00404  = "0.6"
        dv_urenPerWeek_P01109               = "24"
        dv_persNrDV_identificatieDV_dvVlgnr = "2"
        dv_einddatum_P00830                 = "2024-01-15"
        dv_begindatum_P00322                = "2024-10-01"
    }
)

$getPrimaryContractSplatParams = @{
    Contracts            = $contracts
    FTEProperty          = "dv_percentageDeelbetrekking_P00404"
    HoursPerWeekProperty = "dv_urenPerWeek_P01109"
    # PercentageProperty   = "percentage"
    SequenceProperty     = "dv_persNrDV_identificatieDV_dvVlgnr"
    EndDateProperty      = "dv_einddatum_P00830"
    StartDateProperty    = "dv_begindatum_P00322"
}

Get-PrimaryContract @getPrimaryContractSplatParams