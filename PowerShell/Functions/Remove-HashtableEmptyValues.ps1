function Remove-EmptyValuesFromHashtable {
    param(
        [parameter(Mandatory = $true)][Hashtable]$Hashtable
    )

    $newHashtable = @{}
    foreach ($Key in $Hashtable.Keys) {
        if (-not[String]::IsNullOrEmpty($Hashtable.$Key)) {
            $null = $newHashtable.Add($Key, $Hashtable.$Key)
        }
    }
    
    return $newHashtable
}

$hashTable = @{
    'String value'  =   "String value"
    'Boolean true'  =   $true
    'Boolean false' =   $false
    'Null value'    =   $null
    'Empty value'   =   ""
}

$hashTable = Remove-EmptyValuesFromHashtable $hashTable
$hashTable