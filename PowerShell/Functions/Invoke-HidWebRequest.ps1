# Create function for invoking web calls
function Invoke-HidRestMethod{
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [String]
        $Method,
    
        [Parameter(Mandatory=$true)]
        [String]
        $Uri,
    
        [Parameter(Mandatory=$false)]
        [String]
        $ContentType,
    
        [Parameter(Mandatory=$false)]
        [String]
        $Key,
    
        [Parameter(Mandatory=$false)]
        $Body,
   
        [Parameter(Mandatory=$false)]
        [String]
        $UserAgent,
   
        [Parameter(Mandatory=$false)]
        $Credential,
    
        [Parameter(Mandatory=$false)]
        $Headers,
   
        [Parameter(Mandatory=$false)]
        $Page,
   
        [Parameter(Mandatory=$false)]
        $Skip,
    
        [Parameter(Mandatory=$false)]
        $PageSizeParameter,
    
        [Parameter(Mandatory=$false)]
        $PageSize = $null,
            
        [Parameter(Mandatory=$true)]
        [Ref]
        $Response
    )
    
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls -bor [Net.SecurityProtocolType]::Tls11 -bor [Net.SecurityProtocolType]::Tls12
     
    $parameters = @{}
    if($Body){
        $parameters += @{
            Body = $Body
        }
    }
    if( 'application/json'){
        $parameters += @{
            ContentType = $ContentType
        }
    }
    if($Key){
        $header = @{}
        $header.Add("authorization",$Key)
        $parameters += @{
            Headers = $header
        }
    }
    if($Credential){
        $parameters += @{
            Credential = $Credential
        }
    }
    if($Headers -and !$key){
        $parameters += @{
            Headers = $Headers
        }
    }
    if($UserAgent){
        $parameters += @{
            UserAgent = $UserAgent
        }
    }
    $Response.Value = $null
    
    try{
        if($Uri.EndsWith("/") -eq $true){
            Write-HidStatus -Message ("Failed::Get::$Uri::Uri invalid") -Event Failed
            return
        }
    
        if($PageSize -ne $null){
            $take = $PageSize
            if($Uri -match '\?'){
                if(![string]::IsNullOrEmpty($Page)){
                    $uriFirstPage = $Uri + "&page=$Page" + "&$PageSizeParameter=$take"
                }elseif(![string]::IsNullOrEmpty($Skip)){
                    $uriFirstPage = $Uri + "&skip=$Skip" + "&$PageSizeParameter=$take"
                }
            }else{
                if(![string]::IsNullOrEmpty($Page)){
                    $uriFirstPage = $Uri + "?page=$Page" + "&$PageSizeParameter=$take"
                }elseif(![string]::IsNullOrEmpty($Skip)){
                    $uriFirstPage = $Uri + "?skip=$Skip" + "&$PageSizeParameter=$take"
                }
            }
  
            $servicePoint = [System.Net.ServicePointManager]::FindServicePoint($uriFirstPage)
            $dataset = Invoke-RestMethod -Method $Method -Uri $uriFirstPage @parameters
            if(![String]::IsNullOrEmpty($dataset.pageData)){
                $itemsWithData = $null
                $itemsWithData = foreach($item in $dataset.pageData){
                    if(![String]::IsNullOrEmpty($item)){
                        $item
                    }
                }
                if(![String]::IsNullOrEmpty($itemsWithData)){
                    $dataset = $itemsWithData
                }
            }
   
            #Specific for Embrace, which return Items!
            if(![String]::IsNullOrEmpty($dataset.Items)){
                $itemsWithData = $null
                $itemsWithData = foreach($item in $dataset.Items){
                    if(![String]::IsNullOrEmpty($item)){
                        $item
                    }
                }
                if(![String]::IsNullOrEmpty($itemsWithData)){
                    $dataset = $itemsWithData
                }
            }
               
            $result = $servicePoint.CloseConnectionGroup("")
    
            $Response.Value += $dataset
            Write-HidStatus -Message "Successfully retrieved data from $uriFirstPage" -Event Success
             
            if(![string]::IsNullOrEmpty($Page)){  
                $Page++
            }elseif(![string]::IsNullOrEmpty($Skip)){
                $Skip += $take
            }
 
            while($dataset.Count -eq $take){
                if($Uri -match '\?'){
                    if(![string]::IsNullOrEmpty($Page)){
                        $uriPage = $Uri + "?page=$Page" + "&$PageSizeParameter=$take"
                    }elseif(![string]::IsNullOrEmpty($Skip)){
                        $uriPage = $Uri + "?skip=$Skip" + "&$PageSizeParameter=$take"
                    }
                }else{
                    if(![string]::IsNullOrEmpty($Page)){
                        $uriPage = $Uri + "?page=$Page" + "&$PageSizeParameter=$take"
                    }elseif(![string]::IsNullOrEmpty($Skip)){
                        $uriPage = $Uri + "?skip=$Skip" + "&$PageSizeParameter=$take"
                    }
                }
            
                $servicePoint = [System.Net.ServicePointManager]::FindServicePoint($uriPage)
                $dataset = Invoke-RestMethod -Method $Method -Uri $uriPage @parameters
  
                if(![String]::IsNullOrEmpty($dataset.pageData)){
                    $itemsWithData = $null
                    $itemsWithData = foreach($item in $dataset.pageData){
                        if(![String]::IsNullOrEmpty($item)){
                            $item
                        }
                    }
                    if(![String]::IsNullOrEmpty($itemsWithData)){
                        $dataset = $itemsWithData
                    }
                }
   
                #Specific for Embrace, which return Items!
                if(![String]::IsNullOrEmpty($dataset.Items)){
                    $itemsWithData = $null
                    $itemsWithData = foreach($item in $dataset.Items){
                        if(![String]::IsNullOrEmpty($item)){
                            $item
                        }
                    }
                    if(![String]::IsNullOrEmpty($itemsWithData)){
                        $dataset = $itemsWithData
                    }
                }
   
                $result = $servicePoint.CloseConnectionGroup("")
            
                if(![string]::IsNullOrEmpty($Page)){  
                    $Page++
                }elseif(![string]::IsNullOrEmpty($Skip)){
                    $Skip += $take
                }
 
                $Response.Value += $dataset
                Write-HidStatus -Message "Successfully retrieved data from $uriPage" -Event Success
            }
        }else{
            $Response.Value = $null
            $servicePoint = [System.Net.ServicePointManager]::FindServicePoint($Uri)
            $Response.Value = Invoke-RestMethod -Method $Method -Uri $Uri @parameters
            $result = $servicePoint.CloseConnectionGroup("")
        }
    }catch{
        throw $_
    }
}