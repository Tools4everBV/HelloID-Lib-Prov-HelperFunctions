# The names of security principal objects can contain all Unicode characters except the special LDAP characters defined in RFC 2253.
# This list of special characters includes: a leading space; a trailing space; and any of the following characters: # , + " \ < > ;
# A group account cannot consist solely of numbers, periods (.), or spaces. Any leading periods or spaces are cropped.
# https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc776019(v=ws.10)?redirectedfrom=MSDN
# https://www.ietf.org/rfc/rfc2253.txt
function Get-ADSanitizedGroupName
{
    param(
        [parameter(Mandatory = $true)][String]$Name
    )
    $newName = $name.trim();
    $newName = $newName -replace ' - ','_'
    $newName = $newName -replace '[`,~,!,#,$,%,^,&,*,(,),+,=,<,>,?,/,'',",;,:,\,|,},{,.]',''
    $newName = $newName -replace '\[','';
    $newName = $newName -replace ']','';
    $newName = $newName -replace ' ','_';
    $newName = $newName -replace '\.\.\.\.\.','.';
    $newName = $newName -replace '\.\.\.\.','.';
    $newName = $newName -replace '\.\.\.','.';
    $newName = $newName -replace '\.\.','.';
    return $newName;
}

$ADGroupName = "Group name with spaces and special characters @ ! ? # , + \ < > ;"
$ADGroupNameSanitized = Get-ADSanitizedGroupName -Name $ADGroupName
$ADGroupNameSanitized