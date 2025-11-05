# HelloID Provisioning Target generate ProxyAddresses

## [Option 1: janine.vandenboele@domain.local](./Scripts/generateUserPrincipalNameOption1.js)

| Iteration      | Convention    | Value                            | Remark                                                             |
| -------------- | ------------- | -------------------------------- | ------------------------------------------------------------------ |
| First          | B, BP, P & PB | janine.vandenboele@domain.local  | FamilyName                                                         |
| If in use      | B, BP, P & PB | j.vandenboele@domain.local       | First character of  nickname                                       |
| If also in use | B, BP, P & PB | ja.vandenboele@domain.local      | First two characters of nickname                                   |
| .........      | .........     | .........                        | .........                                                          |
| If also in use | B, BP, P & PB | janin.vandenboele@domain.local   | Use extra character of nickname until full nickname is reached     |
| If also in use | B, BP, P & PB | janine.vandenboele2@domain.local | If full nickname is reached, append with iterator, starting with 2 |



## [Option 1: janine.vandenboele@domain.local](./Scripts/generateProxyAddressesOption1.js)

| Iteration | Convention | Value                                   | Remark                              |
| --------- | ---------- | --------------------------------------- | ----------------------------------- |
| First     | B          | [SMTP:janine.vandenboele@domain.local]  | FamilyName                          |
|           | BP         | [SMTP:janine.vandenboele@domain.local]  |                                     |
|           | P          | [SMTP:janine.vandenboele@domain.local]  |                                     |
|           | PB         | [SMTP:janine.vandenboele@domain.local]  |                                     |
| Second    | B          | [SMTP:j.vandenboele@domain.local]       | The first character of the nickname |
|           | BP         | [SMTP:j.vandenboele@domain.local]       |                                     |
|           | P          | [SMTP:j.vandenboele@domain.local]       |                                     |
|           | PB         | [SMTP:j.vandenboele@domain.local]       |                                     |
| Third     | B          | [SMTP:janine.vandenboele2@domain.local] |                                     |
|           | BP         | [SMTP:janine.vandenboele2@domain.local] |                                     |
|           | P          | [SMTP:janine.vandenboele2@domain.local] |                                     |
|           | PB         | [SMTP:janine.vandenboele2@domain.local] |                                     |


## [Option 2: j.devries@domain.local](./Scripts/generateProxyAddressesOption2.js)

| Iteration | Convention | Value                                   | Remark                              |
| --------- | ---------- | --------------------------------------- | ----------------------------------- |
| First     | B          | [SMTP:j.vandenboele@domain.local]       | The first character of the nickname |
|           | BP         | [SMTP:j.vandenboele@domain.local]       | FamilyName                          |
|           | P          | [SMTP:j.devries@domain.local]           | FamilyNamePartner                   |
|           | PB         | [SMTP:j.devries@domain.local]           |                                     |
| Second    | B          | [SMTP:ja.vandenboele@domain.local]      |                                     |
|           | BP         | [SMTP:ja.vandenboele@domain.local]      |                                     |
|           | P          | [SMTP:ja.devries@domain.local]          |                                     |
|           | PB         | [SMTP:ja.devries@domain.local]          |                                     |
| Third     | B          | [SMTP:janine.vandenboele@domain.local]  |                                     |
|           | BP         | [SMTP:janine.vandenboele@domain.local]  |                                     |
|           | P          | [SMTP:janine.devries@domain.local]      |                                     |
|           | PB         | [SMTP:janine.devries@domain.local]      |                                     |
| Fourth    | B          | [SMTP:janine.vandenboele2@domain.local] |                                     |
|           | BP         | [SMTP:janine.vandenboele2@domain.local] |                                     |
|           | P          | [SMTP:janine.devries2@domain.local]     |                                     |
|           | PB         | [SMTP:janine.devries2@domain.local]     |                                     |

## [Option 3: janine.devries@domain.local](./Scripts/generateProxyAddressesOption3.js)

