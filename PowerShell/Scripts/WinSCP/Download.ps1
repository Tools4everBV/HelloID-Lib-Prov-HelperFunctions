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
    dllPath     = "C:\Program Files (x86)\WinSCP\WinSCPnet.dll" # https://winscp.net/eng/docs/library
    targetPath = "C:\Tools4ever\Data\*"
    sftp        = @{
        hostName = "hostname.com"
        port     = 22
        username = "username"
        password = "password"
    }
}

###########################################################
## Execute
###########################################################

#Setting File Path
$basePath = $PSScriptRoot 
Write-Host "Running Path: $($basePath)"

# Load WinSCP .NET assembly
Add-Type -Path $config.dllPath

# Set up session options
$sessionOptions = New-Object WinSCP.SessionOptions -Property @{
    Protocol                             = [WinSCP.Protocol]::Sftp
    HostName                             = $config.sftp.hostName
    PortNumber                           = $config.sftp.port
    UserName                             = $config.sftp.username
    Password                             = $config.sftp.password
    GiveUpSecurityAndAcceptAnySshHostKey = $true
}

Write-Host "Connecting to $($sessionOptions.HostName) as $($sessionOptions.UserName)"
$session = New-Object WinSCP.Session

try {
    try {
        # Connect
        $session.Open($sessionOptions)

        # Set up transfer options
        $transferOptions = New-Object WinSCP.TransferOptions -Property @{
            TransferMode      = [WinSCP.TransferMode]::Automatic
            OverwriteMode     = [WinSCP.OverwriteMode]::OverWrite
            FilePermissions   = $Null # This is default
            PreserveTimestamp = $False
        }

        #Disable Resume Support
        $transferOptions.ResumeSupport.State = [WinSCP.TransferResumeSupportState]::Off
        
        $transferResult = $session.GetFiles("*.csv", $config.targetPath, $False, $transferOptions)

        # Throw on any error
        $transferResult.Check()

        # Print results
        foreach ($transfer in $transferResult.Transfers) {
            Write-Host "Download of $($transfer.FileName) succeeded"
        }
    }
    finally {
        $session.Dispose()
    }

    exit 0
}
catch {
    Write-Host "Error: $($_.Exception.Message)"
    exit 1
}
