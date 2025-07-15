# form_validation_systeminput as per certain conditions for validity

# 📝 Human Verification Form – Form Validation Web Project

This project is a **Form Validation System** designed to ensure that users entering data into the form are **humans and not bots**. It performs real-time checks on inputs like Full Name, Email, Phone Number, and Password to enforce strong data integrity and prevent fake registrations.

---

## 🚀 Features

- Instant validation with helpful error messages
- Prevents default or weak passwords
- Verifies correct formatting for email and phone
- Confirms password match
- User-friendly and responsive UI
- Simple HTML, CSS, and JavaScript-based logic

---

## 🧾 Validation Rules

| Field             | Rule                                                                 |
|------------------|----------------------------------------------------------------------|
| **Full Name**     | At least **5 characters** long                                       |
| **Email ID**      | Must include the **@** symbol                                        |
| **Phone Number**  | Must be a **10-digit** number, not equal to `1234567890`             |
| **Password**      | Must be **at least 8 characters**, not "password", and not your name |
| **Confirm Password** | Must **exactly match** the Password                             |


## ⚠️ Error Messages

Users will see clear error prompts like:

- "Enter a valid full name (at least 5 characters)"
- "Email must include @ symbol"
- "Phone number must be 10 digits and not 1234567890"
- "Password cannot be your name or 'password'"
- "Passwords do not match"


## 💻 Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript** – Validation logic

---

