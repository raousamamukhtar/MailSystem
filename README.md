
# My Mail App

A modern email sending application built with Next.js, TypeScript, Tailwind CSS, Nodemailer, and React Hot Toast.

## Features

- Send custom emails to any recipient.
- Modern and responsive UI.
- Uses Nodemailer for sending emails.
- Displays toast notifications for email status.
- HTML email templates for professional-looking emails.

## Project Structure

my-mail-app/
├── node_modules/
├── public/
├── src/
│ ├── app/
│ │ └── api/
│ │ └── sendEmail/
│ │ └── route.ts
│ ├── pages/
│ │ ├── _app.tsx
│ │ └── index.tsx
│ ├── styles/
│ │ └── globals.css
│ └── utils/
│ └── emailTemplate.ts
├── .env.local
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js

markdown
Copy code

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Gmail account for sending emails.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/my-mail-app.git
   cd my-mail-app
Install dependencies:

sh
Copy code
npm install
Set up environment variables:
Create a .env.local file in the root of your project and add your email credentials:

env
Copy code
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Run the development server:

sh
Copy code
npm run dev
Open http://localhost:3000 with your browser to see the result.

Usage
Open the application:
Navigate to http://localhost:3000 in your browser.

Send an email:

Fill in the recipient's email address, subject, and content.
Click the "Send Email" button.
A toast notification will appear indicating the status of the email.
Technologies Used
Next.js: A React framework for server-side rendering.
TypeScript: A statically typed superset of JavaScript.
Tailwind CSS: A utility-first CSS framework.
Nodemailer: A module for Node.js applications to send emails.
React Hot Toast: A React library for toast notifications.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Next.js
TypeScript
Tailwind CSS
Nodemailer
React Hot Toast
markdown
Copy code

### Additional Instructions:

- Replace `yourusername` in the repository URL with your actual GitHub username.
- Ensure you add a `LICENSE` file in the root of your project if you haven't already.
- Add any additional sections or information that you think would be helpful for users or contributors.

Place this `README.md` file in the root of your project directory. It will be automatically disp
