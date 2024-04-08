# HelloID Provisioning Target Javascript functions

## [CommonName](./CommonName)

## [DisplayName](./DisplayName)

## [Mail](./Mail)

## [sAMAccountName](./sAMAccountName)

## [Surname/Lastname](./Surname_Lastname)

## [UserPrincipalName](./UserPrincipalName)

## [proxyAddresses.js](./proxyAddresses.js)
Copy your Mail script and replace:

```JavaScript
return mailNickName + '@' + domain;
```

With the value:

```JavaScript
return [
    'SMTP:' + mailNickName + '@' + domain
];
```

When an alias is required, you can use the example below:

```JavaScript
let secondDomain = "domain.mail.onmicrosoft.com";
return [
    'SMTP:' + mailNickName + '@' + domain,
    'smtp:' + mailNickName + '@' + secondDomain
    
];
```