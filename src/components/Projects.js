import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

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
  background: rgba(255, 255, 255, 0.9); // Slight transparency
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectDetails = styled.div`
  margin-top: 10px;
  margin-right: 20px;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #FFDB58;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: #FFD700;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SkillBarsContainer = styled.div`
  margin-top: 10px;
  margin-right: 20px;
`;

const projectData = [
  {
    title: "ProductSense AI: HackPSU Fall23",
    technologies: "GPT, Generative AI, LLM, Python, PyQt5, Google API, Flask",
    date: "October 2023",
    description: [
      "Innovative Skincare Analysis Application: Developed a groundbreaking skincare analysis app and website utilizing Optical Character Recognition (OCR) integrated with Python and OpenAI’s GPT-3.5 Turbo. This state-of-the-art application leverages one-shot learning to deliver comprehensive insights on product ingredients from captured or uploaded images.",
      "Advanced AI Integration: Implemented generative AI and large language models (LLMs) to analyze and interpret skincare product data, significantly enhancing the accuracy and depth of product evaluations and recommendations.",
      "User-Centric Design: Engineered an intuitive and user-friendly graphical interface using PyQt5, ensuring seamless user interaction and engagement. Enhanced the application's usability through efficient GUI development and multilingual support.",
      "Strategic Business Collaboration: Successfully negotiated a partnership deal with Nittany AI Shark Tank, aimed at refining business and marketing strategies to boost the app's market penetration and user base.",
      "Future-Ready Expansions: Envisioned extensive future developments, including the integration of e-commerce functionalities, the deployment of a mobile app version, and the addition of an AI-driven chatbot to provide personalized user assistance and support.",
      "Team Leadership and Collaboration: Led a multidisciplinary team, fostering a collaborative environment that emphasized effective communication and feedback. This approach ensured the smooth resolution of challenges and the successful delivery of project milestones."
    ],
    skills: [
      { skill: "Python", percentage: 90, color: "#FFDB58" },
      { skill: "Generative AI", percentage: 85, color: "#FFDB58" },
      { skill: "Google API", percentage: 75, color: "#FFDB58" }
    ]
  },
  {
    title: "DECOLLE SNN Quantization (Thesis)",
    technologies: "Pytorch, Python, CUDA GPUs, C++, SNN+CNN",
    date: "Present",
    description: [
      "Currently developing a novel approach to integrate Mixed Precision and Hessian Aware trace on the DECOLLE, an online learning SNN framework for Decolle SNN Quantization, minimizing computational overhead during training and inferences.",
      "Successfully reproduced one of the precision techniques, Integer clipping performance on DECOLLE for an SNN model, using PyTorch, and NVIDIA CUDA."
    ],
    skills: [
      { skill: "Pytorch", percentage: 85, color: "#FFDB58" },
      { skill: "Python", percentage: 90, color: "#FFDB58" },
      { skill: "C++", percentage: 70, color: "#FFDB58" }
    ]
  },
  {
    title: "DeepRacer Racing-Car Simulator",
    technologies: "Pytorch, Python, Reinforcement Learning, Intel OpenVINO",
    date: "April 2024",
    description: [
      "Built an end-to-end car agent on an in-built challenging Carla simulator based racing track environment in less than 45 minutes training time.",
      "Model Training Algorithms: PPO, SAC; Model optimization conducted through Intel’s OpenVINO for AWS car agent on Intel Atomic Processor.",
    ],
    skills: [
      { skill: "Reinforcement Learning", percentage: 80, color: "#FFDB58" },
      { skill: "Python", percentage: 85, color: "#FFDB58" },
      { skill: "Intel OpenVINO", percentage: 75, color: "#FFDB58" }
    ]
  },
  {
    title: "ANN - SNN Conversion",
    technologies: "Pytorch, Keras, Python, CUDA, ANN, SNN, CNN",
    date: "April 2024",
    description: [
      "Developed & optimized a fully connected neural network for handwritten digit recognition using MNIST, achieving high accuracy.",
      "Converted the ANN to an SNN, maintaining robust performance across multiple timesteps.",
      "Optimized firing rates to minimize energy consumption, integrating synaptic device constraints to align with near-ideal SNN performance metrics.",
    ],
    skills: [
      { skill: "Keras", percentage: 75, color: "#FFDB58" },
      { skill: "PyTorch ", percentage: 80, color: "#FFDB58" },
      { skill: "Python", percentage: 90, color: "#FFDB58" }
    ]
  },
  {
    title: "Visual Question Answering",
    technologies: "Encoders, Computer Vision, NLP, Python, MUTAN, LSTM, CNN",
    date: "April 2022",
    description: [
      "Built the VQA network model, encoding input image and query by a Convolutional Neural Net and an LSTM respectively.",
      "Optimized VQA response generation by adapting advanced fusion technique, increasing model accuracy to 93%.",
    ],
    skills: [
      { skill: "NLP", percentage: 80, color: "#FFDB58" },
      { skill: "Computer Vision", percentage: 85, color: "#FFDB58" },
      { skill: "Python", percentage: 95, color: "#FFDB58" }
    ]
  },
  {
    title: "Single Video Moment Retrieval",
    technologies: "SVMR, Python, XML, Encoders, Computer Vision, ResNet, GPUs",
    date: "March 2022",
    description: [
      "Developed a system for locating specific time spans in videos based on user queries and image inputs.",
      "Achieved an impressive accuracy level of 92.3%, demonstrating the system’s efficiency in detecting video components in response to queries and generating corresponding time spans on the video.",
    ],
    skills: [
      { skill: "NLP", percentage: 80, color: "#FFDB58" },
      { skill: "Computer Vision", percentage: 85, color: "#FFDB58" },
      { skill: "Python", percentage: 95, color: "#FFDB58" }
    ]
  },
  {
    title: "Tone-Control Karaoke Circuit",
    technologies: "Multi sim, Design Tools, PCB Design, Layout Design",
    date: "December 2020",
    description: [
      "Led the design, simulation, and construction of a comprehensive tone-control/Karaoke circuit, enhancing sound quality and user interaction.",
      "Developed a modular five-block circuit system consisting of Mixer/Karaoke (B1), Baxandall Tone Control (B2), Volume Control (B3), 4-level LED Volume Display (B4), Attenuator and Output Driver (B5), streamlining design for improved modification capabilities and utilization in courses EE210, 310 (Circuit courses).",
    ],
    skills: [
      { skill: "Electronics and Circuits", percentage: 95, color: "#FFDB58" },
      { skill: "Multisim", percentage: 93, color: "#FFDB58" },
      { skill: "PCB Design", percentage: 97.5, color: "#FFDB58" }
    ]
  },
  // Add other projects similarly
];

export function Projects() {
  const [visibleProjectIndex, setVisibleProjectIndex] = useState(null);

  const toggleProjectDetails = (index) => {
    if (visibleProjectIndex === index) {
      setVisibleProjectIndex(null);
    } else {
      setVisibleProjectIndex(index);
    }
  };

  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Projects</Heading>
        <List>
          {projectData.map((project, index) => (
            <ListItem key={index}>
              <ProjectSummary>
                <div>
                  <h3>{project.title}</h3>
                  <p><i>Technologies: {project.technologies} | {project.date}</i></p>
                </div>
                <ToggleButton onClick={() => toggleProjectDetails(index)}>
                  {visibleProjectIndex === index ? 'Hide Details' : 'Show Details'}
                </ToggleButton>
              </ProjectSummary>
              {visibleProjectIndex === index && (
                <ProjectDetails>
                  <ul>
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <SkillBarsContainer>
                    {project.skills.map((skill, i) => (
                      <SkillBar key={i} skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                    ))}
                  </SkillBarsContainer>
                </ProjectDetails>
              )}
            </ListItem>
          ))}
        </List>
      </motion.div>
    </Section>
  );
}
