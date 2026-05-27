# Enable Account – Welcome Message to New Employee

## Description

This notification is sent to the new employee when the account is activated (enabled).

The email contains a welcome message with instructions for setting a password via Self Service Password Reset (SSPR). Instructions are broken down into clear steps with practical tips.

**Note:** This variant is suitable for environments where employees can set their password themselves via SSPR with verification via mobile number.

## Configuration

### Event
- **Enable** - When an account is activated

### From
- `no-reply@helloid.com` or a custom domain
- See [Configure a custom 'from' address for emails](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) for more information

### To
- Business email of the new employee
- Variable: `{{ data.mail }}`
- For more information about variables, see [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Subject
- `Welcome to {{person.primaryContract.company}}`

### Filter (optional)
- Filter on data written to the account of the primary target system (e.g., AD)
- Example: Filter on company name (AD field `Company`) to send a customized welcome message per company
- Note: These are primary contract data

## Usage

### Create Notification

1. Open **Notification Configuration** in HelloID Provisioning
2. Click **Create New Notification**
3. Fill in the following fields:
   - **Name**: Give the notification a recognizable name (e.g., "Enable - Welcome Employee")
   - **Event**: Select **Enable**
   - **Target System**: Select the primary target system (e.g., Active Directory)
   - **Notification System**: Leave as **Email** (default)
   - **Note:** This template is created for Microsoft Active Directory. If using a different target system, the variables in the template must be adjusted

### Import Template

4. Go to the **Message** tab
5. Click the **Import MJML** icon (download icon) in the toolbar on the right
6. Open one of the template files from this folder and copy the full content:
   - [template_nl.mjml](template_nl.mjml) - Dutch version
   - [template_en.mjml](template_en.mjml) - English version
7. Paste the MJML code into the import screen
8. Replace the URL `https://customer.helloid.com` in the code with your own HelloID portal URL if needed
9. Click **Import**

### Configure Settings

10. Go to the **Configuration** tab
11. Fill in the fields as described in the **Configuration** section above:
    - **Subject**
    - **From** (From address)
    - **To** (Recipient)
12. Configure CC and/or BCC if desired (e.g., to the manager)

### Finalize

13. Review the **Message** tab again and adjust the content if needed
14. Adjust the filter if needed per company or organizational unit (see **Filter** section above)
15. Click **Save**

## Important Notes

- This email is intended for environments with SSPR
- The employee must have a mobile number registered in the system
- Consider variant `02-welkom-medewerker-sspr` for more detailed instructions
- Adjust the instructions if a different password method is used