| Iteration | Convention | Value                                   | Remark                                     |
| --------- | ---------- | --------------------------------------- | ------------------------------------------ |
| First     | B          | [SMTP:janine.vandenboele@domain.local]  | FamilyName                                 |
|           | BP         | [SMTP:janine.vandenboele@domain.local]  |                                            |
|           | P          | [SMTP:janine.devries@domain.local]      | FamilyNamePartner                          |
|           | PB         | [SMTP:janine.devries@domain.local]      |                                            |
| Second    | B          | [SMTP:j.h.c.vandenboele@domain.local]   | initials, when length equals one then skip |
|           | BP         | [SMTP:j.h.c.vandenboele@domain.local]   |                                            |
|           | P          | [SMTP:j.h.c.devries@domain.local]       |                                            |
|           | PB         | [SMTP:j.h.c.devries@domain.local]       |                                            |
| Third     | B          | [SMTP:j.vandenboele@domain.local]       | The first character of the nickname        |
|           | BP         | [SMTP:j.vandenboele@domain.local]       |                                            |
|           | P          | [SMTP:j.devries@domain.local]           |                                            |
|           | PB         | [SMTP:j.devries@domain.local]           |                                            |
| ......... | .........  | .........                               | .........                                  |
| Seventh   | B          | [SMTP:janin.vandenboele@domain.local]   | The first seven characters of the nickname |
|           | BP         | [SMTP:janin.vandenboele@domain.local]   |                                            |
|           | P          | [SMTP:janin.devries@domain.local]       |                                            |
|           | PB         | [SMTP:janin.devries@domain.local]       |                                            |
| Eighth    | B          | [SMTP:janine.vandenboele2@domain.local] |                                            |
|           | BP         | [SMTP:janine.vandenboele2@domain.local] |                                            |
|           | P          | [SMTP:janine.devries2@domain.local]     |                                            |
|           | PB         | [SMTP:janine.devries2@domain.local]     |                                            |

## [Option 4: jvandenboele@domain.local](./Scripts/generateProxyAddressesOption4.js)

| Iteration | Convention | Value                                  | Remark                                   |
| --------- | ---------- | -------------------------------------- | ---------------------------------------- |
| First     | B          | [SMTP:jvandenboele@domain.local]       | The first character of the nickname      |
|           | BP         | [SMTP:jvandenboele@domain.local]       | FamilyName                               |
|           | P          | [SMTP:jvandenboele@domain.local]       |                                          |
|           | PB         | [SMTP:jvandenboele@domain.local]       |                                          |
| Second    | B          | [SMTP:javandenboele@domain.local]      | The first two characters of the nickname |
|           | BP         | [SMTP:javandenboele@domain.local]      |                                          |
|           | P          | [SMTP:javandenboele@domain.local]      |                                          |
|           | PB         | [SMTP:javandenboele@domain.local]      |                                          |
| ......... | .........  | .........                              | .........                                |
| Seventh   | B          | [SMTP:janinevandenboele@domain.local]  |                                          |
|           | BP         | [SMTP:janinevandenboele@domain.local]  |                                          |
|           | P          | [SMTP:janinevandenboele@domain.local]  |                                          |
|           | PB         | [SMTP:janinevandenboele@domain.local]  |                                          |
| Eighth    | B          | [SMTP:janinevandenboele2@domain.local] |                                          |
|           | BP         | [SMTP:janinevandenboele2@domain.local] |                                          |
|           | P          | [SMTP:janinevandenboele2@domain.local] |                                          |
|           | PB         | [SMTP:janinevandenboele2@domain.local] |                                          |

## [Option 5: jvandenboele@domain.local](./Scripts/generateProxyAddressesOption5.js)

| Iteration | Convention | Value                                  | Remark                                   |
| --------- | ---------- | -------------------------------------- | ---------------------------------------- |
| First     | B          | [SMTP:jvandenboele@domain.local]       | The first character of the nickname      |
|           | BP         | [SMTP:jvandenboele@domain.local]       | FamilyName                               |
|           | P          | [SMTP:jdevries@domain.local]           | FamilyNamePartner                        |
|           | PB         | [SMTP:jdevries@domain.local]           |                                          |
| Second    | B          | [SMTP:javandenboele@domain.local]      | The first two characters of the nickname |
|           | BP         | [SMTP:javandenboele@domain.local]      |                                          |
|           | P          | [SMTP:jadevries@domain.local]          |                                          |
|           | PB         | [SMTP:jadevries@domain.local]          |                                          |
| ......... | .........  | .........                              | .........                                |
| Seventh   | B          | [SMTP:janinevandenboele@domain.local]  |                                          |
|           | BP         | [SMTP:janinevandenboele@domain.local]  |                                          |
|           | P          | [SMTP:janinedevries@domain.local]      |                                          |
|           | PB         | [SMTP:janinedevries@domain.local]      |                                          |
| Eighth    | B          | [SMTP:janinevandenboele2@domain.local] |                                          |
|           | BP         | [SMTP:janinevandenboele2@domain.local] |                                          |
|           | P          | [SMTP:janinedevries2@domain.local]     |                                          |
|           | PB         | [SMTP:janinedevries2@domain.local]     |                                          |

## [Option 6: janine.vandenboele@domain.local](./Scripts/generateProxyAddressesOption6.js)

