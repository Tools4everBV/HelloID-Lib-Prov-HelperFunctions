# HelloID Provisioning Target generate Mail

## [Option 1: janine.vandenboele@domain.local](./Scripts/generateMailOption1.js)

| Iteration | Convention | Value                            | Remark                              |
| --------- | ---------- | -------------------------------- | ----------------------------------- |
| First     | B          | janine.vandenboele@domain.local  | FamilyName                          |
|           | BP         | janine.vandenboele@domain.local  |                                     |
|           | P          | janine.vandenboele@domain.local  |                                     |
|           | PB         | janine.vandenboele@domain.local  |                                     |
| Second    | B          | j.vandenboele@domain.local       | The first character of the nickname |
|           | BP         | j.vandenboele@domain.local       |                                     |
|           | P          | j.vandenboele@domain.local       |                                     |
|           | PB         | j.vandenboele@domain.local       |                                     |
| Third     | B          | janine.vandenboele2@domain.local |                                     |
|           | BP         | janine.vandenboele2@domain.local |                                     |
|           | P          | janine.vandenboele2@domain.local |                                     |
|           | PB         | janine.vandenboele2@domain.local |                                     |


## [Option 2: j.devries@domain.local](./Scripts/generateMailOption2.js)

| Iteration | Convention | Value                            | Remark                              |
| --------- | ---------- | -------------------------------- | ----------------------------------- |
| First     | B          | j.vandenboele@domain.local       | The first character of the nickname |
|           | BP         | j.vandenboele@domain.local       | FamilyName                          |
|           | P          | j.devries@domain.local           | FamilyNamePartner                   |
|           | PB         | j.devries@domain.local           |                                     |
| Second    | B          | ja.vandenboele@domain.local      |                                     |
|           | BP         | ja.vandenboele@domain.local      |                                     |
|           | P          | ja.devries@domain.local          |                                     |
|           | PB         | ja.devries@domain.local          |                                     |
| Third     | B          | janine.vandenboele@domain.local  |                                     |
|           | BP         | janine.vandenboele@domain.local  |                                     |
|           | P          | janine.devries@domain.local      |                                     |
|           | PB         | janine.devries@domain.local      |                                     |
| Fourth    | B          | janine.vandenboele2@domain.local |                                     |
|           | BP         | janine.vandenboele2@domain.local |                                     |
|           | P          | janine.devries2@domain.local     |                                     |
|           | PB         | janine.devries2@domain.local     |                                     |

## [Option 3: janine.devries@domain.local](./Scripts/generateMailOption3.js)

| Iteration | Convention | Value                            | Remark                                     |
| --------- | ---------- | -------------------------------- | ------------------------------------------ |
| First     | B          | janine.vandenboele@domain.local  | FamilyName                                 |
|           | BP         | janine.vandenboele@domain.local  |                                            |
|           | P          | janine.devries@domain.local      | FamilyNamePartner                          |
|           | PB         | janine.devries@domain.local      |                                            |
| Second    | B          | j.h.c.vandenboele@domain.local   | initials, when length equals one then skip |
|           | BP         | j.h.c.vandenboele@domain.local   |                                            |
|           | P          | j.h.c.devries@domain.local       |                                            |
|           | PB         | j.h.c.devries@domain.local       |                                            |
| Third     | B          | j.vandenboele@domain.local       | The first character of the nickname        |
|           | BP         | j.vandenboele@domain.local       |                                            |
|           | P          | j.devries@domain.local           |                                            |
|           | PB         | j.devries@domain.local           |                                            |
| ......... | .........  | .........                        | .........                                  |
| Seventh   | B          | janin.vandenboele@domain.local   | The first seven characters of the nickname |
|           | BP         | janin.vandenboele@domain.local   |                                            |
|           | P          | janin.devries@domain.local       |                                            |
|           | PB         | janin.devries@domain.local       |                                            |
| Eighth    | B          | janine.vandenboele2@domain.local |                                            |
|           | BP         | janine.vandenboele2@domain.local |                                            |
|           | P          | janine.devries2@domain.local     |                                            |
|           | PB         | janine.devries2@domain.local     |                                            |

## [Option 4: jvandenboele@domain.local](./Scripts/generateMailOption4.js)

| Iteration | Convention | Value                           | Remark                                   |
| --------- | ---------- | ------------------------------- | ---------------------------------------- |
| First     | B          | jvandenboele@domain.local       | The first character of the nickname      |
|           | BP         | jvandenboele@domain.local       | FamilyName                               |
|           | P          | jvandenboele@domain.local       |                                          |
|           | PB         | jvandenboele@domain.local       |                                          |
| Second    | B          | javandenboele@domain.local      | The first two characters of the nickname |
|           | BP         | javandenboele@domain.local      |                                          |
|           | P          | javandenboele@domain.local      |                                          |
|           | PB         | javandenboele@domain.local      |                                          |
| ......... | .........  | .........                       | .........                                |
| Seventh   | B          | janinevandenboele@domain.local  |                                          |
|           | BP         | janinevandenboele@domain.local  |                                          |
|           | P          | janinevandenboele@domain.local  |                                          |
|           | PB         | janinevandenboele@domain.local  |                                          |
| Eighth    | B          | janinevandenboele2@domain.local |                                          |
|           | BP         | janinevandenboele2@domain.local |                                          |
|           | P          | janinevandenboele2@domain.local |                                          |
|           | PB         | janinevandenboele2@domain.local |                                          |

