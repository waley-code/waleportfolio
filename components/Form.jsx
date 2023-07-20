import React, { useState } from "react";
const emailjs = require("emailjs-com");
// template_dh63v9o
// service_bb8nagx email service
//  EApG_CblIF2EqX46U public key
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    emailjs
      .send(
        "service_bb8nagx",
        "template_dh63v9o",
        {
          from_name: formData.name,
          to_name: "Wale",
          from_email: formData.email,
          to_email: "walephlp#gmail.com",
          message: formData.message,
        },
        "EApG_CblIF2EqX46U"
      )
      .then(
        (res) => {
          setLoading(false);
          alert("Thanks I will get back to you as soon as possible.");
          setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          });
          console.log("Email sent successfully:", res);
        },
        (error) => {
          setLoading(false);
          alert("Sorry something went wrong.");

          console.log("Error sending email:", error);
        }
      );
    // Here, you'll need to implement the logic to send the email using a backend service like Nodemailer.
    // You can make a POST request to your server with the formData to send the email.
    console.log(formData);
  };

  return (
    <form>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 " htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="subject">
          Subject
        </label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows={10}
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        onClick={() => handleSubmit()}
        className="w-full p-4 text-gray-100 mt-4"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
