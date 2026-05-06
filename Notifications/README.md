# HelloID Provisioning – Notification Templates

This folder contains reusable MJML templates for notifications in HelloID Provisioning.

The notifications are based on:
- Standard HelloID notification templates
- Practical experience from customer implementations
- Deliberate scope to prevent email overload

The templates are intended as a starting point. They can be imported into HelloID per customer and customized there, for example for recipients, filters, or subject.

---

## Structure

Notifications are organized by provisioning event:

```
notifications/
  create/
  enable/
  update/
  disable/
  pre-offboard/
```

Within each event there are one or more variants.  
Each variant has its own folder with:

- `template_en.mjml`  
  The complete MJML template that can be imported directly into HelloID (English version).

- `template_nl.mjml`  
  The complete MJML template that can be imported directly into HelloID (Dutch version).

- `README.md`  
  Explanation of purpose, recipient, usage and important notes for the notification.

The numbering (`01-`, `02-`, …) makes the sequence and relationships explicit and ensures that extensions can be added easily later.

---

## Notification Overview

### Create
Notifications sent when an account is created.

- **[01-manager-account-details](create/01-manager-account-details)**  
  Informs the manager about the account details of a new employee (without password)
  
- **[02-manager-account-password](create/02-manager-account-password)**  
  Sends the temporary password in a separate email to the manager (for security)
  
- **[03-applicatiebeheer-nieuwe-medewerker](create/03-applicatiebeheer-nieuwe-medewerker)**  
  Notification to application management about new employee for manual access provisioning

### Enable
Notifications sent when an account is activated.

- **[01-welkom-medewerker](enable/01-welkom-medewerker)**  
  Welcome email to new employee with instructions to set password via SSPR
  
- **[02-welkom-medewerker-sspr](enable/02-welkom-medewerker-sspr)**  
  Extended variant with detailed SSPR instructions (helps reduce support questions)

### Update
Notifications for changes to existing accounts.

- **[01-afdelingswijziging-applicatiebeheer](update/01-afdelingswijziging-applicatiebeheer)**  
  Notification to application management on department change for access management

### Pre-offboard
Notifications prior to employee exit.

- **[01-reminder-uitdienst-manager](pre-offboard/01-reminder-uitdienst-manager)**  
  Reminds manager X days before end date of employee exit for timely handover  

### Disable
Notifications when accounts are disabled.

- **[01-uitdienst-applicatiebeheer](disable/01-uitdienst-applicatiebeheer)**  
  Informs application management of employee exit for manual account deactivation

---

## Usage

### General

Each notification has its own README with detailed instructions. The general steps are:

1. Open **Notification Configuration** in HelloID Provisioning
2. Click **Create New Notification**
3. Fill in the basic fields (Name, Event, Target System)
4. Import the `template_en.mjml` (English) or `template_nl.mjml` (Dutch) via the **Import MJML** icon (download icon)
5. Replace the URL `https://customer.helloid.com` with your own HelloID portal URL if needed
6. Configure recipient(s), subject and any filters
7. Thoroughly test the notification before deploying to production

**Note:** All templates are created for the **Microsoft Active Directory** target system. If using a different target system, the variables in the templates must be adjusted.

### Configure From Address

Voor het configureren van een custom 'from' adres, zie de [HelloID documentatie](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails).

### Variabelen

Voor meer informatie over beschikbare variabelen in notificaties, zie de [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html).

### Conditionele notificaties

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

