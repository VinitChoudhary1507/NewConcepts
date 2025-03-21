const nodemailer = require("nodemailer");
// import nodemailer from 'nodemailer'
 
// Function to send the setup link email
async function sendSetupLink(userEmail, token) {
  // Create a transporter using Ethereal SMTP settings (replace with your SMTP provider in production)
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "matt.turcotte@ethereal.email", // replace with your Ethereal username
      pass: "YPGDchUYSw2W8PXcmM", // replace with your Ethereal password
    },
  });

  // Construct the URL for setting the ID and password (adjust the URL as needed)
  const setupLink = "https://www.youtube.com/"

  // Define email options
  let mailOptions = {
    from: '"Vinit" <matt.turcotte@ethereal.email>',
    to: userEmail,
    // subject: "Set your ID and Password",
    text: `Please use the following link to set your ID and password: ${setupLink}`,
    html: `<p>Please click <a href="${setupLink}">here</a> to set your ID and password.</p>`,
  };

  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Example usage: after a submission, call this function with the user's email and a unique token.
const userEmail = "choudharyvinit715@gmail.com";
// const token = "someUniqueTokenGeneratedEarlier"; // Generate your token appropriately

sendSetupLink(userEmail, token);
  module.exports = sendSetupLink;