## [Option 5: jvandenboele@domain.local](./Scripts/generateMailOption5.js)

| Iteration | Convention | Value                           | Remark                                   |
| --------- | ---------- | ------------------------------- | ---------------------------------------- |
| First     | B          | jvandenboele@domain.local       | The first character of the nickname      |
|           | BP         | jvandenboele@domain.local       | FamilyName                               |
|           | P          | jdevries@domain.local           | FamilyNamePartner                        |
|           | PB         | jdevries@domain.local           |                                          |
| Second    | B          | javandenboele@domain.local      | The first two characters of the nickname |
|           | BP         | javandenboele@domain.local      |                                          |
|           | P          | jadevries@domain.local          |                                          |
|           | PB         | jadevries@domain.local          |                                          |
| ......... | .........  | .........                       | .........                                |
| Seventh   | B          | janinevandenboele@domain.local  |                                          |
|           | BP         | janinevandenboele@domain.local  |                                          |
|           | P          | janinedevries@domain.local      |                                          |
|           | PB         | janinedevries@domain.local      |                                          |
| Eighth    | B          | janinevandenboele2@domain.local |                                          |
|           | BP         | janinevandenboele2@domain.local |                                          |
|           | P          | janinedevries2@domain.local     |                                          |
|           | PB         | janinedevries2@domain.local     |                                          |

## [Option 6: janine.vandenboele@domain.local](./Scripts/generateMailOption6.js)

| Iteration | Convention | Value                           | Remark                              |
| --------- | ---------- | ------------------------------- | ----------------------------------- |
| First     | B          | janine.vandenboele@domain.local | FamilyName                          |
|           | BP         | janine.vandenboele@domain.local |                                     |
|           | P          | janine.vandenboele@domain.local |                                     |
|           | PB         | janine.vandenboele@domain.local |                                     |
| Second    | B          | janine_vandenboele@domain.local |                                     |
|           | BP         | janine_vandenboele@domain.local |                                     |
|           | P          | janine_vandenboele@domain.local |                                     |
|           | PB         | janine_vandenboele@domain.local |                                     |
| Third     | B          | j.vandenboele@domain.local      | The first character of the nickname |
|           | BP         | j.vandenboele@domain.local      |                                     |
|           | P          | j.vandenboele@domain.local      |                                     |
|           | PB         | j.vandenboele@domain.local      |                                     |
| Fourth    | B          | j.vandenboele2@domain.local     |                                     |
|           | BP         | j.vandenboele2@domain.local     |                                     |
|           | P          | j.vandenboele2@domain.local     |                                     |
|           | PB         | j.vandenboele2@domain.local     |                                     |

## [Option 7: janine.vandenboele@domain.local](./Scripts/generateMailOption7.js)

| Iteration | Convention | Value                             | Remark                  |
| --------- | ---------- | --------------------------------- | ----------------------- |
| First     | B          | janine.vandenboele@domain.local   | FamilyName              |
|           | BP         | janine.vandenboele@domain.local   |                         |
|           | P          | janine.vandenboele@domain.local   |                         |
|           | PB         | janine.vandenboele@domain.local   |                         |
| Second    | B          | janine_vandenboele@domain.local   |                         |
|           | BP         | janine_vandenboele@domain.local   |                         |
|           | P          | janine_vandenboele@domain.local   |                         |
|           | PB         | janine_vandenboele@domain.local   |                         |
| Third     | B          | janine.vandenboele02@domain.local | Iterate, starting at 02 |
|           | BP         | janine.vandenboele02@domain.local |                         |
|           | P          | janine.vandenboele02@domain.local |                         |
|           | PB         | janine.vandenboele02@domain.local |                         |
| Fourth    | B          | janine.vandenboele03@domain.local |                         |
|           | BP         | janine.vandenboele03@domain.local |                         |
|           | P          | janine.vandenboele03@domain.local |                         |
|           | PB         | janine.vandenboele03@domain.local |                         |

## [Option 8: jvandenboele@domain.local](./Scripts/generateMailOption8.js)

