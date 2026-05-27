# Create Account – Notification to Application Management

## Description

This notification is sent to application managers when a new account is created.

The email informs managers that a new employee is starting and contains the relevant account details, so they can grant access to applications not managed via HelloID.

## Configuration

### Event
- **Create** - When an account is created

### From
- `no-reply@helloid.com` or a custom domain
- See [Configure a custom 'from' address for emails](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) for more information

### To
- Application management (fixed email address, e.g., `appmanagement@domain.com`)
- **Note:** Update the email address to the correct one for your organization
- For more information about variables, see [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Subject
- `New employee – {{person.displayName}}`

### Filter (optional)
- Filter on data written to the account of the primary target system (e.g., AD)
- Example: Only for departments A, B, and C where specific applications are needed
- Note: These are primary contract data

## Usage

### Create Notification

1. Open **Notification Configuration** in HelloID Provisioning
2. Click **Create New Notification**
3. Fill in the following fields:
   - **Name**: Give the notification a recognizable name (e.g., "Create - Application Management Notification")
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
14. Adjust the filter for departments that need specific applications (see **Filter** section above)
15. Click **Save**

## Important Notes

- Use filters to notify only relevant departments
- Consider separate notifications per application/system if needed
- This email does not contain a password