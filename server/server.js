// Import required modules
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Create express app
const app = express();
app.use(cors());
app.use(express.json());

// Define routes
app.use("/", router);

// Start server on port 5000
app.listen(5000, () => console.log("Server Running"));

// Access environment variables (email credentials)
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Create nodemailer transporter to send emails using Gmail service
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "gupta.akash147147@gmail.com", // Replace with actual Gmail email address
    pass: "gijckziktcbnllsn" // Replace with actual Gmail password
  },
});

// Verify the transporter
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Define route to handle POST request for contact form submission
router.post("/contact", (req, res) => {
  // Extract data from request body
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Compose email content
  const mail = {
    from: name,
    to: "inquery@gmail.com", // Replace with recipient's email address
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error); // Send error response if there's an issue with sending the email
    } else {
      res.json({ code: 200, status: "Message Sent" }); // Send success response if email is sent successfully
    }
  });
});
