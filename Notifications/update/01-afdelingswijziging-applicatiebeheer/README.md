# Update Account – Department Change to Application Management

## Description

This notification is sent to application managers when an employee changes departments.

The email informs managers that an employee may need access to an application they manage, so they can check and set up access if needed.

## Configuration

### Event
- **Update** - When account details are changed

### From
- `no-reply@helloid.com` or a custom domain
- See [Configure a custom 'from' address for emails](https://docs.helloid.com/en/set-up-helloid.html#configure-a-custom--from--address-for-emails) for more information

### To
- Application management (fixed email address, e.g., `appmanagement@domain.com`)
- **Note:** Update the email address to the correct one for your organization
- For more information about variables, see [Notifications variable reference](https://docs.helloid.com/en/provisioning/notifications--provisioning-/notifications-variable-reference--provisioning-.html)

### Subject
- `Activate application X` (adjust to specific application)
- Or more general: `Account update for employee`

### Filter (required)
- **Filtering on the new department** is essential for this notification
- Example: Only when someone gets the primary department X
- Note: Filtering can be done on data from the primary target system (e.g., AD)
- These are primary contract data

## Usage

### Create Notification

1. Open **Notification Configuration** in HelloID Provisioning
2. Click **Create New Notification**
3. Fill in the following fields:
   - **Name**: Give the notification a recognizable name (e.g., "Update - Department Change Application Management")
   - **Event**: Select **Update**
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
    - **Subject** (adjust to the specific application)
    - **From** (From address)
    - **To** (Recipient)
12. Configure CC and/or BCC if desired

### Finalize

13. Review the **Message** tab again and adjust the content if needed
14. **Required:** Configure a filter on the specific department(s) (see **Filter** section above)
15. Click **Save**
16. Test the notification by moving a test account to the filtered department

## Important Notes

- **Filter is essential** - without a filter, this email will be sent on every update
- Consider separate notifications per department/application
- Adjust the subject so it's clear which application this is for
- This notification triggers on changes, not on new accounts
