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

- 01-manager-account-details  
- 02-manager-account-password  
- 03-applicatiebeheer-nieuwe-medewerker  

### Enable
Notificaties die worden verstuurd wanneer een account actief wordt.

- 01-welkom-medewerker  
- 02-welkom-medewerker-sspr  

### Update
Notificaties bij wijzigingen in bestaande accounts.

- 01-afdelingswijziging-applicatiebeheer  

### Disable
Notificaties bij het deactiveren van accounts.

- 01-uitdienst-applicatiebeheer  

### Pre-offboard
Notificaties voorafgaand aan uitdienst.

- 01-reminder-uitdienst-manager  

---

## Gebruik

1. Importeer de gewenste `template.mjml` in HelloID.  
2. Configureer in HelloID:
   - ontvanger(s)
   - onderwerp
   - eventuele filters  
3. Gebruik de bijbehorende README als referentie voor intentie en gebruik.  
4. Exporteer de template indien nodig opnieuw vanuit HelloID om variabelen of structuur te verfijnen.

---

## Conventies

Binnen deze library gelden de volgende afspraken:

- Taal: Nederlands  
- MJML-templates zijn altijd volledig (geen snippets)  
- Geen klant-specifieke informatie in templates  
- Geen vetgedrukte tekst in de body, tenzij echt noodzakelijk  
- Variabelen volgen de standaard HelloID payload  
- Extra varianten (bijvoorbeeld SSPR) krijgen een eigen notificatie  

---

## Scope en afbakening

Deze library richt zich uitsluitend op HelloID Provisioning notificaties.

