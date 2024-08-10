import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Section = styled.section`
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
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
  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Contact</Heading>
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
      </motion.div>
    </Section>
  );
}