| Iteration | Convention | Value                                  | Remark                              |
| --------- | ---------- | -------------------------------------- | ----------------------------------- |
| First     | B          | [SMTP:janine.vandenboele@domain.local] | FamilyName                          |
|           | BP         | [SMTP:janine.vandenboele@domain.local] |                                     |
|           | P          | [SMTP:janine.vandenboele@domain.local] |                                     |
|           | PB         | [SMTP:janine.vandenboele@domain.local] |                                     |
| Second    | B          | [SMTP:janine_vandenboele@domain.local] |                                     |
|           | BP         | [SMTP:janine_vandenboele@domain.local] |                                     |
|           | P          | [SMTP:janine_vandenboele@domain.local] |                                     |
|           | PB         | [SMTP:janine_vandenboele@domain.local] |                                     |
| Third     | B          | [SMTP:j.vandenboele@domain.local]      | The first character of the nickname |
|           | BP         | [SMTP:j.vandenboele@domain.local]      |                                     |
|           | P          | [SMTP:j.vandenboele@domain.local]      |                                     |
|           | PB         | [SMTP:j.vandenboele@domain.local]      |                                     |
| Fourth    | B          | [SMTP:j.vandenboele2@domain.local]     |                                     |
|           | BP         | [SMTP:j.vandenboele2@domain.local]     |                                     |
|           | P          | [SMTP:j.vandenboele2@domain.local]     |                                     |
|           | PB         | [SMTP:j.vandenboele2@domain.local]     |                                     |

## [Option 7: janine.vandenboele@domain.local](./Scripts/generateProxyAddressesOption7.js)

| Iteration | Convention | Value                                    | Remark                  |
| --------- | ---------- | ---------------------------------------- | ----------------------- |
| First     | B          | [SMTP:janine.vandenboele@domain.local]   | FamilyName              |
|           | BP         | [SMTP:janine.vandenboele@domain.local]   |                         |
|           | P          | [SMTP:janine.vandenboele@domain.local]   |                         |
|           | PB         | [SMTP:janine.vandenboele@domain.local]   |                         |
| Second    | B          | [SMTP:janine_vandenboele@domain.local]   |                         |
|           | BP         | [SMTP:janine_vandenboele@domain.local]   |                         |
|           | P          | [SMTP:janine_vandenboele@domain.local]   |                         |
|           | PB         | [SMTP:janine_vandenboele@domain.local]   |                         |
| Third     | B          | [SMTP:janine.vandenboele02@domain.local] | Iterate, starting at 02 |
|           | BP         | [SMTP:janine.vandenboele02@domain.local] |                         |
|           | P          | [SMTP:janine.vandenboele02@domain.local] |                         |
|           | PB         | [SMTP:janine.vandenboele02@domain.local] |                         |
| Fourth    | B          | [SMTP:janine.vandenboele03@domain.local] |                         |
|           | BP         | [SMTP:janine.vandenboele03@domain.local] |                         |
|           | P          | [SMTP:janine.vandenboele03@domain.local] |                         |
|           | PB         | [SMTP:janine.vandenboele03@domain.local] |                         |


## [Option 8: jvandenboele@domain.local](./Scripts/generateProxyAddressesOption8.js)

| Iteration | Convention | Value                             | Remark                                     |
| --------- | ---------- | --------------------------------- | ------------------------------------------ |
| First     | B          | [SMTP:jvandenboele@domain.local]  | FamilyName or partnername, no combinations |
|           | BP         | [SMTP:jvandenboele@domain.local]  |                                            |
|           | P          | [SMTP:jdevries@domain.local]      |                                            |
|           | PB         | [SMTP:jdevries@domain.local]      |                                            |
| Second    | B          | [SMTP:jvandenboele1@domain.local] | Iterate, starting at 1                     |
|           | BP         | [SMTP:jvandenboele1@domain.local] |                                            |
|           | P          | [SMTP:jdevries1@domain.local]     |                                            |
|           | PB         | [SMTP:jdevries1@domain.local]     |                                            |
| Third     | B          | [SMTP:jvandenboele2@domain.local] |                                            |
|           | BP         | [SMTP:jvandenboele2@domain.local] |                                            |
|           | P          | [SMTP:jdevries2@domain.local]     |                                            |
|           | PB         | [SMTP:jdevries2@domain.local]     |                                            |
| Fourth    | B          | [SMTP:jvandenboele3@domain.local] |                                            |
|           | BP         | [SMTP:jvandenboele3@domain.local] |                                            |
|           | P          | [SMTP:jdevries3@domain.local]     |                                            |
|           | PB         | [SMTP:jdevries3@domain.local]     |                                            |

## [Option 9: j.vandenboele@domain.local](./Scripts/generateProxyAddressesOption9.js)