| Iteration | Convention | Value                      | Remark                                     |
| --------- | ---------- | -------------------------- | ------------------------------------------ |
| First     | B          | jvandenboele@domain.local  | FamilyName or partnername, no combinations |
|           | BP         | jvandenboele@domain.local  |                                            |
|           | P          | jdevries@domain.local      |                                            |
|           | PB         | jdevries@domain.local      |                                            |
| Second    | B          | jvandenboele1@domain.local | Iterate, starting at 1                     |
|           | BP         | jvandenboele1@domain.local |                                            |
|           | P          | jdevries1@domain.local     |                                            |
|           | PB         | jdevries1@domain.local     |                                            |
| Third     | B          | jvandenboele2@domain.local |                                            |
|           | BP         | jvandenboele2@domain.local |                                            |
|           | P          | jdevries2@domain.local     |                                            |
|           | PB         | jdevries2@domain.local     |                                            |
| Fourth    | B          | jvandenboele3@domain.local |                                            |
|           | BP         | jvandenboele3@domain.local |                                            |
|           | P          | jdevries3@domain.local     |                                            |
|           | PB         | jdevries3@domain.local     |                                            |

## [Option 9: j.vandenboele@domain.local](./Scripts/generateMailOption9.js)

| Iteration | Convention | Value                           | Remark                                   |
| --------- | ---------- | ------------------------------- | ---------------------------------------- |
| First     | B          | j.vandenboele@domain.local      | The first character of the nickname      |
|           | BP         | j.vandenboele@domain.local      | FamilyName                               |
|           | P          | j.vandenboele@domain.local      |                                          |
|           | PB         | j.vandenboele@domain.local      |                                          |
| Second    | B          | janine.vandenboele@domain.local | Start with the full nickname             |
|           | BP         | janine.vandenboele@domain.local |                                          |
|           | P          | janine.vandenboele@domain.local |                                          |
|           | PB         | janine.vandenboele@domain.local |                                          |
| Third     | B          | ja.vandenboele@domain.local     | The first two characters of the nickname |
|           | BP         | ja.vandenboele@domain.local     |                                          |
|           | P          | ja.vandenboele@domain.local     |                                          |
|           | PB         | ja.vandenboele@domain.local     |                                          |
| ......... | .........  | .........                       | .........                                |
| Seventh   | B          | janin.vandenboele@domain.local  |                                          |
|           | BP         | janin.vandenboele@domain.local  |                                          |
|           | P          | janin.vandenboele@domain.local  |                                          |
|           | PB         | janin.vandenboele@domain.local  |                                          |
| Eighth    | B          | j.vandenboele2@domain.local     |                                          |
|           | BP         | j.vandenboele2@domain.local     |                                          |
|           | P          | j.vandenboele2@domain.local     |                                          |
|           | PB         | j.vandenboele2@domain.local     |                                          |

## [Option 10: j.vandenboele@domain.local](./Scripts/generateMailOption10.js)

| Iteration | Convention | Value                              | Remark                                  |
| --------- | ---------- | ---------------------------------- | --------------------------------------- |
| First     | B          | janine.van.den.boele@domain.local  | Full nickname                           |
|           | BP         | janine.van.den.boele@domain.local  | FamilyName prefix, spaces replaced by . |
|           | P          | janine.de.vries@domain.local       | FamilyName                              |
|           | PB         | janine.de.vries@domain.local       |                                         |
| Second    | B          | janine.van.den.boele2@domain.local | Iterate, starting at 2                  |
|           | BP         | janine.van.den.boele2@domain.local |                                         |
|           | P          | janine.de.vries2@domain.local      |                                         |
|           | PB         | janine.de.vries2@domain.local      |                                         |
| Third     | B          | janine.van.den.boele3@domain.local |                                         |
|           | BP         | janine.van.den.boele3@domain.local |                                         |
|           | P          | janine.de.vries3@domain.local      |                                         |
|           | PB         | janine.de.vries3@domain.local      |                                         |

## [Option 11: j.vandenboele@domain.local](./Scripts/generateMailOption11.js)

| Iteration | Convention | Value                            | Remark                                   |
| --------- | ---------- | -------------------------------= | ---------------------------------------- |
| First     | B          | janine.vandenboele@domain.local  | The full nickname                        |
|           | BP         | janine.vandenboele@domain.local  | FamilyName                               |
|           | P          | janine.devries@domain.local      | FamilyNamePartner                        |
|           | PB         | janine.devries@domain.local      |                                          |
| Second    | B          | j.vandenboele@domain.local       | The first character of the nickname      |
|           | BP         | j.vandenboele@domain.local       |                                          |
|           | P          | j.devries@domain.local           |                                          |
|           | PB         | j.devries@domain.local           |                                          |
| Third     | B          | ja.vandenboele@domain.local      | The first two characters of the nickname |
|           | BP         | ja.vandenboele@domain.local      |                                          |
|           | P          | ja.devries@domain.local          |                                          |
|           | PB         | ja.devries@domain.local          |                                          |
| ......... | .........  | .........                        | .........                                |
| Sixth     | B          | janin.vandenboele@domain.local   |                                          |
|           | BP         | janin.vandenboele@domain.local   |                                          |
|           | P          | janin.devries@domain.local       |                                          |
|           | PB         | janin.devries@domain.local       |                                          |
