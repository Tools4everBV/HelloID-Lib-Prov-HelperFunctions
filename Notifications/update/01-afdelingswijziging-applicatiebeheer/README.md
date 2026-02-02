# Bijwerken account – Afdelingswijziging naar applicatiebeheer

## Omschrijving

Deze notificatie wordt verstuurd naar applicatiebeheerders wanneer een medewerker van afdeling wijzigt.

De mail informeert beheerders dat een medewerker mogelijk toegang nodig heeft tot een applicatie die door hen wordt beheerd, zodat zij dit kunnen controleren en waar nodig kunnen inrichten.

## Configuratie

### Event
- **Update** - Bij wijziging van accountgegevens

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Applicatiebeheer (vast e-mailadres, bijvoorbeeld `applicatiebeheer@domein.nl`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC

### Onderwerp
- `Aanmelden applicatie X` (pas aan naar specifieke applicatie)
- Of algemener: `Accountwijziging medewerker`

### Filter (verplicht)
- **Filteren op de nieuwe afdeling** is essentieel voor deze notificatie
- Voorbeeld: Alleen wanneer iemand de primaire afdeling X krijgt
- Let op: Filteren kan op gegevens van het primaire doelsysteem (bijv. AD)
- Dit zijn primaire contractgegevens

## Gebruik

1. Importeer `template.mjml` in HelloID
2. Configureer het event type op **Update**
3. Stel de ontvanger in op het applicatiebeheer e-mailadres
4. **Verplicht:** Configureer een filter op de specifieke afdeling(en)
5. Pas het onderwerp aan naar de betreffende applicatie
6. Test de notificatie door een testaccount naar de gefilterde afdeling te verplaatsen

## Variabelen

Deze template maakt gebruik van:
- `{{person.displayName}}`
- `{{data.samAccountName}}`
- `{{data.mail}}`
- `{{person.externalId}}`
- `{{person.primaryContract.department}}`
- `{{person.primaryContract.title}}`
- `{{person.contact.business.email}}`

## Aandachtspunten

- **Filter is essentieel** - zonder filter wordt deze mail bij elke update verstuurd
- Overweeg aparte notificaties per afdeling/applicatie
- Pas het onderwerp aan zodat duidelijk is voor welke applicatie het gaat
- Deze notificatie triggert op wijzigingen, niet op nieuwe accounts

