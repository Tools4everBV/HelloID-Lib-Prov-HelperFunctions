# Change Log

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [1.1.1] - 2026-11-25

### Fixed
- Notification templates: corrected person variables (`name.givenName`, `primaryContract.title.name`, `primaryContract.department.displayName`), and `primaryContract.company` (not in the person model) is replaced by `primaryContract.employer.name`.
- Welcome notification READMEs explain that, depending on the source system, `employer` or `organization` holds the company name.

## [1.1.0] - 2026-11-23

### Changed
- Mail, ProxyAddresses and UserPrincipalName option 3: the second iteration uses the first two letters of the nickname (initials are no longer used); identical prefixes are skipped for nicknames of one or two characters.
- Mail, ProxyAddresses and UserPrincipalName option 8: the second iteration uses `_` as separator, the numeric suffix starts at the third iteration (`02`) and a family name prefix is added without dots.
- Mail, ProxyAddresses and UserPrincipalName option 4: a person with one initial no longer skips the first iteration.
- Mail option 12 and mailNickName option 1: the numeric suffix starts when the full nickname is used again.
- sAMAccountName option 8: the first iteration with a suffix keeps the full part of the family name (`hboel2` instead of `hboe2`).
- Surname option 2: the first letter of the partner prefix is capitalized.
- READMEs, code comments and scripts of the target examples are in sync again.

### Fixed
- The maximum length of the mail, proxy address and UPN examples takes the `@` into account.
- Typos in the comments of Mail option 12, Mail option 14 and ProxyAddresses option 12, and wrong script references in Surname option 2 and sAMAccountName option 6.
- Duplicate `convertDate` function in Password option 2.
## [1.0.0] - 2026-11-23

### Added
- Mail option 15 (`generateMailOption15.js`) with README documentation: first letter of the nickname, initials separated by dots, full nickname, then a numeric suffix.
- `inConditionExample.js`: example to list the titles of the contracts that are in condition.
- GitHub workflows `createRelease.yaml` and `verifyChangelog.yaml`.
- This CHANGELOG.
