# Session authentication example
# ---------------------------- #
$splatRetrieveCookieParams = @{
    Uri             = "http://<application>/api/Login?username=$($actionContext.Configuration.UserName)&password=$($actionContext.Configuration.Password)"
    Method          = 'POST'
    SessionVariable = sessionWithCookie
}
Invoke-WebRequest @splatRetrieveCookieParams

$splatRestParams = @{
    Uri    = "http://<application>/api/Users/1"
    Method = ''
    WebSession = $sessionWithCookie

}
Invoke-RestMethod @splatRestParams
# ---------------------------- #