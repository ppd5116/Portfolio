import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfileImage from './assets/PersonalPhoto.jpeg'; // Import the image
import BackgroundVideo from './assets/tech2.mp4'; // Import the video

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBrain, faServer } from '@fortawesome/free-solid-svg-icons';

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0 10px;
  color: #FFD700; /* Mustard yellow color */
`;

const Section = styled.section`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundVideoElement = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 5px solid #FFD700; /* Mustard yellow border */
`;

const TextContainer = styled.div`
  flex: 2;
  padding-right: 20px;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export function About() {
  return (
    <Section>
      <BackgroundVideoElement autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideoElement>
      <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <TextContainer>
          <Heading>About Me</Heading>
          <Text>
            Welcome to my professional portfolio. I am Pallavi Das, actively pursuing a Master of Science in Computer Science and Engineering at The Pennsylvania State University. With a strong foundation in Data Science, Machine Learning, Deep Learning, and Software Development, my experience includes developing advanced machine learning models, implementing high-performance computing solutions, and contributing to innovative projects in AI and cybersecurity. I am proficient in Python, C++, Java, PyTorch, TensorFlow, and various other tools and frameworks. My aim is to leverage my technical skills and experience to drive impactful solutions in the tech industry.
          </Text>
        </TextContainer>
        <ImageContainer>
          <Image src={ProfileImage} alt="Pallavi Das" />
        </ImageContainer>
        <IconsContainer>
          <Icon icon={faCode} />
          <Icon icon={faLaptopCode} />
          <Icon icon={faBrain} />
          <Icon icon={faServer} />
        </IconsContainer>
      </Content>
    </Section>
  );
}