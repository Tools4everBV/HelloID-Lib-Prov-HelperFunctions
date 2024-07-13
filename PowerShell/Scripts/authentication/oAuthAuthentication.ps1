# OAuth 2 authentication example
# ---------------------------- #
$splatRetrieveTokenParams = @{
    Uri         = ''
    Method      = 'POST'
    ContentType = 'application/json'
    Body = @{
        client_id     = $($actionContext.Configuration.ClientId)
        client_secret = $($actionContext.Configuration.ClientSecret)
    } | ConvertTo-Json
}
$responseToken = Invoke-RestMethod @splatRetrieveTokenParams

$splatRestParams = @{
    Uri    = ''
    Method = ''
    Headers = @{
        Authorization = "$($responseToken.access_token)"
    }
}
Invoke-RestMethod @splatRestParams
# ---------------------------- #