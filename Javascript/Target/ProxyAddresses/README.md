# HelloID Provisioning Target generate ProxyAddresses

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