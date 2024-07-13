$persons = [System.Collections.Generic.List[object]]::new()
$persons.Add([PSCustomObject]@{ FirstName = $null; LastName = 'Doë'; ExternalId = 'ID001'; Email = 'jöhn.Doë@enyoi.local' })
$persons.Add([PSCustomObject]@{ FirstName = 'Jane'; LastName = 'Smith'; ExternalId = 'ID002'; Email = 'jane.smith@enyoi.local' })
$persons.Add([PSCustomObject]@{ FirstName = 'Jill'; LastName = 'Valentine'; ExternalId = 'ID003'; Email = 'jill.valentine@enyoi' })

# Select-Object with calculated and direct properties
# ---------------------------- #
$modifiedPersons = $persons | Select-Object @{ Name = "ExternalId"; Expression = { $_.ExternalId }}, @{ Name = "FullName"; Expression = { "$($_.FirstName) $($_.LastName)" }}, Email
$modifiedPersons | ForEach-Object { Write-Host $_ }
# ---------------------------- #