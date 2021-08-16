<#
.SYNOPSIS
    Add Hashtable or PScustomObject values to existing XMLdocument
.DESCRIPTION
    Add Hashtable or PScustomObject values to existing XMLdocument
.EXAMPLE
    [xml]$xmlDoc = New-Object System.Xml.XmlDocument
    $parentXmlDoc = $xmlDoc.AppendChild($xmlDoc.CreateElement("User"))
    @{
        FirstName = "Rudolf";
        LastName  = "Amersfoort"
        Gender    = "M"
        Email     = "Test@email.com"
    } | Write-ToXmlDocument -XmlDocument $xmlDoc -XmlParentDocument $parentXmlDoc
.EXAMPLE
    [xml]$xmlDoc = New-Object System.Xml.XmlDocument
    $parentXmlDoc = $xmlDoc.AppendChild($xmlDoc.CreateElement("User"))
    $user = @{
        FirstName = "Rudolf";
        LastName  = "Amersfoort"
        Gender    = "M"
        Email     = "Test@email.com"
    }
    Write-ToXmlDocument -Properties $user -XmlDocument $xmlDoc -XmlParentDocument $parentXmlDoc
.OUTPUTS
    [xml]$xmlDoc
    $xmlDoc.InnerXml
    <User><email>Test@email.com</email><firstname>Rudolf</firstname><gender>M</gender><lastname>Amersfoort</lastname></User>
.NOTES
   Complex function to update a existing Xml Docuemnt with the values of a Hastable or PSCustomObject
#>
function Write-ToXmlDocument {
    [Cmdletbinding()]
    param(
        [Parameter(
            Mandatory,
            ValueFromPipeline = $True,
            Position = 0)]
        $Properties,

        [Parameter(Mandatory)]
        [System.Xml.XmlDocument]
        $XmlDocument,

        [Parameter(Mandatory)]
        [System.Xml.XmlElement]
        $XmlParentDocument
    )
    if ($Properties.GetType().Name -eq "PSCustomObject") {
        $ParameterList = @{ }
        foreach ($prop in $Properties.PSObject.Properties) {
            $ParameterList[$prop.Name] = $prop.Value
        }
    } else {
        $ParameterList = $Properties
    }
    foreach ($param in $ParameterList.GetEnumerator()) {
        if (($param.Value) -is [PSCustomObject] -or ($param.Value) -is [Hashtable]) {
            $parent = $ioImportXmlDoc.AppendChild($xmlDoc.CreateElement($param.Name))
            $ParameterList[$param.Name] | Write-ToXmlDocument -XmlDocument  $XmlDocument -XmlParentDocument $parent
            $null = $XmlParentDocument.AppendChild($parent)
        } else {
            $child = $XmlDocument.CreateElement($param.Name)
            $null = $child.InnerText = "$($param.Value)"
            $null = $XmlParentDocument.AppendChild($child)
        }
    }
}