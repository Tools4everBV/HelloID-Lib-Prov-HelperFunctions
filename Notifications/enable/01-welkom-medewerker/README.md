# Activeren account – Welkomstbericht naar nieuwe medewerker

## Omschrijving

Deze notificatie wordt verstuurd naar de nieuwe medewerker wanneer het account wordt geactiveerd (enabled).

De mail bevat een welkomstbericht met instructies voor het instellen van een wachtwoord via Self Service Password Reset (SSPR). De instructies zijn opgedeeld in heldere stappen met praktische tips.

**Let op:** Deze variant is geschikt voor omgevingen waar medewerkers hun wachtwoord zelf kunnen instellen via SSPR met verificatie via mobiel nummer.

## Configuratie

### Event
- **Enable** - Bij het activeren van een account

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Zakelijke e-mail van de nieuwe medewerker (`{{data.mail}}` of `{{person.contact.business.email}}`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC (bijvoorbeeld naar de manager)

### Onderwerp
- `Welkom bij {{person.primaryContract.company}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Filter op bedrijfsnaam (AD veld `Company`) om per bedrijf een aangepast welkomstbericht te sturen
- Let op: Dit zijn primaire contractgegevens

## Gebruik

1. Importeer `template.mjml` in HelloID
2. Configureer het event type op **Enable**
3. Stel de ontvanger in op de zakelijke e-mail van de medewerker
4. Pas eventueel het filter aan per bedrijf of organisatie-eenheid
5. Test de notificatie met een testaccount

## Variabelen

Deze template maakt gebruik van:
- `{{person.name.nickName}}`
- `{{person.name.givenname}}`
- `{{person.primaryContract.company}}`

## Aandachtspunten

- Deze mail is bedoeld voor omgevingen met SSPR
- De medewerker moet een mobiel nummer geregistreerd hebben in het systeem
- Overweeg variant `02-welkom-medewerker-sspr` voor uitgebreidere uitleg
- Pas de instructies aan als een andere wachtwoordmethode wordt gebruikt
