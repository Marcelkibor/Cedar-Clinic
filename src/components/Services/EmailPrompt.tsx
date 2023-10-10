import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { BarLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
interface FormData {
  username: string;
  email: string;
  message: string;
}

const EmailPrompt: React.FC = () => {
  const [sent,isSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    message: "",
  });
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
       isSent(true);
       formData.email="";
       formData.message="";
       formData.username="";
      } catch (error) {
        throw error
      }
    }

    setLoading(false);
  };
  return (
<div className="email-prompt">
  {sent ? 
  <div style={{height:'400px',minWidth:'400px'}}>
  <div style={{marginLeft:'-27px',display:'flex',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'block'}}>
      <p>Email has been sent</p>
      <Button
      style={{ marginTop: "2%",width:'150px' }}
      variant="success"
      onClick={()=>{isSent(false)}}
      type="submit"> Done </Button>
    </div>
  </div>
</div>
  :
  <div className="contact-form">
    {loading?
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div style={{display:'block'}}>
  <BarLoader
    loading={loading}
    speedMultiplier={1}
    color='#55efc4'
    height={5}
    width={150}
    />
      <div>
      <h6>Sending</h6>
      </div>
  </div>
    </div>
  :
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
  >Send Email
  </Button>
  </Form>
    }
 
  </div>  
  }
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
