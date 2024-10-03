# OAuth 2 authentication example
# The 'ContentType' depends on the requirements of the API.
# Some require a JSON with the 'ContentType' set to: 'application/json' while others require
# a form with the 'ContentType' set to: 'application/x-www-form-urlencoded'.
# The 'body' might also require a 'username/password and grant_type' and, if the 'ContentType'
# is 'application/json', it must also be converted to JSON. 
# -------------------------------------------------------------------------------------------- #
$splatRetrieveTokenParams = @{
    Uri         = ''
    Method      = 'POST'
    ContentType = ''
    Body = @{
        client_id     = $($actionContext.Configuration.ClientId)
        client_secret = $($actionContext.Configuration.ClientSecret)
    }
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
# -------------------------------------------------------------------------------------------- #
