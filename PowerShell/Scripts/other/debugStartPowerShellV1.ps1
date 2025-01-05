#####################################################
# debugStart
# PowerShell V1
#####################################################

# Select the code below and press F8 to initialize the variable(s) in your PSSession
$WarningPreference = 'Continue'
$VerbosePreference = 'SilentlyContinue'
$InformationPreference = 'Continue'

$dryRun = $true
$configuration = Get-Content "$FolderPath\test\config.json" -Encoding 'UTF8' | ConvertFrom-Json
$person = Get-Content "$FolderPath\test\demoPerson.json" -Encoding 'UTF8' | ConvertFrom-Json
