$persons = [System.Collections.Generic.List[object]]::new()
$persons.Add([PSCustomObject]@{ FirstName = $null; LastName = 'Doë'; ExternalId = 'ID001'; Email = 'jöhn.Doë@enyoi.local' })
$persons.Add([PSCustomObject]@{ FirstName = 'Jane'; LastName = 'Smith'; ExternalId = 'ID002'; Email = 'jane.smith@enyoi.local' })
$persons.Add([PSCustomObject]@{ FirstName = 'Jill'; LastName = 'Valentine'; ExternalId = 'ID003'; Email = 'jill.valentine@enyoi' })

# Foreach-Object
# ---------------------------- #
$persons | ForEach-Object {
    Write-Host "Name: $($_.FirstName) $($_.LastName), ID: $($_.ExternalId), Email: $($_.Email)"
}
# ---------------------------- #

# Foreach method
# ---------------------------- #
$persons.ForEach({
    param($person)
    Write-Host "Name: $($person.FirstName) $($person.LastName), ID: $($person.ExternalId), Email: $($person.Email)"
})
# ---------------------------- #