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
- `no-reply@helloid.com` of een eigen domein
- Zie [From adres configureren](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) voor meer informatie

### Naar
- Zakelijke e-mail van de nieuwe medewerker
- Variabele: `{{ data.mail }}` of `{{ person.contact.business.email }}`
- Voor meer informatie over variabelen, zie [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Onderwerp
- `Welkom bij {{person.primaryContract.company}}`

### Filter (optioneel)
- Filteren kan op gegevens die op het account van het primaire doelsysteem (bijv. AD) worden geschreven
- Voorbeeld: Filter op bedrijfsnaam (AD veld `Company`) om per bedrijf een aangepast welkomstbericht te sturen
- Let op: Dit zijn primaire contractgegevens

## Gebruik

### Notificatie aanmaken

1. Open in HelloID Provisioning de **Notification Configuration**
2. Klik op **Nieuwe notificatie maken**
3. Vul de volgende velden in:
   - **Name**: Geef de notificatie een herkenbare naam (bijv. "Enable - Welkom medewerker SSPR")
   - **Event**: Selecteer **Enable**
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
14. Pas eventueel het filter aan per bedrijf (zie sectie **Filter** bovenaan)
15. Klik op **Opslaan**

## Aandachtspunten

- Geschikt voor medewerkers die mogelijk minder technisch zijn
- Helpt om supportvragen over SSPR te verminderen
- De medewerker moet een mobiel nummer geregistreerd hebben
- Uitgebreidere instructies maken de mail wel langer
