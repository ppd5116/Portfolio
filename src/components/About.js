import React from 'react';
import styled from 'styled-components';
import ProfileImage from './assets/PersonalPhoto.jpeg'; // Import the image
import BackgroundVideo from './assets/tech4.mp4'; // Import the video
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBrain, faServer } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 200vh;
  overflow-y: auto;
`;

const BackgroundVideoElement = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 60px;
  background-color: rgba(255, 255, 255, 0.9); // Slight transparency
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
  position: relative;
`;

const ProfileImageContainer = styled.div`
  margin-top: -100px;
  z-index: 2;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 5px solid #fff;
`;

const NameHeading = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-top: 10px;
`;

const SubHeading = styled.h3`
  color: #555;
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 5px;
`;

const TextContainer = styled.div`
  margin-top: 20px;
`;

const Text = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0 10px;
  color: #FFD700;
`;

const SkillsContainer = styled.div`
  position: absolute;
  bottom: -320px; // Position it outside the visible area at the bottom initially
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px; // Ensure it matches the max-width of Content
  padding: 20px;
  background-color: rgba(255, 219, 88, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateY(100%);
  opacity: 0;
  z-index: 3; // Ensure it is on top when it appears

  ${Content}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: #333;
`;

const SkillListItem = styled.li`
  margin-bottom: 10px;
`;

export function About() {
  return (
    <Section>
      <BackgroundVideoElement autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideoElement>
      <Content>
        <ProfileImageContainer>
          <Image src={ProfileImage} alt="Pallavi Das" />
        </ProfileImageContainer>
        <NameHeading>Pallavi Das</NameHeading>
        <SubHeading>ML Researcher, MS in Computer Science & Engineering</SubHeading>
        <IconsContainer>
          <Icon icon={faCode} />
          <Icon icon={faLaptopCode} />
          <Icon icon={faBrain} />
          <Icon icon={faServer} />
        </IconsContainer>
        <TextContainer>
          <Text>
            Welcome to my professional portfolio! I’m Pallavi Das, a driven individual currently pursuing a Master of Science in Computer Science and Engineering at The Pennsylvania State University. With a strong foundation in Data Science, Machine Learning, Deep Learning, and Cybersecurity, I’m eager to contribute to the tech industry with innovative and impactful solutions.
          </Text>
          <Text>
            Over the years, I have honed my skills across a variety of technical domains. From developing sophisticated machine learning models to optimizing hardware architectures, I strive to push the boundaries of what technology can achieve. My experience spans building and fine-tuning deep learning models, implementing high-performance computing solutions, and leading complex software engineering projects.
          </Text>
          <Text>
            <strong>Beyond Tech:</strong><br/>
            While technology is my passion, I have a life rich in cultural and athletic pursuits. I am a trained Indian classical dancer with over a decade of experience in Bharatanatyam, Mohiniyattam, and Kuchipudi. My discipline in dance has taught me the importance of precision, dedication, and the beauty of expressing complex narratives through art. I am also a school-level swimming champion and an ace badminton player, both of which keep me active and remind me of the power of persistence and strategy.
          </Text>
          <Text>
            With a blend of technical expertise, a creative spirit, and a passion for problem-solving, I am excited to explore new challenges and opportunities that lie ahead in my professional journey. Let's connect and create something extraordinary together!
          </Text>
        </TextContainer>
        <SkillsContainer>
            <SkillList>
              <SkillListItem><center><strong>Skills & Expertise</strong><br/></center></SkillListItem>
              <SkillListItem><strong>Programming Languages:</strong> Python, C, C++, Java, Matlab, C#, SQL</SkillListItem>
              <SkillListItem><strong>Machine Learning & AI Frameworks:</strong> PyTorch, TensorFlow, Keras, Scikit-learn</SkillListItem>
              <SkillListItem><strong>Hardware Skills:</strong> Verilog, VHDL, MIPS, FPGA, Circuit Design, PCB Layout</SkillListItem>
              <SkillListItem><strong>Software Engineering:</strong> Object-Oriented Programming, Data Structures and Algorithms, Data Access Object Patterns</SkillListItem>
              <SkillListItem><strong>Web Technologies:</strong> Flask, HTML, CSS, JSON</SkillListItem>
              <SkillListItem><strong>Software & Tools:</strong> HPC, Slurm, CUDA, Linux, Bash, Git, DevOps, PyQt5, Jupyter, Anaconda, VSCode, Android Studio</SkillListItem>
              <SkillListItem><strong>Cybersecurity:</strong> Knowledge in Advanced Quantum Algorithms, Hardware Security, Cybersecurity Protocols</SkillListItem>
            </SkillList>
        </SkillsContainer>
      </Content>
    </Section>
  );
}
