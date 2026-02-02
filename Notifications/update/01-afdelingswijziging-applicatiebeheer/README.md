# Bijwerken account – Afdelingswijziging naar applicatiebeheer

## Omschrijving

Deze notificatie wordt verstuurd naar applicatiebeheerders wanneer een medewerker van afdeling wijzigt.

De mail informeert beheerders dat een medewerker mogelijk toegang nodig heeft tot een applicatie die door hen wordt beheerd, zodat zij dit kunnen controleren en waar nodig kunnen inrichten.

## Configuratie

### Event
- **Update** - Bij wijziging van accountgegevens

### Van
- `no-reply@helloid.com` of een eigen domein
- Zie [From adres configureren](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) voor meer informatie

### Naar
- Applicatiebeheer (vast e-mailadres, bijvoorbeeld `applicatiebeheer@domein.nl`)
- **Let op:** Pas het e-mailadres aan naar het juiste adres voor jouw organisatie
- Voor meer informatie over variabelen, zie [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Onderwerp
- `Aanmelden applicatie X` (pas aan naar specifieke applicatie)
- Of algemener: `Accountwijziging medewerker`

### Filter (verplicht)
- **Filteren op de nieuwe afdeling** is essentieel voor deze notificatie
- Voorbeeld: Alleen wanneer iemand de primaire afdeling X krijgt
- Let op: Filteren kan op gegevens van het primaire doelsysteem (bijv. AD)
- Dit zijn primaire contractgegevens

## Gebruik

### Notificatie aanmaken

1. Open in HelloID Provisioning de **Notification Configuration**
2. Klik op **Nieuwe notificatie maken**
3. Vul de volgende velden in:
   - **Name**: Geef de notificatie een herkenbare naam (bijv. "Update - Afdelingswijziging applicatiebeheer")
   - **Event**: Selecteer **Update**
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
    - **Onderwerp** (pas aan naar de specifieke applicatie)
    - **Afzender** (Van)
    - **Ontvanger** (Naar)
12. Configureer eventueel CC en/of BCC indien gewenst

### Afronden

13. Bekijk het tabblad **Message** opnieuw en pas indien nodig de inhoud verder aan
14. **Verplicht:** Configureer een filter op de specifieke afdeling(en) (zie sectie **Filter** bovenaan)
15. Klik op **Opslaan**
16. Test de notificatie door een testaccount naar de gefilterde afdeling te verplaatsen

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

