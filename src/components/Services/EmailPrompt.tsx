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
    const serviceID = 'default_service';
    const templateId = 'template_j69bowa';
    const publicKey = '9Y04cfmAm23umioLP';
    if (formRef.current) {
      const form = formRef.current;
      try {
        await emailjs.sendForm(
          `${serviceID}`,
          `${templateId}`,
          `#${form.id}`,
           `${publicKey}`,
        );
        console.log("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };
  return (
<div className="email-prompt">
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
  /><br></br>
  <Form.Control
    onChange={onChange}
    type="email"
    autoSave="true"
    placeholder="Your Email"
    name="email"
    value={email}
  /><br></br>
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
  <input type="text" name="user_name" value={username} readOnly />
  <label>Email</label>
  <input type="email" name="user_email" value={email} readOnly />
  <label>Message</label>
  <textarea name="message" value={message} readOnly />
</form>
</div>
  );
};
export default EmailPrompt;
