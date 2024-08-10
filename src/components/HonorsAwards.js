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

export function HonorsAwards() {
  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Honors & Awards</Heading>
        <List>
          <ListItem>Recipient of 2024 AWS AI & ML Scholarship</ListItem>
          <ListItem>Hackathon PSU (HackPSU) Fall 2023: Winner amongst 600 passionate minds from across the nation competing in a 24-hour-long hackathon contest. Winning categories: Overall: Best use of AI for Social Impact, Best use of GenAI</ListItem>
          <ListItem>International Collegiate Programming Contest, ICPC 2023: Competing contestants across 5 teams amongst 200+ Penn State students to represent Penn State at ICPC Regionals.</ListItem>
          <ListItem>Dean’s List - Pennsylvania State University: Students receiving semester GPA of 3.50 or above [Spring 2018, Fall 2018, Summer 2019, Spring 2019, Spring 2020, Summer 2020, Fall 2020, Spring 2021, Spring 2023, Fall 2023, Spring 2024]</ListItem>
          <ListItem>National Programming Language Contest (NPL 2017) - National Institute of Technology, Warangal - Winner - advanced level coding contest conducted amongst all the technical institutions of India and their collaborated universities all around the world.</ListItem>
          <ListItem>Ramanujan Mathematics Olympiad - Delhi Public School Society - Winner</ListItem>
          <ListItem>Scholar Badge - Delhi Public School Society - Worldwide consistent performer for 9 years: 2008 - 2017</ListItem>
          <ListItem>Gulf Mathematics Olympiad - Delhi Public School Society: Winner</ListItem>
        </List>
      </motion.div>
    </Section>
  );
}

