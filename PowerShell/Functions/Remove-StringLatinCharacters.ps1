function Remove-StringLatinCharacters
{
    PARAM ([string]$String)
    [Text.Encoding]::ASCII.GetString([Text.Encoding]::GetEncoding("Cyrillic").GetBytes($String))
}

$Name = "Noël ohne übér"
$NameWithoutDiacritics = Remove-StringLatinCharacters $Name
$NameWithoutDiacritics