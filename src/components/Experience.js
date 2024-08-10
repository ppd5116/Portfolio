import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StrativeLogo from './assets/strative_logo.png';
import PennStateLogo from './assets/icds_logo.png';
import PennState_Logo from './assets/hpc_logo.png';
import FlexonLogo from './assets/flexon_logo.png';
import JPMorganLogo from './assets/jpmorgan_logo.png';

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
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  min-height: 200px;
  border-left: 10px solid #FFDB58; /* Mustard yellow border */
  border-right:  10px solid #FFDB58; /* Mustard yellow border */
`;

const LogoContainer = styled.div`
  flex: 0 0 100px; /* Adjust this to match the desired size */
  margin-right: 20px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Maintain aspect ratio */
  max-width: 100px; /* Ensure maximum width */
  max-height: 100px; /* Ensure maximum height */
`;

const DetailsContainer = styled.div`
  flex: 1;
`;




export function Experience() {
  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Experience</Heading>
        <List>
          <ListItem>
            <LogoContainer>
              <Logo src={StrativeLogo} alt="Strative.ai Logo" />
            </LogoContainer>
            <DetailsContainer>
              <h3>Machine Learning Engineer Intern</h3>
              <p><i>Strative.ai | Remote | May 2024 – August 2024</i></p>
              <ul>
                <li>Developed and hosted Strative’s official API documentation site using Swagger-UI, JSON, HTML, and Google Cloud Platform services.</li>
                <li>Built the Strative’s core no-code RAG pipeline utilizing Elastic Search DB as Knowledge Database, indexing and ingesting 307k records with an accuracy of 85%.</li>
                <li>Experimented and conducted evaluation of the same process on Ray cluster using other vector/advanced databases.</li>
              </ul>
            </DetailsContainer>
          </ListItem>
          <ListItem>
            <LogoContainer>
              <Logo src={PennStateLogo} alt="Penn State Logo" />
            </LogoContainer>
            <DetailsContainer>
              <h3>HPC Software Consultant</h3>
              <p><i>Institute for Computational and Data Sciences, Penn State | University Park, PA | January 2024 – May 2024</i></p>
              <ul>
                <li>Provided prompt & expert assistance for researchers using the Roar Collab HPC resources throughout Penn State.</li>
                <li>Proficient in SLURM job scheduler usage to address solutions for systems support and management.</li>
              </ul>
            </DetailsContainer>
          </ListItem>
          <ListItem>
            <LogoContainer>
              <Logo src={PennState_Logo} alt="Penn State Logo" />
            </LogoContainer>
            <DetailsContainer>
              <h3>Graduate Research & Teaching Assistant</h3>
              <p><i>The Pennsylvania State University HPC Lab | University Park, PA | January 2023 – Present</i></p>
              <ul>
                <li>Thesis: Layer-wise Quantization of Decolle - Online Learning framework of Spiking Neural Networks (2024).</li>
                <li>CMPSC 200 (Matlab for Programmers) Head TA, boosted academic performance by 98% approval rate.</li>
                <li>CMPEN 270 (Digital Electronic and Logic Circuit Design) Course Coordinator, reformulated coursework & labs on ICs, FPGAs, FSM designing, & Verilog.</li>
              </ul>
            </DetailsContainer>
          </ListItem>
          <ListItem>
            <LogoContainer>
              <Logo src={FlexonLogo} alt="Flexon Technologies Logo" />
            </LogoContainer>
            <DetailsContainer>
              <h3>DevOps Engineer</h3>
              <p><i>Flexon Technologies Inc. | Pleasanton, CA | June 2021 – December 2021</i></p>
              <ul>
                <li>Devised an end-to-end development cycle for Banking Application, automating application management and deployment via Spring Boot.</li>
                <li>Enhanced productivity and code release efficiency by implementing an entire CI/CD pipeline in an agile environment with AWS EC2, GIT, Jenkins, Docker, Kubernetes, & SQL.</li>
              </ul>
            </DetailsContainer>
          </ListItem>
          <ListItem>
            <LogoContainer>
              <Logo src={JPMorganLogo} alt="JPMorgan Chase & Co. Logo" />
            </LogoContainer>
            <DetailsContainer>
              <h3>Software Engineer</h3>
              <p><i>JPMorgan Chase & Co. | Remote | June 2020 – August 2020</i></p>
              <ul>
                <li>Led the financial stock team in a software engineering task focused on interfacing with a stock price data feed and implementing Python-optimized unit tests to validate functionality.</li>
                <li>Improved code maintainability, enhancing the reliability and efficiency of stock price estimates and financial ratios, facilitating project scalability by 92%.</li>
              </ul>
            </DetailsContainer>
          </ListItem>
        </List>
      </motion.div>
    </Section>
  );
}
