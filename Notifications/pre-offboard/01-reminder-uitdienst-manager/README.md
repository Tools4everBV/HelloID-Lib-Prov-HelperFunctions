# Pre-offboarding – Herinnering uitdienst naar manager

## Omschrijving

Deze notificatie wordt verstuurd naar de leidinggevende vóór de einddatum van een medewerker (pre-offboarding).

De mail herinnert de manager eraan dat het dienstverband van een medewerker binnenkort eindigt en adviseert om tijdig werkzaamheden, overdracht en afspraken af te ronden.

**Let op:** Deze notificatie vereist pre-offboarding configuratie in HelloID (aantal dagen voor einddatum).

## Configuratie

### Event
- **Pre-offboard** - X dagen vóór de einddatum (configureerbaar in HelloID)

### Van
- `no-reply@helloid.com` of een eigen domein
- Zie [From adres configureren](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) voor meer informatie

### Naar
- Primaire manager
- Variabele: `{{ Manager.Accounts.MicrosoftActiveDirectory.mail || Manager.PrimaryManager.Email || "fallbackemailadres@domein.nl" }}`
- **Let op:** Pas `fallbackemailadres@domein.nl` aan naar een geldig e-mailadres voor jouw organisatie
- Voor meer informatie over variabelen, zie [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

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

### Notificatie aanmaken

1. Zorg dat pre-offboarding is geconfigureerd in HelloID (aantal dagen voor einddatum)
2. Open in HelloID Provisioning de **Notification Configuration**
3. Klik op **Nieuwe notificatie maken**
4. Vul de volgende velden in:
   - **Name**: Geef de notificatie een herkenbare naam (bijv. "Pre-offboard - Reminder manager")
   - **Event**: Selecteer **Pre-offboard**
   - **Target System**: Selecteer het primaire doelsysteem (bijv. Active Directory)
   - **Notification System**: Laat staan op **Email** (standaard)
   - **Let op:** Deze template is gemaakt voor het doelsysteem Microsoft Active Directory. Bij gebruik van een ander doelsysteem moeten de variabelen in de template aangepast worden

### Template importeren

5. Ga naar het tabblad **Message**
6. Klik rechts bovenin de toolbar op het **Import MJML** icoon (download icoon)
7. Open het bestand `template.mjml` uit deze map en kopieer de volledige inhoud
8. Plak de MJML code in het import scherm
9. Vervang in de code de URL `https://customer.helloid.training` (in de `mj-image src`) door de URL van je eigen HelloID portal
10. Klik op **Import**

### Configuratie invullen

11. Ga naar het tabblad **Configuration**
12. Vul de velden in zoals beschreven in de sectie **Configuratie** bovenaan deze README:
    - **Onderwerp**
    - **Afzender** (Van)
    - **Ontvanger** (Naar)
13. Configureer eventueel CC en/of BCC indien gewenst (bijvoorbeeld naar HR of P&O)

### Afronden

14. Bekijk het tabblad **Message** opnieuw en pas indien nodig de inhoud verder aan
15. Eventuele filters kunnen worden ingesteld (zie sectie **Filter** bovenaan)
16. Klik op **Opslaan**
17. Test de notificatie met een testaccount met einddatum in de toekomst

## Aandachtspunten

### Pre-offboard configuratie

Pre-offboard notificaties vereisen een speciale configuratie in HelloID:

1. **Person Lifecycle inschakelen** - Pre-offboarding moet worden geconfigureerd in de person lifecycle settings van HelloID
2. **Aantal dagen instellen** - Configureer hoeveel dagen vóór de einddatum de notificatie moet worden verstuurd
3. **Timing overwegen** - Kies een periode die voldoende tijd geeft voor overdracht en afronding van werkzaamheden
   - Aanbeveling: 7-14 dagen voor einddatum
   - Te vroeg: manager kan het vergeten
   - Te laat: te weinig tijd voor goede overdracht

Voor meer informatie over het configureren van pre-offboarding, zie [Pre-offboarding notification event](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notification-events--provisioning-.html#pre-offboarding-notification-event).

### Overige aandachtspunten

- Overweeg CC naar HR of P&O voor administratieve afhandeling
- Deze mail is informatief, de verdere afhandeling loopt via HR-procedures
