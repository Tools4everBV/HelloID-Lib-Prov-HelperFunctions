$([System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream()).ReadToEnd
