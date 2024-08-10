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

export function Education() {
  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Education</Heading>
        <List>
          <ListItem>
            <h3>The Pennsylvania State University</h3>
            <p>Master of Science in Computer Science and Engineering</p>
            <p><i>Class of 2024</i></p>
          </ListItem>
          <ListItem>
            <h3>The Pennsylvania State University</h3>
            <p>Bachelor of Science in Computer Engineering, Minor in Cybersecurity</p>
            <p><i>Class of 2021</i></p>
          </ListItem>
          <ListItem>
            <h3>National Institute of Technology, Warangal</h3>
            <p>Bachelor of Technology in Electronics and Communication Engineering</p>
            <p><i>NDO, Class of 2017</i></p>
          </ListItem>
          <ListItem>
            <h3>Fahaheel Al-Watanieh Indian Private School (Delhi Public School), Kuwait</h3>
            <p>Science: Computer Science, Physics, Chemistry, Mathematics, English</p>
            <p><i>Class of 2017</i></p>
          </ListItem>
        </List>
      </motion.div>
    </Section>
  );
}
