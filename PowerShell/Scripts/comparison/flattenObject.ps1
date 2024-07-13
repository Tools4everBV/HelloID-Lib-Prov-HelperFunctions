$json = @'
{
    "id": "06794319-7405-4d2b-b4a1-a397d1df1433",
    "surName": "Bos",
    "firstName": "Casey",
    "email": "c.bos@enyoi",
    "jobTitle": "Developer",
    "department": {
        "id": "872c191a-49ed-4927-9087-7843e77a93c5",
        "name": "Development"
    },
    "employeeNumber": "STUNTMAN98",
    "city": "New-York",
    "isManager": true,
    "manager": {
        "id": "a8c6b718-9ae7-479e-aa14-1746d5824100",
        "name": "Sweeney, Claire"
    },
    "optionalFields1": {
        "boolean1": false,
        "boolean2": false,
        "number1": 0.0,
        "number2": 0.0,
        "date1": null,
        "date2": null,
        "text1": "",
        "text2": "",
        "memo1": null,
        "memo2": null,
        "searchlist1": null,
        "searchlist2": null
    },
    "optionalFields2": {
        "boolean1": false,
        "boolean2": false,
        "number1": 0.0,
        "number2": 0.0,
        "date1": null,
        "date2": null,
        "text1": "",
        "text2": "",
        "memo1": null,
        "memo2": null,
        "searchlist1": null,
        "searchlist2": null
    },
    "branches": [
        {
            "branch1": {
                "id": "1"
            }
        },
        {
            "branch2": {
                "id": "2"
            }
        }
    ]
}
'@
$data = $json | ConvertFrom-Json

function ConvertTo-FlatObject {
    param (
        [Parameter(Mandatory)]
        [PSObject]
        $Object,

        [string]
        $Prefix = ""
    )

    $hashTable = [ordered]@{}
    foreach ($property in $Object.PSObject.Properties) {
        $name = if ($Prefix) { "$Prefix`_$($property.Name)" } else { $property.Name }
        if ($null -ne $property.Value) {
            if ($property.Value -is [pscustomobject]) {
                $flattenedSubObject = ConvertTo-FlatObject -Object $property.Value -Prefix $name
                foreach ($subProperty in $flattenedSubObject.PSObject.Properties) {
                    $hashTable[$subProperty.Name] = [string]$subProperty.Value
                }
            } elseif ($property.Value -is [array]) {
                for ($i = 0; $i -lt $property.Value.Count; $i++) {
                    if ($null -ne $property.Value[$i]) {
                        $flattenedArrayItem = ConvertTo-FlatObject -Object $property.Value[$i] -Prefix "$name`[$i]"
                        foreach ($subProperty in $flattenedArrayItem.PSObject.Properties) {
                            $hashTable[$subProperty.Name] = $subProperty.Value
                        }
                    }
                }
            } else {
                $hashTable[$name] = [string]$property.Value
            }
        }
    }
    $object = [PSCustomObject]$hashTable
    Write-Output $object
}

ConvertTo-FlatObject -Object $data