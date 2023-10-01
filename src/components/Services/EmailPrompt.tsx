import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

interface FormData {
  username: string;
  email: string;
  message: string;
}

const EmailPrompt: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    message: "",
  });

  const { username, email, message } = formData;
  const formRef = useRef<HTMLFormElement | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const form = formRef.current;

      try {
        await emailjs.sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          `#${form.id}`,
          "YOUR_PUBLIC_KEY"
        );

        console.log("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
<div style={{ maxWidth: "600px" }}>
<Form onSubmit={sendEmail}>
<h2>Get In Touch</h2>
<Form.Group>
  <Form.Control
    onChange={onChange}
    type="text"
    autoSave="true"
    autoComplete="true"
    placeholder="Username"
    name="username"
    value={username}
  />
  <Form.Control
    onChange={onChange}
    type="email"
    autoSave="true"
    placeholder="Your Email"
    name="email"
    value={email}
  />
  <Form.Control
    style={{ height: "120px" }}
    as="textarea"
    onChange={onChange}
    autoSave="true"
    placeholder="Message"
    name="message"
    value={message}
  />
</Form.Group>
<Button
  style={{ marginTop: "5%" }}
  variant="primary"
  type="submit"
>
  Submit
</Button>
</Form>
<form ref={formRef} id="hiddenForm" style={{ display: "none" }}>
  <label>Name</label>
  <input type="text" name="username" value={username} readOnly />
  <label>Email</label>
  <input type="email" name="email" value={email} readOnly />
  <label>Message</label>
  <textarea name="message" value={message} readOnly />
</form>
</div>
  );
};
export default EmailPrompt;
