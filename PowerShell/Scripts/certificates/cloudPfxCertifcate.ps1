# Cloud *.pfx certificate
# ---------------------------- #
# Execute locally
# - Convert the *.pfx to a base64 string encoded as bytes and copies the result to the clipboard
$localCertificate = '<Path to your *.pfx>'
$base64ConvertedCertificate = [System.Convert]::ToBase64String((Get-Content $localCertificate -Encoding Byte))
$base64ConvertedCertificate | clip

# HelloID
# - Store the result of the $base64ConvertedCertificate in $($actionContext.Configuration.Base64EncodedCertificate) as type password
# - Store the certificate password in $($actionContext.Configuration.CertificatePassword) as type password
$base64StringCertificate = [system.convert]::FromBase64String($($actionContext.Data.Base64EncodedCertificate))
$certificate = [System.Security.Cryptography.X509Certificates.X509Certificate2]::new($base64StringCertificate, $($actionContext.Configuration.CertificatePassword))

# Use the certificate
$splatRestParams = @{
    Uri         = "http://<application>/api/Users/1"
    Method      = ''
    Certificate = $certificate
}
Invoke-RestMethod @splatRestParams
# ---------------------------- #s