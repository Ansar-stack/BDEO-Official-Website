import React, { useState } from 'react'
import InputField from '../UI/InputField'
import Button from '../UI/Button'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        subject: "", 
        message: ""
    });
    const [err, setErr] = useState("");
    const handleInputChanges = (e)=>{
      const {name, value} = e.target;
      setFormData(prev => ({...prev, [name]: value}));
      setErr("");
    };
    const handleSubmit = (e)=>{
      e.preventDefault();
      // Validate the Input Fields
      if(!formData.name.trim())return setErr("Please enter your full name.");
      if(!/^[a-zA-Z\s]+$/.test(formData.name.trim()))return setErr("Please enter a valid full name.");
      if(!formData.email.trim())return setErr("Please enter your email address.");
      if(!formData.subject.trim())return setErr("Please enter the subject.");
      if(formData.subject.trim().length < 5)return setErr("Subject should be at least 5 characters long.");
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim()))return setErr("Please enter a valid email address.");
      if(!formData.message.trim())return setErr("Please enter your message.");
      if(formData.message.trim().length < 10)return setErr("Message should be at least 10 characters long.");
      // Send email using emailjs
      emailjs.send('service_ej5xwns', 'template_dldl6qi', formData, '7a8xjoatJOgMQLCY-')
        .then((response) => {
          setFormData({
            name: "", 
            email: "",
            subject: "", 
            message: ""
          });
          toast.success("Message sent successfully!");
        }, (err) => {
          console.log('FAILED...', err);
          toast.error("Failed to send message. Please try again later.");
        });
    }
  return (
    <form 
    id='contact-form'
     data-aos="fade-up"
    data-aos-duration="800"
    onSubmit={handleSubmit} className='w-full md:w-1/2 xl:w-1/3 p-5 bg-white border border-gray-200 rounded-md shadow-sm shadow-gray-200 flex flex-col  items-center gap-2'>
        <h2 className='text-lg font-bold text-zinc-900 mb-3'>Send us a message</h2>
        <InputField 
        placeholder={'Enter your full name'}
        label={'Full Name'}
        handleChanges={handleInputChanges}
        value={formData.name}
        name={'name'}
        />
          <InputField 
        placeholder={'Enter your email address'}
        label={'Email Address'}
        handleChanges={handleInputChanges}
        value={formData.email}
        name={'email'}
        />
          <InputField 
        placeholder={'Enter your subject'}
        label={'Subject'}
        handleChanges={handleInputChanges}
        value={formData.subject}
        name={'subject'}
        />
        <div className='w-full'>
          <label htmlFor="" className="font-semibold">Message</label>
          <textarea 
          value={formData.message}
          placeholder='Enter your message here.'
          onChange={handleInputChanges}
          name='message'
          className='w-full h-37 resize-none overflow-y-auto  px-4 py-1 outline-0 bg-blue-100/50 rounded-md border border-gray-200 placeholder:text-gray-800'
          />
        </div>
        {err && <p className='text-red-500 text-sm font-semibold my-0.5'>{err}</p>}
        <Button text={'Send Message'} type='submit' classes={'primary-btn w-full'}/>
    </form>
  )
}

export default ContactForm