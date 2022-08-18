# Set TLS to accept TLS, TLS 1.1 and TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls -bor [Net.SecurityProtocolType]::Tls11 -bor [Net.SecurityProtocolType]::Tls12

$VerbosePreference = "SilentlyContinue"
$InformationPreference = "Continue"
$WarningPreference = "Continue"

# App Registration requires Mail.Send permissions. For more info see: https://docs.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0&tabs=http
$AADtenantID = "<Azure AD Tenant ID>"
$AADAppId = "<Azure AD App ID>"
$AADAppSecret = "<Azure AD App Secret>"

# Send mail parameters
$mailFrom = "No-Reply@enyoi.org" # Needs to be an existing mailbox in Office 365 (can be shared mailbox)
$mailTo = @("jane.doe@enyoi.org","john.smith@enyoi.org")
$mailCC = @("ict@enyoi.org")
$mailBCC = @()

$mailSubject = "HelloID: E-mail sent succesfully!"
$mailBody = "
<p>Dear employee,</p>

<p>We have just successfully sent you an e-mail using the Microsoft Graph API!<br>
We hope you are as excited as we are!</p>

<p>Kind regards,<br>
HelloID</p>
"

try {
    Write-Verbose "Generating Microsoft Graph API Access Token"

    $baseAuthUri = "https://login.microsoftonline.com/"
    $authUri = $baseAuthUri + "$AADTenantID/oauth2/token"

    $body = @{
        grant_type    = "client_credentials"
        client_id     = "$AADAppId"
        client_secret = "$AADAppSecret"
        resource      = "https://graph.microsoft.com"
    }

    $Response = Invoke-RestMethod -Method POST -Uri $authUri -Body $body -ContentType 'application/x-www-form-urlencoded'
    $accessToken = $Response.access_token

    #Add the authorization header to the request
    $authorization = @{
        Authorization  = "Bearer $accesstoken"
        'Content-Type' = "application/json"
        Accept         = "application/json"
    }
         
    Write-Verbose "Sending mail to '$($mailTo)', CC '$($mailCC)', BCC '$($mailBCC)', with subject '$($mailSubject)'"

    $baseGraphUri = "https://graph.microsoft.com/"
    $sendMailUri = $baseGraphUri + "/v1.0/users/$($mailFrom)/sendMail"

    $sendMailBody = (
        @{
            "message" = @{
                "subject"      = $mailSubject
                "body"         = @{
                    "contentType" = 'HTML'
                    "content"     = $mailBody
                }
                "toRecipients" = @(
                    $mailTo | ForEach-Object {
                        @{
                            "emailAddress" = @{
                                "address" = $_
                            }
                        }
                    }
                )
                "ccRecipients" = @(
                    $mailCC | ForEach-Object {
                        @{
                            "emailAddress" = @{
                                "address" = $_
                            }
                        }
                    }
                )
                "bccRecipients" = @(
                    $mailBCC | ForEach-Object {
                        @{
                            "emailAddress" = @{
                                "address" = $_
                            }
                        }
                    }
                )
            }
        }
    ) | ConvertTo-Json -Depth 10

    $sendMail = Invoke-RestMethod -Uri $sendMailUri -Method Post -Body $sendMailBody -Headers $authorization -Verbose:$false

    Write-Information "Succesfully sent mail to '$($mailTo)', CC '$($mailCC)', BCC '$($mailBCC)', with subject '$($mailSubject)'"
}
catch {
    $ex = $PSItem
    $verboseErrorMessage = $ex
    Write-Verbose "Error at Line '$($ex.InvocationInfo.ScriptLineNumber)': $($ex.InvocationInfo.Line). Error: $($verboseErrorMessage)"

    $auditErrorMessage = $ex.exception.message
    throw "Error sending mail to '$($mailTo)', CC '$($mailCC)', BCC '$($mailBCC)', with subject '$($mailSubject)'. Error message: $($auditErrorMessage)"
}