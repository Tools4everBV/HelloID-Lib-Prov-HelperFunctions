# Custom parameter validator
# ---------------------------- #
class ValidateCSVFileExistsAttribute : System.Management.Automation.ValidateArgumentsAttribute {
    [void]Validate([object]$csvFile, [System.Management.Automation.EngineIntrinsics]$engineIntrinsics) {
        if([string]::IsNullOrWhiteSpace($csvFile)) {
            throw [System.ArgumentNullException]::new()
        } elseif(-not (Test-Path -Path $csvFile)) {
            throw [System.IO.FileNotFoundException ]::new()
        }
    }
}

# With the [ValidateCSVFileExists()] specified, the CSV file will be validated
[ValidateCSVFileExists()]
[string]$csv = "C:\Temp\MyFile.csv"
# ---------------------------- #