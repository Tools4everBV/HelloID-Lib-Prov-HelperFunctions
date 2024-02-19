// Copy your generate Mail script and replace "return mailNickName + '@' + domain;" with:
return [
    'SMTP:' + mailNickName + '@' + domain
];

// Or:
let secondDomain = "domain.mail.onmicrosoft.com";
return [
    'SMTP:' + mailNickName + '@' + domain,
    'smtp:' + mailNickName + '@' + secondDomain
    
];