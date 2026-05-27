# Pre-offboard – Employee Exit Reminder to Manager

## Description

This notification is sent to the manager before an employee's end date (pre-offboarding).

The email reminds the manager that an employee's employment contract will end soon and advises completing work tasks, handover, and arrangements in a timely manner.

**Note:** This notification requires pre-offboarding configuration in HelloID (number of days before end date).

## Configuration

### Event
- **Pre-offboard** - X days before the end date (configurable in HelloID)

### From
- `no-reply@helloid.com` or a custom domain
- See [Configure a custom 'from' address for emails](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) for more information

### To
- Primary manager
- Variable: `{{ Manager.Accounts.MicrosoftActiveDirectory.mail || Manager.Email || "fallbackemailadres@domain.com" }}`
- **Note:** Update `fallbackemailadres@domain.com` to a valid email address for your organization
- For more information about variables, see [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Subject
- `Employee exit reminder – {{person.displayName}}`
- Or: `Upcoming departure – {{person.displayName}}`

### Filter (optional)
- Filter on data written to the account of the primary target system (e.g., AD)
- Example: Only for specific departments or companies
- Note: These are primary contract data

### Pre-offboard Timing
- Configure in HelloID how many days before the end date this notification should be sent
- Recommendation: 7-14 days before end date

## Usage

### Create Notification

1. Ensure pre-offboarding is configured in HelloID (number of days before end date)
2. Open **Notification Configuration** in HelloID Provisioning
3. Click **Create New Notification**
4. Fill in the following fields:
   - **Name**: Give the notification a recognizable name (e.g., "Pre-offboard - Manager Reminder")
   - **Event**: Select **Pre-offboard**
   - **Target System**: Select the primary target system (e.g., Active Directory)
   - **Notification System**: Leave as **Email** (default)
   - **Note:** This template is created for Microsoft Active Directory. If using a different target system, the variables in the template must be adjusted

### Import Template

5. Go to the **Message** tab
6. Click the **Import MJML** icon (download icon) in the toolbar on the right
7. Open one of the template files from this folder and copy the full content:
   - [template_nl.mjml](template_nl.mjml) - Dutch version
   - [template_en.mjml](template_en.mjml) - English version
8. Paste the MJML code into the import screen
9. Replace the URL `https://customer.helloid.com` in the code with your own HelloID portal URL if needed
10. Click **Import**

### Configure Settings

11. Go to the **Configuration** tab
12. Fill in the fields as described in the **Configuration** section above:
    - **Subject**
    - **From** (From address)
    - **To** (Recipient)
13. Configure CC and/or BCC if desired (e.g., to HR or P&O)

### Finalize

14. Review the **Message** tab again and adjust the content if needed
15. Configure optional filters (see **Filter** section above)
16. Click **Save**
17. Test the notification with a test account with an end date in the future

## Important Notes

### Pre-offboard Configuration

Pre-offboard notifications require special configuration in HelloID:

1. **Enable Person Lifecycle** - Pre-offboarding must be configured in the person lifecycle settings of HelloID
2. **Set Number of Days** - Configure how many days before the end date the notification should be sent
3. **Consider Timing** - Choose a period that gives enough time for handover and completion of work
   - Recommendation: 7-14 days before end date
   - Too early: manager might forget
   - Too late: not enough time for proper handover

For more information on configuring pre-offboarding, see [Pre-offboarding notification event](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notification-events--provisioning-.html#pre-offboarding-notification-event).

### Other Important Notes

- Consider CC to HR or P&O for administrative handling
- This email is informational; further handling follows HR procedures
