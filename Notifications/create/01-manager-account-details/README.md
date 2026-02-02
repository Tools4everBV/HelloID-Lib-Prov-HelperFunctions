# Aanmaken account – Gegevens nieuwe medewerker naar leidinggevende

## Omschrijving

Deze notificatie kan gebruikt worden om de leidinggevende te informeren wanneer een nieuw account wordt aangemaakt. De mail bevat de accountgegevens van de nieuwe medewerker (gebruikersnaam, e-mail, personeelsnummer, etc.), maar **geen wachtwoord** vanwege security.

Het wachtwoord wordt in een aparte mail verstuurd (zie `02-manager-account-password`).

## Configuratie

### Event
- **Create** - Bij het aanmaken van een account

### Van
- `no-reply@helloid.com` of een eigen domein
- Zie [From adres configureren](#from-adres-configureren) in de algemene README voor meer informatie

### Naar
- Primaire manager
- Variabele: `{{ Manager.Accounts.MicrosoftActiveDirectory.mail || Manager.PrimaryManager.Email || "fallbackemailadres@klantnaam.nl" }}`
- Er kan ook gebruik gemaakt worden van CC en/of BCC

### Onderwerp
- `Nieuwe medewerker – {{person.displayName}}`

### Filter (optioneel)
- Filteren op specifieke afdelingen, werkgevers of andere criteria kan via custom notification events
- Voorbeeld: Alleen voor afdeling A, B en C van het primaire contract
- Zie [Custom notification events](https://docs.helloid.com/en/provisioning/notifications--provisioning-/custom-notification-events--conditional-notifications-.html) voor meer informatie

## Gebruik

### Notificatie aanmaken

1. Open in HelloID Provisioning de **Notification Configuration**
2. Klik op **Nieuwe notificatie maken**
3. Vul de volgende velden in:
   - **Name**: Geef de notificatie een herkenbare naam (bijv. "Create - Gegevens naar manager")
   - **Event**: Selecteer **Create**
   - **Target System**: Selecteer het primaire doelsysteem (bijv. Active Directory)
   - **Notification System**: Laat staan op **Email** (standaard)

### Template importeren

4. Ga naar het tabblad **Message**
5. Klik rechts bovenin de toolbar op het **Import MJML** icoon (pijl naar beneden met streepje eronder)
6. Open het bestand `template.mjml` en kopieer de volledige inhoud
7. Plak de MJML code in het import scherm
8. Vervang in de code `customer.helloid.training` door de URL van je eigen HelloID portal
9. Klik op **Import**

### Configuratie invullen

10. Ga naar het tabblad **Configuration**
11. Vul de volgende velden in:
    - **Onderwerp**: `Nieuwe medewerker – {{person.displayName}}`
    - **Afzender**: `no-reply@helloid.com` (of eigen domein)
    - **Ontvanger**: `{{ Manager.Accounts.MicrosoftActiveDirectory.mail || Manager.PrimaryManager.Email || "fallbackemailadres@klantnaam.nl" }}`
12. Configureer eventueel CC en/of BCC indien gewenst

### Afronden

13. Bekijk het tabblad **Message** opnieuw en pas indien nodig de inhoud verder aan
14. Eventuele filters kunnen worden ingesteld via [custom notification events](https://docs.helloid.com/en/provisioning/notifications--provisioning-/custom-notification-events--conditional-notifications-.html)
15. Klik op **Opslaan**
