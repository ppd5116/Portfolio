import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Section = styled.section`
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const Description = styled.p`
  color: #555;
  font-size: 1.1em;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ContactForm = styled.form`
  background: #333;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 45%;
  color: #fff;

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    background-color: #ff6600;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e65c00;
    }
  }
`;

const ContactDetails = styled.div`
  width: 45%;
`;


const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactItem = styled.li`
  background: #fff;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const Link = styled.a`
  color: #555;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Use the template ID, user ID, and service ID from EmailJS
    emailjs.sendForm(
      'service_pallavi', // Replace with your EmailJS service ID
      'template_k88uf7t', // Replace with your EmailJS template ID
      e.target,
      'GM_C_Hkkz9FX5t0r5' // Replace with your EmailJS user ID
    )
      .then((result) => {
        alert('Message Sent! We will get back to you shortly.', result.text);
      }, (error) => {
        alert('An error occurred. Please try again.', error.text);
      });
  
      e.target.reset();
    };
  
    return (
      <Section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading>Let's Connect!</Heading>
          <Description>
                Have a question, feedback, or an opportunity you'd like to discuss? I'm all ears! Whether it's about a potential collaboration, a speaking engagement, or just a friendly chat, feel free to reach out. I'd love to hear from you!
          </Description>
          <FormContainer>
            <ContactForm onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="message" rows="5" placeholder="How can I help you?" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Send</button>
            </ContactForm>
            <ContactDetails>
              <ContactList>
                <ContactItem>
                  <Icon icon={faEnvelope} />
                  <Link href="mailto:pdasgm2015@gmail.com">pdasgm2015@gmail.com</Link>
                </ContactItem>
                <ContactItem>
                  <Icon icon={faLinkedin} />
                  <Link href="https://www.linkedin.com/in/pallavi-d-114b26168" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/pallavi-d-114b26168
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Icon icon={faGithub} />
                  <Link href="https://github.com/ppd5116" target="_blank" rel="noopener noreferrer">
                    github.com/ppd5116
                  </Link>
                </ContactItem>
              </ContactList>
            </ContactDetails>
          </FormContainer>
        </motion.div>
      </Section>
    );
  }