import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #fff;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export function Certifications() {
  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Certifications</Heading>
        <List>
          <ListItem>AWS Certified Solutions Architect – Associate</ListItem>
          <ListItem>Certified Kubernetes Administrator</ListItem>
          <ListItem>TensorFlow Developer Certificate</ListItem>
        </List>
      </motion.div>
    </Section>
  );
}
