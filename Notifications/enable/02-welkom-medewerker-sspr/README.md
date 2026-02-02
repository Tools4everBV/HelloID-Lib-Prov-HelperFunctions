# Activeren account – Welkomstbericht SSPR (uitgebreid)

## Omschrijving

Deze notificatie is een uitgebreidere variant van `01-welkom-medewerker` en wordt verstuurd naar de nieuwe medewerker wanneer het account wordt geactiveerd.

De mail bevat:
- Welkomstbericht
- Gedetailleerde stap-voor-stap instructies voor SSPR
- Expliciete uitleg over mobiel nummer verificatie
- Praktische tips voor eerste keer inloggen

**Verschil met variant 01:** Deze versie legt expliciet uit hoe het bevestigen van het mobiele nummer werkt, wat helpt om supportvragen te verminderen.

## Configuratie

### Event
- **Enable** - Bij het activeren van een account

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Zakelijke e-mail van de nieuwe medewerker (`{{data.mail}}` of `{{person.contact.business.email}}`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC

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
4. Pas eventueel het filter aan per bedrijf
5. Test de notificatie met een testaccount

## Variabelen

Deze template maakt gebruik van:
- `{{person.name.nickName}}`
- `{{person.name.givenname}}`
- `{{person.primaryContract.company}}`

## Aandachtspunten

- Geschikt voor medewerkers die mogelijk minder technisch zijn
- Helpt om supportvragen over SSPR te verminderen
- De medewerker moet een mobiel nummer geregistreerd hebben
- Uitgebreidere instructies maken de mail wel langer
