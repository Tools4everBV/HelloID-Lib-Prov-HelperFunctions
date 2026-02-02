# Aanmaken account – Notificatie naar applicatiebeheer

## Omschrijving

Deze notificatie wordt verstuurd naar applicatiebeheerders wanneer een nieuw account wordt aangemaakt. 

De mail informeert beheerders dat er een nieuwe medewerker start en bevat de relevante accountgegevens, zodat zij waar nodig toegang kunnen verlenen tot applicaties die niet via HelloID worden beheerd.

## Configuratie

### Event
- **Create** - Bij het aanmaken van een account

### Van
- `no-reply@helloid.com` of een eigen domein
- Zie [From adres configureren](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) voor meer informatie

### Naar
- Applicatiebeheer (vast e-mailadres, bijvoorbeeld `applicatiebeheer@domein.nl`)
- **Let op:** Pas het e-mailadres aan naar het juiste adres voor jouw organisatie
- Voor meer informatie over variabelen, zie [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Onderwerp
- `Nieuwe medewerker – {{person.displayName}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Alleen voor afdeling A, B en C waar specifieke applicaties nodig zijn
- Let op: Dit zijn primaire contractgegevens

## Gebruik

### Notificatie aanmaken

1. Open in HelloID Provisioning de **Notification Configuration**
2. Klik op **Nieuwe notificatie maken**
3. Vul de volgende velden in:
   - **Name**: Geef de notificatie een herkenbare naam (bijv. "Create - Notificatie applicatiebeheer")
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
14. Pas het filter aan voor afdelingen die specifieke applicaties nodig hebben (zie sectie **Filter** bovenaan)
15. Klik op **Opslaan**

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