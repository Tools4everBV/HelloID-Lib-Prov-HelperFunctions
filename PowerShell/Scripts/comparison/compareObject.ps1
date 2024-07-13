# ---------------------------- #
# The code checks for differences between the $actionContext.Data and $correlatedAccount.
# If differences exist, a new hash table $changedPropertiesObject will be created.
# This object can be used in a HTTP PUT JSON payload.
$desiredAccount = $actionContext.Data
$splatCompareProperties = @{
    ReferenceObject  = @($correlatedAccount.PSObject.Properties)
    DifferenceObject = @($desiredAccount.PSObject.Properties)
}
$propertiesChanged = Compare-Object @splatCompareProperties -PassThru | Where-Object { $_.SideIndicator -eq '=>' }
if ($propertiesChanged) {
    $action = 'UpdateAccount'
    $dryRunMessage = "Account property(s) required to update: $($propertiesChanged.Name -join ', ')"

    $changedPropertiesObject = @{}
    foreach ($property in $propertiesChanged) {
        $propertyName = $property.Name
        $propertyValue = $account.$propertyName
        $changedPropertiesObject.$propertyName = $propertyValue
    }
}
# ---------------------------- #