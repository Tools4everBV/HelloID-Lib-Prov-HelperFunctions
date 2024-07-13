# Basic authentication example
# ---------------------------- #
$headers = [System.Collections.Generic.Dictionary[string, string]]::new()
$headers.Add("Authorization", "Basic $([System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("$($actionContext.Configuration.UserName):$($actionContext.Configuration.Password)")))")
# ---------------------------- #