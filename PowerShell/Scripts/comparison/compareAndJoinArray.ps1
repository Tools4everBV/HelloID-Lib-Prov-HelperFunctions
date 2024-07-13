$persons = [System.Collections.Generic.List[object]]::new()
$persons.Add([PSCustomObject]@{ FirstName = $null; LastName = 'Doë'; ExternalId = 'ID001'; Email = 'jöhn.Doë@enyoi.local' })
$persons.Add([PSCustomObject]@{ FirstName = 'Jane'; LastName = 'Smith'; ExternalId = 'ID002'; Email = 'jane.smith@enyoi.local' })
$persons.Add([PSCustomObject]@{ FirstName = 'Jill'; LastName = 'Valentine'; ExternalId = 'ID003'; Email = 'jill.valentine@enyoi' })

function Compare-Join {
    [OutputType([array], [array], [array])] # $Left , $Right, $Common
    param(
        [parameter()]
        [string[]]$ReferenceObject,

        [parameter()]
        [string[]]$DifferenceObject
    )

    $Left = @()
    $Right = @()
    $Common = @()

    if ($null -eq $DifferenceObject) {
        $Left = $ReferenceObject
    } elseif ($null -eq $ReferenceObject) {
        $Right = $DifferenceObject
    } else {
        $Left = [string[]][Linq.Enumerable]::Except($ReferenceObject, $DifferenceObject)
        $Right = [string[]][Linq.Enumerable]::Except($DifferenceObject, $ReferenceObject)
        $Common = [string[]][Linq.Enumerable]::Intersect($ReferenceObject, $DifferenceObject)
    }

    Write-Output $Left.Where({ -not [string]::IsNullOrEmpty($_) }) , $Right, $Common
}

$referenceObject = @($persons[1].FirstName, $persons[2].FirstName)
$differenceObject = @($persons[2].FirstName, 'Remco')

$result = Compare-Join -ReferenceObject $ReferenceObject -DifferenceObject $DifferenceObject

$left = $Result[0]
$right = $Result[1]
$common = $Result[2]

"Left: $($left -join ', ')"
"Right: $($right -join ', ')"
"Common: $($common -join ', ')"