| Iteration | Convention | Value                                  | Remark                                   |
| --------- | ---------- | -------------------------------------- | ---------------------------------------- |
| First     | B          | [SMTP:j.vandenboele@domain.local]      | The first character of the nickname      |
|           | BP         | [SMTP:j.vandenboele@domain.local]      | FamilyName                               |
|           | P          | [SMTP:j.vandenboele@domain.local]      |                                          |
|           | PB         | [SMTP:j.vandenboele@domain.local]      |                                          |
| Second    | B          | [SMTP:janine.vandenboele@domain.local] | Start with the full nickname             |
|           | BP         | [SMTP:janine.vandenboele@domain.local] |                                          |
|           | P          | [SMTP:janine.vandenboele@domain.local] |                                          |
|           | PB         | [SMTP:janine.vandenboele@domain.local] |                                          |
| Third     | B          | [SMTP:ja.vandenboele@domain.local]     | The first two characters of the nickname |
|           | BP         | [SMTP:ja.vandenboele@domain.local]     |                                          |
|           | P          | [SMTP:ja.vandenboele@domain.local]     |                                          |
|           | PB         | [SMTP:ja.vandenboele@domain.local]     |                                          |
| ......... | .........  | .........                              | .........                                |
| Seventh   | B          | [SMTP:janin.vandenboele@domain.local]  |                                          |
|           | BP         | [SMTP:janin.vandenboele@domain.local]  |                                          |
|           | P          | [SMTP:janin.vandenboele@domain.local]  |                                          |
|           | PB         | [SMTP:janin.vandenboele@domain.local]  |                                          |
| Eighth    | B          | [SMTP:j.vandenboele2@domain.local]     |                                          |
|           | BP         | [SMTP:j.vandenboele2@domain.local]     |                                          |
|           | P          | [SMTP:j.vandenboele2@domain.local]     |                                          |
|           | PB         | [SMTP:j.vandenboele2@domain.local]     |                                          |

## [Option 10: j.vandenboele@domain.local](./Scripts/generateProxyAddressesOption10.js)

| Iteration | Convention | Value                              | Remark                            |
| --------- | ---------- | ---------------------------------- | --------------------------------- |
| First     | B          | [SMTP:j.vandenboele@domain.local]  | The first character of nickname   |
|           | BP         | [SMTP:j.vandenboele@domain.local]  | FamilyName prefix, spaces removed |
|           | P          | [SMTP:j.vandenboele@domain.local]  | FamilyName                        |
|           | PB         | [SMTP:j.vandenboele@domain.local]  |                                   |
| Second    | B          | [SMTP:j.vandenboele1@domain.local] | Iterate, starting at 1            |
|           | BP         | [SMTP:j.vandenboele1@domain.local] |                                   |
|           | P          | [SMTP:j.vandenboele1@domain.local] |                                   |
|           | PB         | [SMTP:j.vandenboele1@domain.local] |                                   |
| Third     | B          | [SMTP:j.vandenboele2@domain.local] |                                   |
|           | BP         | [SMTP:j.vandenboele2@domain.local] |                                   |
|           | P          | [SMTP:j.vandenboele2@domain.local] |                                   |
|           | PB         | [SMTP:j.vandenboele2@domain.local] |                                   |

## [Option 11: hc.vanden.boele@domain.local](./Scripts/generateProxyAddressesOption11.js)

| Iteration | Convention | Value                                         | Remark                                                                    |
| --------- | ---------- | --------------------------------------------- | ------------------------------------------------------------------------- |
| First     | B          | [SMTP:hc.vanden.boele@domain.local]           | Initials, dots removed                                                    |
|           | BP         | [SMTP:hc.vanden.boele-de.vries@domain.local]  | FamilyName and or partnername prefix based on convention , spaces removed |
|           | P          | [SMTP:hc.de.vries@domain.local]               | FamilyName and or partnername based on convention                         |
|           | PB         | [SMTP:hc.de.vries-vanden.boele@domain.local]  |                                                                           |
| Second    | B          | [SMTP:hc.vanden.boele2@domain.local]          | Iterate, starting at 2                                                    |
|           | BP         | [SMTP:hc.vanden.boele-de.vries2@domain.local] |                                                                           |
|           | P          | [SMTP:hc.de.vries2@domain.local]              |                                                                           |
|           | PB         | [SMTP:hc.de.vries-vanden.boele2@domain.local] |                                                                           |
| Third     | B          | [SMTP:hc.vanden.boele3@domain.local]          |                                                                           |
|           | BP         | [SMTP:hc.vanden.boele-de.vries3@domain.local] |                                                                           |
|           | P          | [SMTP:hc.de.vries3@domain.local]              |                                                                           |
|           | PB         | [SMTP:hc.de.vries-vanden.boele3@domain.local] |                                                                           |