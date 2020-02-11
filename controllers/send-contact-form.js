'use strict';
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// try using an alias instead of the acutal email address.
// haven't tried alias yet. may not work.
// am using MailThis.to, FormSubmit, FormSpree, etc. instead.

const handleSendingContactForm = (req, res) => {

  const { customerName, email, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS
    }
  });
  let mailOptions = {
    //only using my email to send from
    from: process.env.USER_EMAIL,
    //only using my email to send to
    to: `${email}`,
    // Subject line
    subject: `Shop Tunnel - An ecommerce Platform`,
    // plain text bodynpm 
    // text: 'Hello world?', 
    // don't allow sending html below
    html: `
      <table style="overflow-x:auto;width:100%;max-width:600px;border:1px solid black;margin:auto">
        <tr style="height:50px;background:lightgray">
          <th style="border-bottom:1px solid black;">Shop Tunnel - Customer Support Email</th>
        </tr>
        <tr style="overflow-x:auto;width:100%;border:1px solid black;background:#def;">
          <td style="padding:30px;">
            <p>Hello,</p>
            <p>${customerName}</p>
            <p>Thank you for contacting us. We will respond to your message within 2-3 business days.
            <p>
            <table>
              <tr>
                <td style="background-color:lightgray;padding:10px;cursor:pointer;">
                  <h3 style="padding:auto;margin:auto">Your message: ${message}</h3>
                </td>
              </tr>
            </table>
            <p>Thank you!<br/>- The Shop Tunnel team</p>
          </td>
        </tr>
      </table>
`};

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(400).json(`Something went wrong. Please use the following email
        address to send Shop Tunnel an email: ${process.env.USER_EMAIL}`);
    } else {
      return res.status(200).json(`Your message was sent successfully. Shop Tunnel will
        get back in touch with you shortly. Thank you!`);
    }
  });
}

module.exports = {
  handleSendingContactForm: handleSendingContactForm
}