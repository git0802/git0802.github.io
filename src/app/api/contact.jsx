import Contact from "@/models/contact";
import connectDB from "@/utils/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let nodemailer = require("nodemailer");

    // 25, 587	(for unencrypted/TLS connections)
    // 465	(for SSL connections)

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465,
      auth: {
        user: "apikey",
        pass: "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",
      },
      secure: true,
    });

    const mailData = {
      from: "dilkhush.code@gmail.com",
      to: "dilkhush_raj@outlook.com",
      subject: `Message From ${req.body.name}`,
      text: req.body.message,
      html: `<html>
        <div>Name: ${req.body.name}</div>
        <div>Email: ${req.body.email}</div>
        <div>Mobile: ${req.body.mobile}</div>
        <div>Message: ${req.body.message} </div></html>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    try {
      const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        message: req.body.message,
      });

      await contact.save();
      res.status(200).json({ message: "Message added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const contacts = await Contact.find();
      res.status(200).json({ contacts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "DELETE") {
    // get the id of the data to be deleted from the query
    const { id } = req.query;
    // try to delete the data from the database
    try {
      const result = await Contact.findByIdAndDelete(id);
      // if the data is found and deleted, send a success response
      if (result) {
        res.status(200).json({ message: "Data deleted successfully" });
      } else {
        // if the data is not found, send a not found response
        res.status(404).json({ message: "Data not found" });
      }
    } catch (error) {
      // if there is an error, send a server error response
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(400).json({ error: "Bad request" });
  }
};

export default connectDB(handler);
