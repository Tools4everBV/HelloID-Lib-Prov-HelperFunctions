# Create immutable object
# ---------------------------- #
$account = [PSCustomObject]@{
    DisplayName = 'JohnDoe'
    ExternalId  = 1
}

$immutableAccount = [PSCustomObject]@{}
$account.PSObject.Properties | ForEach-Object {
    $propertyName = $_.Name
    $propertyValue = $_.Value
    $immutableAccount | Add-Member -MemberType ScriptProperty -Name $propertyName -Value { $propertyValue }.GetNewClosure()
}

$immutableAccount
# ---------------------------- #