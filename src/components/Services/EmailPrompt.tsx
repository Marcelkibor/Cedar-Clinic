import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
const notify=()=>{
  toast.success('Email Sent', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    theme: "light",
    });
}
const { username, email, message } = formData;
const formRef = useRef<HTMLFormElement | null>(null);
const [loading,setLoading] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(
      true
    )
    if (formRef.current) {
      const formatMessage = `${message}.\n${email}`
      try {
        await emailjs.send(
          `${import.meta.env.VITE_APP_EMAILJS_SERVICE_ID}`,
          `${import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID}`,
          {
            from_name:String(username),
            from_email:String(email),
            message:String(formatMessage)
          },
           `${import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY}`,
        );
        console.log("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
    setLoading(false);
    notify()
  };
  return (
<div className="email-prompt">
<Form onSubmit={sendEmail}>
<h2 style={{color:'#006266'}}>Get In Touch</h2>
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
  style={{ marginTop: "2%",width:'150px' }}
  variant="success"
  type="submit"
>
  {loading ? <p>Sending...</p>: <p>Send Email</p>}
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
pauseOnHover ={false}
theme="light"
/>
<ToastContainer />
</Button>
</Form>
<form ref={formRef} id="hiddenForm" style={{ display: "none" }}>
  <label>Name</label>
  <input type="text" name="from_name" value={formData.username} readOnly />
  <label>Email</label>
  <input type="email" name="from_email" value={formData.email} readOnly />
  <label>Message</label>
  <textarea name="message" value={formData.message} readOnly />
</form>
</div>
  );
};
export default EmailPrompt;
