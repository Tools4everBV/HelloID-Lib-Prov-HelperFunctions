# Aanmaken account – Wachtwoord naar leidinggevende

## Omschrijving

Deze notificatie wordt verstuurd naar de leidinggevende als aanvulling op de eerste mail (`01-manager-account-details`). 

Om security redenen wordt het wachtwoord in een **aparte mail** verstuurd. Deze mail bevat alleen:
- De naam van de medewerker (voor context)
- Het tijdelijke wachtwoord
- Een reminder dat het wachtwoord moet worden aangepast bij eerste login

Alle overige gegevens staan in de eerste mail.

## Configuratie

### Event
- **Create** - Bij het aanmaken van een account

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Primaire manager (`{{person.primaryManager.displayName}}`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC

### Onderwerp
- `Nieuwe medewerker – {{person.displayName}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Alleen voor afdeling A, B en C
- Let op: Dit zijn primaire contractgegevens
- **Gebruik hetzelfde filter als bij `01-manager-account-details`**

## Gebruik

1. Importeer `template.mjml` in HelloID
2. Configureer het event type op **Create**
3. Stel de ontvanger in op de primaire manager
4. Gebruik **hetzelfde filter** als bij de eerste notificatie
5. Test beide notificaties samen met een testaccount

## Variabelen

Deze template maakt gebruik van:
- `{{person.displayName}}`
- `{{person.primaryManager.displayName}}`
- `{{data.password}}`

## Aandachtspunten

- Deze notificatie moet **altijd samen** met `01-manager-account-details` worden gebruikt
- Gebruik **identieke filters** voor beide notificaties
- Het wachtwoord is alleen beschikbaar tijdens het create event
