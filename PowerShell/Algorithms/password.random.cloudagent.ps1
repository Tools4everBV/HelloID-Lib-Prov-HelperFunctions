#Not the best implementation method, but it does work. Useful generating a random password with the Cloud Agent since [System.Web] is not available.
function New-RandomPassword($PasswordLength)
{
    # Length of the password to be generated
    #$PasswordLength = 20

    if($PasswordLength -lt 4) {$PasswordLength = 4}
        
    # Used to store an array of characters that can be used for the password
    $CharPool = New-Object System.Collections.ArrayList

    # Add characters a-z to the arraylist
    for ($index = 97; $index -le 122; $index++) { [Void]$CharPool.Add([char]$index) }

    # Add characters A-Z to the arraylist
    for ($index = 65; $index -le 90; $index++) { [Void]$CharPool.Add([Char]$index) }

    # Add digits 0-9 to the arraylist
    $CharPool.AddRange(@("0","1","2","3","4","5","6","7","8","9"))
        
    # Add a range of special characters to the arraylist
    $CharPool.AddRange(@("!","""","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\","]","^","_","{","|","}","~","!"))
        
    $password=""
    $rand=New-Object System.Random
        
    # Generate password by appending a random value from the array list until desired length of password is reached
    1..$PasswordLength | foreach { $password = $password + $CharPool[$rand.Next(0,$CharPool.Count)] }  
        
    #print password
    $password
}
