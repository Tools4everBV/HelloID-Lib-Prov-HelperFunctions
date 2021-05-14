##Folder Structure
# - AppName
# -- _archive
# --- <archiveFileName>.yyyyMMdd.hhmm.zip
# -- logs
# --- sftp.log
# -- Upload.ps1
# -- *.csv


## Config ##
$config = @{
    dllPath = "C:\Provisioning\Exports\assemblies\WinSCPnet.dll" # https://winscp.net/eng/docs/library
    fileOptions = @{
        zipEnabled = $false
        zipFileName = "OneRoster.zip"
        archiveFileName = "AppName"
    }
    sftp = @{
        hostName = "sftp.hostname.com"
        port = 22
        path = "/"
        username = "myusername"
        password = "mypassword"
    }
}

###########################################################
## Execute
###########################################################

#Setting File Path
$basePath = $PSScriptRoot 
Write-Host "Running Path: $($basePath)"

#Get Current Date
$currentDate = Get-Date -Format "yyyyMMdd.hhmm";

#Archive Files
Compress-Archive -Path "$($basePath)\*.csv" -DestinationPath "$($basePath)\_archive\$($config.fileOptions.archiveFileName).$($currentDate).zip" -Force

#Clean up Archive (7 days)
$archivedFiles = Get-Item "$($basePath)\_archive\*.zip"

foreach($file in $archivedFiles)
{
try {
$split = $file.Name.split(".");
$filedate = [datetime]::parseexact($split[1], 'yyyyMMdd', $null)

$span = New-TimeSpan -Start $filedate -End (Get-Date)

if($span.Days -gt 7)
{
    Remove-Item $file -Force
}

} catch { Write-Host "Failed to delete archive $($file.Name)" }

}

# Load WinSCP .NET assembly
Add-Type -Path $config.dllPath

# Set up session options
$sessionOptions = New-Object WinSCP.SessionOptions -Property @{
Protocol   = [WinSCP.Protocol]::Sftp
HostName   = $config.sftp.hostName
PortNumber = $config.sftp.port
UserName   = $config.sftp.username
Password   = $config.sftp.password
GiveUpSecurityAndAcceptAnySshHostKey = $true
}

Write-Host "Connecting to $($sessionOptions.HostName) as $($sessionOptions.UserName)"
$session = New-Object WinSCP.Session
$session.DebugLogPath = "$($basePath)\logs\sftp.log"

#Delete Previous Log File
try { Remove-Item -Path $session.DebugLogPath -Force } catch{ Write-Host "Failed to delete log file $($session.DebugLogPath)" }

try {
try
{
# Connect
$session.Open($sessionOptions)

# Set up transfer options
$transferOptions = New-Object WinSCP.TransferOptions -Property @{
TransferMode = [WinSCP.TransferMode]::Automatic
OverwriteMode = [WinSCP.OverwriteMode]::OverWrite
FilePermissions = $Null # This is default
PreserveTimestamp = $False
ResumeSupport = $false
}

#Check if transfering Zip or CSV's
if($config.fileOptions.zipEnabled)
{
$targetZipFilePath = "$($basePath)\$($config.fileOptions.zipFileName)"
Compress-Archive -Path "$($basePath)\*.csv" -DestinationPath $targetZipFilePath -Force
Write-Host "Sending $($targetZipFilePath)";
$transferResult = $session.PutFiles("$($targetZipFilePath)", "$($config.sftp.path)/*", $False, $transferOptions)
}
else
{
Write-host "Sending *.csv"; 
$transferResult = $session.PutFiles("$($basePath)\*.csv", "$($config.sftp.path)/*", $False, $transferOptions)
}

# Throw on any error
$transferResult.Check()

# Print results
foreach ($transfer in $transferResult.Transfers)
{
Write-Host "Upload of $($transfer.FileName) succeeded"
}
}
finally
{
$session.Dispose()
}

exit 0
}
catch
{
Write-Host "Error: $($_.Exception.Message)"
exit 1
}

