# Pre-offboarding – Herinnering uitdienst naar manager

## Omschrijving

Deze notificatie wordt verstuurd naar de leidinggevende vóór de einddatum van een medewerker (pre-offboarding).

De mail herinnert de manager eraan dat het dienstverband van een medewerker binnenkort eindigt en adviseert om tijdig werkzaamheden, overdracht en afspraken af te ronden.

**Let op:** Deze notificatie vereist pre-offboarding configuratie in HelloID (aantal dagen voor einddatum).

## Configuratie

### Event
- **Pre-offboard** - X dagen vóór de einddatum (configureerbaar in HelloID)

### Van
- `no-reply@helloid.com` (of eigen domein, zie [Set up HelloID](https://docs.helloid.com))

### Naar
- Primaire manager (`{{person.primaryManager.displayName}}`)
- Er kan ook gebruik gemaakt worden van CC en/of BCC (bijvoorbeeld naar HR)

### Onderwerp
- `Herinnering uitdienst medewerker – {{person.displayName}}`
- Of: `Binnenkort uit dienst – {{person.displayName}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Alleen voor specifieke afdelingen of bedrijven
- Let op: Dit zijn primaire contractgegevens

### Pre-offboard timing
- Configureer in HelloID hoeveel dagen vóór de einddatum deze notificatie moet worden verstuurd
- Aanbeveling: 7-14 dagen voor einddatum

## Gebruik

1. Zorg dat pre-offboarding is geconfigureerd in HelloID
2. Importeer `template.mjml` in HelloID
3. Configureer het event type op **Pre-offboard**
4. Stel het aantal dagen vóór einddatum in
5. Stel de ontvanger in op de primaire manager
6. Test de notificatie met een testaccount met einddatum in de toekomst

## Variabelen

Deze template maakt gebruik van:
- `{{person.primaryManager.displayName}}`
- `{{person.displayName}}`
- `{{person.primaryContract.endDate}}`

## Aandachtspunten

- Vereist pre-offboarding configuratie in HelloID
- Bepaal zorgvuldig het aantal dagen vooraf (niet te vroeg, niet te laat)
- Overweeg CC naar HR of P&O voor administratieve afhandeling
- Deze mail is informatief, de verdere afhandeling loopt via HR-procedures
- Test met verschillende einddata om timing te verifiëren
