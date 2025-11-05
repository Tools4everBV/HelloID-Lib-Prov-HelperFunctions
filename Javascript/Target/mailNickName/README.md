# HelloID Provisioning Target generate mailNickName

## [Option 1: janine.vandenboele](./Scripts/generateMailNickNameOption1.js)

| Iteration      | Convention    | Value                  | Remark                                                             |
| -------------- | ------------- | ---------------------- | ------------------------------------------------------------------ |
| First          | B             | janine.vandenboele     | FamilyName                                                         |
| If in use      | B             | j.vandenboele          | First character of nickname                                        |
| If also in use | B             | ja.vandenboele         | First two characters of nickname                                   |
| If also in use | B             | jan.vandenboele        | First three characters of nickname                                 |
| If also in use | B             | jani.vandenboele       | First four characters of nickname                                  |
| If also in use | B             | janin.vandenboele      | First five characters of nickname                                  |
| If also in use | B             | janine.vandenboele2    | If full nickname is reached, append with iterator, starting with 2 |
