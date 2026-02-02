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
- `no-reply@helloid.com` of een eigen domein
- Zie [From adres configureren](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) voor meer informatie

### Naar
- Primaire manager
- Variabele: `{{ Manager.Accounts.MicrosoftActiveDirectory.mail || Manager.PrimaryManager.Email || "fallbackemailadres@klantnaam.nl" }}`
- **Let op:** Pas `fallbackemailadres@klantnaam.nl` aan naar een geldig e-mailadres voor jouw organisatie
- Voor meer informatie over variabelen, zie [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Onderwerp
- `Nieuwe medewerker – {{person.displayName}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Alleen voor afdeling A, B en C
- Let op: Dit zijn primaire contractgegevens
- **Gebruik hetzelfde filter als bij `01-manager-account-details`**

## Gebruik

### Notificatie aanmaken

1. Open in HelloID Provisioning de **Notification Configuration**
2. Klik op **Nieuwe notificatie maken**
3. Vul de volgende velden in:
   - **Name**: Geef de notificatie een herkenbare naam (bijv. "Create - Wachtwoord naar manager")
   - **Event**: Selecteer **Create**
   - **Target System**: Selecteer het primaire doelsysteem (bijv. Active Directory)
   - **Notification System**: Laat staan op **Email** (standaard)
   - **Let op:** Deze template is gemaakt voor het doelsysteem Microsoft Active Directory. Bij gebruik van een ander doelsysteem moeten de variabelen in de template aangepast worden

### Template importeren

4. Ga naar het tabblad **Message**
5. Klik rechts bovenin de toolbar op het **Import MJML** icoon (download icoon)
6. Open het bestand `template.mjml` uit deze map en kopieer de volledige inhoud
7. Plak de MJML code in het import scherm
8. Vervang in de code de URL `https://customer.helloid.training` (in de `mj-image src`) door de URL van je eigen HelloID portal
9. Klik op **Import**

### Configuratie invullen

10. Ga naar het tabblad **Configuration**
11. Vul de velden in zoals beschreven in de sectie **Configuratie** bovenaan deze README:
    - **Onderwerp**
    - **Afzender** (Van)
    - **Ontvanger** (Naar)
12. Configureer eventueel CC en/of BCC indien gewenst

### Afronden

13. Bekijk het tabblad **Message** opnieuw en pas indien nodig de inhoud verder aan
14. **Gebruik hetzelfde filter** als bij notificatie `01-manager-account-details`
15. Klik op **Opslaan**

## Aandachtspunten

- Deze notificatie moet **altijd samen** met `01-manager-account-details` worden gebruikt
- Gebruik **identieke filters** voor beide notificaties
- Het wachtwoord is alleen beschikbaar tijdens het create event
