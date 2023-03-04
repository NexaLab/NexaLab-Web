import { Button, Typography } from 'antd';
import Layout from 'antd/es/layout/layout';
import React, { useState } from 'react';
import "./ContactForm.css";



const { Title } = Typography;



function ContactForm() {



    const [ email, setEmail ] = useState("");


    const [ name, setName ] = useState("");


    const [ phone, setPhone ] = useState("");


    const [  message, setMessage ] = useState("");






    const onChangeName = (event) => {


        setName(event.target.value);

    }





    const onChangeEmail = (event) => {


        setEmail(event.target.value);

    }






    const onChangePhone = (event) => {


        setPhone(event.target.value);

    }






    const onChangeMessage = (event) => {


        setMessage(event.target.value);

    }


  return (
    <Layout id='contact-form-layout'>

        <div id='contact-form-container'>



        <Title level={3} id = "contact-form-heading" >CONTACT US</Title>


        <input placeholder='youremail@domain.com'  className='input' name='email'  value = { email }
        

        onChange = { onChangeEmail }
        />



        <div id='phone-and-name-container-contact-form'>

        <input placeholder='Your Name'  className='input-phone-name' name='name'   value = { name }
        
        
        onChange = { onChangeName }
        />


        <input placeholder='Phone'  className='input-phone-name' name='Phone'   value = { phone }
        
        
        onChange = { onChangePhone }
        />


        </div>




        <textarea placeholder='Here Goes Your Message' className='text-area-message-contact-form'
        
        value = { message }


        onChange = { onChangeMessage }
        />



        <Button id='send-msg-btn' size='large'>SEND MESSAGE</Button>



        </div>



    </Layout>
  )
}

export default ContactForm;