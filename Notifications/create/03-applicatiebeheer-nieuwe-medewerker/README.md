# Aanmaken account – Notificatie naar applicatiebeheer

## Omschrijving

Deze notificatie wordt verstuurd naar applicatiebeheerders wanneer een nieuw account wordt aangemaakt. 

De mail informeert beheerders dat er een nieuwe medewerker start en bevat de relevante accountgegevens, zodat zij waar nodig toegang kunnen verlenen tot applicaties die niet via HelloID worden beheerd.

## Configuratie

### Event
- **Create** - Bij het aanmaken van een account

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Applicatiebeheer (vast e-mailadres, bijvoorbeeld `applicatiebeheer@domein.nl`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC

### Onderwerp
- `Nieuwe medewerker – {{person.displayName}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Alleen voor afdeling A, B en C waar specifieke applicaties nodig zijn
- Let op: Dit zijn primaire contractgegevens

## Gebruik

1. Importeer `template.mjml` in HelloID
2. Configureer het event type op **Create**
3. Stel de ontvanger in op het applicatiebeheer e-mailadres
4. Pas het filter aan voor afdelingen die specifieke applicaties nodig hebben
5. Test de notificatie met een testaccount

## Variabelen

Deze template maakt gebruik van:
- `{{person.displayName}}`
- `{{person.primaryContract.startDate}}`
- `{{person.primaryContract.title}}`
- `{{data.samAccountName}}`
- `{{data.mail}}`
- `{{person.externalId}}`
- `{{person.primaryContract.department}}`
- `{{person.primaryContract.endDate}}`
- `{{person.contact.business.email}}`

## Aandachtspunten

- Gebruik filters om alleen relevante afdelingen te notificeren
- Overweeg aparte notificaties per applicatie/systeem indien nodig
- Deze mail bevat geen wachtwoord