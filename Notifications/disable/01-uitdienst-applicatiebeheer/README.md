# Deactiveren account – Notificatie naar applicatiebeheer

## Omschrijving

Deze notificatie wordt verstuurd naar applicatiebeheerders wanneer een account wordt gedeactiveerd omdat een medewerker uit dienst gaat.

De mail informeert beheerders over het uitdiensttreden en bevat de relevante accountgegevens en einddatum, zodat zij waar nodig het account kunnen deactiveren in applicaties die niet via HelloID worden beheerd.

## Configuratie

### Event
- **Disable** - Bij het deactiveren van een account

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Applicatiebeheer (vast e-mailadres, bijvoorbeeld `applicatiebeheer@domein.nl`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC

### Onderwerp
- `Medewerker uit dienst – {{person.displayName}}`
- Of specifieker: `Afmelden applicatie X – {{person.displayName}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Alleen voor afdeling A, B en C waar specifieke applicaties worden gebruikt
- Let op: Dit zijn primaire contractgegevens

## Gebruik

1. Importeer `template.mjml` in HelloID
2. Configureer het event type op **Disable**
3. Stel de ontvanger in op het applicatiebeheer e-mailadres
4. Pas eventueel het filter aan voor afdelingen met specifieke applicaties
5. Pas het onderwerp aan indien nodig
6. Test de notificatie met een testaccount

## Variabelen

Deze template maakt gebruik van:
- `{{person.displayName}}`
- `{{person.primaryContract.endDate}}`
- `{{data.samAccountName}}`
- `{{data.mail}}`
- `{{person.externalId}}`
- `{{person.primaryContract.department}}`
- `{{person.primaryContract.title}}`
- `{{person.contact.business.email}}`

## Aandachtspunten

- Deze mail wordt verstuurd bij disable, wat meestal op de laatste werkdag gebeurt
- Overweeg `pre-offboard` notificaties voor tijdige vooraankondiging
- Gebruik filters om alleen relevante afdelingen te notificeren
- De einddatum kan gebruikt worden voor planningsoverwegingen
