<#
.SYNOPSIS
    Add Hashtable or PSCustomObject values recursive to a XMLdocument
.DESCRIPTION
    Add Hashtable or PSCustomObject values recursive to a XMLdocument
.EXAMPLE
    [xml]$xmlDoc = New-Object System.Xml.XmlDocument
    $parentXmlDoc = $xmlDoc.AppendChild($xmlDoc.CreateElement("User"))
    @{
        FirstName = "John";
        LastName  = "Doe"
        Gender    = "M"
        Email     = "JDoe@email.com"
    } | Write-ToXmlDocument -XmlDocument $xmlDoc -XmlParentDocument $parentXmlDoc
.EXAMPLE
    [xml]$xmlDoc = New-Object System.Xml.XmlDocument
    $parentXmlDoc = $xmlDoc.AppendChild($xmlDoc.CreateElement("User"))
    @{
        FirstName = "John";
        LastName  = "Doe"
        Gender    = "M"
        Email     = @{
            Private = "JDoe@email.com"
            Work    = "JDoe@tools.com"
        }
    } | Write-ToXmlDocument -XmlDocument $xmlDoc -XmlParentDocument $parentXmlDoc
.OUTPUTS
    $xmlDoc.InnerXml
    <User><Email><Private>JDoe@email.com</Private><Work>JDoe@tools.com</Work></Email><FirstName>John</FirstName><Gender>M</Gender><LastName>Doe</LastName></User>
.NOTES
   Complex function to update an existing XML document with the values of a Hashtable or PSCustomObject. The values must be strings.
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
        if ((($param.Value) -is [PSCustomObject] -or ($param.Value) -is [Hashtable]) -and $null -ne $param.Value) {
            $parent = $XmlDocument.CreateElement($param.Name)
            $ParameterList[$param.Name] | Write-ToXmlDocument -XmlDocument  $XmlDocument -XmlParentDocument $parent
            $null = $XmlParentDocument.AppendChild($parent)
        } else {
            $child = $XmlDocument.CreateElement($param.Name)
            $null = $child.InnerText = "$($param.Value)"
            $null = $XmlParentDocument.AppendChild($child)
        }
    }
}