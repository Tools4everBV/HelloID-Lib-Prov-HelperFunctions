<#
.SYNOPSIS
   Join or Compare two Arrays of strings 
.DESCRIPTION
    Join or Compare to Array of strings togther 
.EXAMPLE
    $currentPermissions = @(
        [PSCustomobject]@{  Name   = "Name1";  Number = 1 },
        [PSCustomobject]@{  Name   = "Name2";  Number = 1 },
        [PSCustomobject]@{  Name   = "Name2";  Number = 2 }
    )

    $desiredPermissions = @(
        [PSCustomobject]@{ Name   = "Name1";  Number = 2 },
        [PSCustomobject]@{ Name   = "Name3";  Number = 2 }
    )
    PS C:\> $Create , $Revoke, $Update = Compare-Array -ReferenceObject $desiredPermissions.name -DifferenceObject $currentPermissions.name
   Join to arrays, with a (Left, Right and Common) result.
.OUTPUTS
    It returns a tuple with a Left, Right, and Common       

.NOTES
    Always test your outcome after the comparison to avoid unpredicted outcomes
    
    Todo:
      Compare values always with the same casing (ToLower)
    
    
#>
function Compare-Array {
    [OutputType([array], [array], [array])] # $Left , $Right, $common
    param(
        [parameter(Mandatory)]
        [string[]]$ReferenceObject,
        
        [parameter()]
        [string[]]$DifferenceObject     
    )   
    if ($null -eq $DifferenceObject) {
        $Left = $ReferenceObject
    } else {
        $left = [string[]][Linq.Enumerable]::Except($ReferenceObject, $DifferenceObject)
        $right = [string[]][Linq.Enumerable]::Except($DifferenceObject, $ReferenceObject)
        $common = [string[]][Linq.Enumerable]::Intersect($ReferenceObject, $DifferenceObject)
    } 
    return $Left , $Right, $common
}

# $currentPermissions = @(
#     [PSCustomobject]@{  Name   = "Name1" ; Number = 1 },
#     [PSCustomobject]@{  Name   = "Name2" ; Number = 1 },
#     [PSCustomobject]@{  Name   = "Name2" ; Number = 2 }
# )

# $desiredPermissions = @(
#     [PSCustomobject]@{ Name   = "Name1";  Number = 2 },
#     [PSCustomobject]@{ Name   = "Name3";  Number = 2 }
# )

# $Create , $Revoke, $Update = Compare-Array -ReferenceObject $desiredPermissions.name -DifferenceObject $currentPermissions.name

# $currentGrouped = $currentPermissions | Group-Object name -AsHashTable
# $desiredGrouped = $desiredPermissions | Group-Object name -AsHashTable

# foreach ($role in $Create) { $desiredGrouped[$role]}
# foreach ($role in $Update) { $desiredGrouped[$role]}
# foreach ($role in $Revoke) { $currentGrouped[$role]}
