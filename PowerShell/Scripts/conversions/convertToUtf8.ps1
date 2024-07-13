# Convert body to UTF-8
# ---------------------------- #
$body = @{
    FirstName   = 'John'
    LastName    = 'Döe'
    ExternalId  = 'ID001'
    Email       = 'jöhn.Doë@enyoi.local'
 } | ConvertTo-Json
 [System.Text.Encoding]::UTF8.GetBytes($body)
# ---------------------------- #