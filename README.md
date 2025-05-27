
# Account & Contact Viewer – LWC Mini Project

This is a Lightning Web Components (LWC) based mini project I built as part of an interview task with **Utilitarian Labs**.

The scenario:  
🔹 Display a list of `Account` records in a datatable.  
🔹 Provide a button in each row to view related `Contact` records.  
🔹 On clicking the button, the related `Contacts` should be fetched and displayed below the table.

---

## 🛠️ Technologies Used

- Salesforce Lightning Web Components (LWC)
- Apex (for server-side logic)
- Git + GitHub
- VS Code
- Salesforce CLI

---

## 📁 Components

### 1. `AccountList` (Parent)
- Fetches `Account` data using Apex.
- Displays in `<lightning-datatable>`.
- Contains a row action button ("View Contacts").
- Sends selected Account Id to child.

### 2. `ContactList` (Child)
- Accepts `accountId` via `@api`.
- Retrieves related `Contacts` via Apex.
- Displays them in another `<lightning-datatable>`.

---

## 🚀 How to Deploy

1. Clone this repo or download the code.
2. Authorize your org:  
   `sf org login web --set-default`
3. Push source to org:  
   `sf project deploy start --source-dir force-app`
4. Open the org:  
   `sf org open`
5. Add `AccountList` component to a Lightning App Page.

---

## 💡 Sample Screenshot

*(Optional: Add screenshot of your component here)*

---

## 🙋‍♀️ Built By

**Yasmin** – Salesforce Developer with experience in LWC, Apex, and a strong focus on clean UI & component communication.

---
