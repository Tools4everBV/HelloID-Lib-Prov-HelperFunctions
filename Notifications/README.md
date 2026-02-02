# HelloID Provisioning – Notification Templates

Deze map bevat herbruikbare MJML-templates voor notificaties binnen HelloID Provisioning.

De notificaties zijn gebaseerd op:
- de standaard HelloID notificatie-templates
- praktijkervaring bij klantimplementaties
- een bewuste afbakening om mailoverload te voorkomen

De templates zijn bedoeld als startpunt. Ze kunnen per klant worden geïmporteerd in HelloID en daar verder worden afgestemd, bijvoorbeeld ontvangers, filters of onderwerp.

---

## Structuur

De notificaties zijn ingedeeld per provisioning event:

```
notifications/
  create/
  enable/
  update/
  disable/
  pre-offboard/
```

Binnen elk event staan één of meerdere varianten.  
Elke variant heeft een eigen map met:

- `template.mjml`  
  De volledige MJML-template die direct in HelloID kan worden geïmporteerd.

- `README.md`  
  Toelichting op doel, ontvanger, gebruik en aandachtspunten van de notificatie.

De nummering (`01-`, `02-`, …) maakt de volgorde en onderlinge samenhang expliciet en zorgt ervoor dat uitbreidingen later eenvoudig kunnen worden toegevoegd.

---

## Overzicht notificaties

### Create
Notificaties die worden verstuurd bij het aanmaken van een account.

- **01-manager-account-details**  
  Informeert de manager over de accountgegevens van een nieuwe medewerker (zonder wachtwoord)
  
- **02-manager-account-password**  
  Stuurt het tijdelijke wachtwoord in een aparte mail naar de manager (voor security)
  
- **03-applicatiebeheer-nieuwe-medewerker**  
  Notificatie naar applicatiebeheer over nieuwe medewerker voor handmatige toegangsverlening

### Enable
Notificaties die worden verstuurd wanneer een account actief wordt.

- **01-welkom-medewerker**  
  Welkomstmail naar nieuwe medewerker met instructies voor wachtwoord instellen via SSPR
  
- **02-welkom-medewerker-sspr**  
  Uitgebreide variant met gedetailleerde SSPR instructies (helpt supportvragen te verminderen)

### Update
Notificaties bij wijzigingen in bestaande accounts.

- **01-afdelingswijziging-applicatiebeheer**  
  Notificatie naar applicatiebeheer bij afdelingswijziging voor toegangsbeheer

### Pre-offboard
Notificaties voorafgaand aan uitdienst.

- **01-reminder-uitdienst-manager**  
  Herinnert manager X dagen voor einddatum aan uitdienst voor tijdige overdracht  

### Disable
Notificaties bij het deactiveren van accounts.

- **01-uitdienst-applicatiebeheer**  
  Informeert applicatiebeheer over uitdiensttreding voor handmatige account deactivering

---

## Gebruik

### Algemeen

Elke notificatie heeft een eigen README met gedetailleerde instructies. De algemene stappen zijn:

1. Open in HelloID Provisioning de **Notification Configuration**
2. Klik op **Nieuwe notificatie maken**
3. Vul de basisvelden in (Name, Event, Target System)
4. Importeer de `template.mjml` via het **Import MJML** icoon (download icoon)
5. Vervang de URL `https://customer.helloid.training` door je eigen HelloID portal URL
6. Configureer ontvanger(s), onderwerp en eventuele filters
7. Test de notificatie grondig voordat je deze in productie neemt

**Let op:** Alle templates zijn gemaakt voor het doelsysteem **Microsoft Active Directory**. Bij gebruik van een ander doelsysteem moeten de variabelen in de templates aangepast worden.

### From adres configureren

Voor het configureren van een custom 'from' adres, zie de [HelloID documentatie](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails).

### Variabelen

Voor meer informatie over beschikbare variabelen in notificaties, zie de [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html).

### Filters

Voor het instellen van conditional notifications (filters), zie [Custom notification events](https://docs.helloid.com/en/provisioning/notifications--provisioning-/custom-notification-events--conditional-notifications-.html).

---

## Aandachtspunten

- Alle templates zijn opgesteld in het **Nederlands**
- Templates bevatten geen klant-specifieke informatie - deze moet je zelf invullen
- Test notificaties altijd eerst met testaccounts voordat je ze in productie neemt
- Overweeg CC/BCC voor escalaties of logging naar andere afdelingen

### Pre-offboard configuratie

Pre-offboard notificaties vereisen een speciale configuratie in HelloID:

1. **Person Lifecycle inschakelen** - Pre-offboarding moet worden geconfigureerd in de person lifecycle settings
2. **Aantal dagen instellen** - Bepaal hoeveel dagen vóór de einddatum de notificatie moet worden verstuurd
3. **Timing overwegen** - Kies een periode die voldoende tijd geeft voor overdracht (aanbeveling: 7-14 dagen)

Voor meer informatie, zie [Pre-offboarding notification event](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notification-events--provisioning-.html#pre-offboarding-notification-event).

