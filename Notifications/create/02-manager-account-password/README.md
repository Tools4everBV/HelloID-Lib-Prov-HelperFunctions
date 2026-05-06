# Create Account – Password to Manager

## Description

This notification is sent to the manager as a follow-up to the first email (`01-manager-account-details`).

For security reasons, the password is sent in a **separate email**. This email contains only:
- The employee's name (for context)
- The temporary password
- A reminder to change the password on first login

All other details are in the first email.

## Configuration

### Event
- **Create** - When an account is created

### From
- `no-reply@helloid.com` or a custom domain
- See [Configure a custom 'from' address for emails](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) for more information

### To
- Primary manager
- Variable: `{{ Manager.Accounts.MicrosoftActiveDirectory.mail || Manager.Email || "fallbackemailadres@domain.com" }}`
- **Note:** Update `fallbackemailadres@domain.com` to a valid email address for your organization
- For more information about variables, see [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Subject
- `New employee – {{person.displayName}}`

### Filter (optional)
- Filter on data written to the account of the primary target system (e.g., AD)
- Example: Only for departments A, B, and C
- Note: These are primary contract data
- **Use the same filter as with `01-manager-account-details`**

## Usage

### Create Notification

1. Open **Notification Configuration** in HelloID Provisioning
2. Click **Create New Notification**
3. Fill in the following fields:
   - **Name**: Give the notification a recognizable name (e.g., "Create - Password to Manager")
   - **Event**: Select **Create**
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
12. Configure CC and/or BCC if desired

### Finalize

13. Review the **Message** tab again and adjust the content if needed
14. **Use the same filter** as with notification `01-manager-account-details`
15. Click **Save**

## Important Notes

- This notification must **always be used together** with `01-manager-account-details`
- Use **identical filters** for both notifications
- The password is only available during the create event
