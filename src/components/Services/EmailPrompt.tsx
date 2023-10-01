import { useState } from "react";
import { Form,Button } from "react-bootstrap";
const EmailPrompt = () => {
  const [formData,setFormData] = useState({
    username:'',
    email:'',
    message:''
  })  
  const {username,email,message} = formData;
  const onChange=(e:{target:{name:any,value:any}})=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
      console.log(`form data:`,formData)
    }
  return (
    <div style={{width:'600px'}}>
      <Form >
  <h2>Get In Touch</h2>
    <Form.Group>
        <Form.Control onChange={onChange} type="username" autoSave='true' autoComplete='true' placeholder="Username" name='username' value={username}/>
        <Form.Control onChange={onChange} type="email" autoSave='true'placeholder="Your Email" name='email' value={email} />
        <Form.Control style={{height:'120px'}}as="textarea" onChange={onChange} autoSave='true' placeholder="Message" name="message" value={message} />
      </Form.Group>
    <Form.Group>
  </Form.Group>
    <Button  style={{marginTop:'5%'}}variant="primary" onClick={handleSubmit}>Submit
      </Button>
    </Form>
    </div>
  )
}

export default EmailPrompt
