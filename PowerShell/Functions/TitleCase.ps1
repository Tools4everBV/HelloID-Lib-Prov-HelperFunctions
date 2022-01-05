function titleCase {
   param (
        [string]$str
    )

    $str = $str.ToLower();

    #Standard Names and Hyphens
    $str = (Get-Culture).TextInfo.ToTitleCase($str)

    #After apostrophe
    [Regex]::Matches($str,"'") | ForEach-Object { $str = $str.Substring(0,$_.Index+1) + $str.Substring($_.Index+1,1).ToUpper() + $str.Substring($_.Index+2) }
    
    return $str
}