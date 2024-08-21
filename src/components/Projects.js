import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import { FaAward } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { IoMdCodeWorking } from 'react-icons/io';

const Section = styled.section`
  padding: 20px;
  background: #f9f9f9;
`;

const Heading = styled.h2`
  color: #333;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled(motion.button)`
  background-color: #FFDB58;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 10px;
  color: #333;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFD700;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const ListItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 204, 0.9);
  }
`;

const ProjectSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const ProjectTech = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const ToggleButton = styled(motion.button)`
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

const ProjectDetails = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  overflow: hidden;
`;

const SkillBarsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; // Changed to column layout
  gap: 5px; // Reduced gap for better alignment
`;

const SkillBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SkillName = styled.span`
  flex: 1;
  font-weight: bold;
`;

const SkillBarContainer = styled.div`
  flex: 3;
  margin-left: 10px;
`;

const DescriptionContainer = styled.div`
  margin-right: 20px;
`;

const projectData = [
  {
    title: "ProductSense AI: HackPSU Fall23",
    category: "AI/ML",
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
    category: "Academic/Research",
    technologies: "Pytorch, Python, CUDA GPUs, C++, Spiking Neural Networks, CNN",
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
    category: "AI/ML",
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
    category: "AI/ML",
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
    title: "Optimized Adder Circuit",
    category: "Hardware/Embedded Systems",
    technologies: "Cadence Virtuoso, Design Tools, IC Layout, Layout Design",
    date: "December 2023",
    description: [
      "Designed and developed an optimized 4-bit adder circuit using Cadence Virtuoso, progressing from schematic creation to the Layout Versus Schematic (LVS) verification stage. This project focused on achieving high performance and accuracy in digital circuit design.",
      "Implemented a modular approach by designing and simulating critical cell blocks, including AND, NOR, XOR, and INVERTER gates, which served as the foundational components for the adder circuit. This structured methodology ensured a robust and scalable design framework.",
      "Enhanced circuit performance by integrating D flip-flops within the adder design, significantly mitigating delay components and improving overall timing accuracy. This optimization is crucial for maintaining signal integrity and efficient data processing in high-speed applications.",
      "Conducted comprehensive design, compilation, and LVS extraction of the adder circuit, ensuring that the layout accurately reflects the intended schematic design. The resulting layout is now utilized as a base component for more complex circuit designs within the curriculum.",
      "Gained hands-on experience with advanced IC layout tools and methodologies, solidifying expertise in digital circuit design, layout optimization, and performance enhancement. These skills are directly applicable to VLSI design, microelectronics, and other hardware engineering roles."
    ],
    skills: [
      { skill: "IC Design", percentage: 90, color: "#FFDB58" },
      { skill: "Cadence Virtuoso", percentage: 95, color: "#FFDB58" },
      { skill: "Digital Circuit Optimization", percentage: 85, color: "#FFDB58" },
      { skill: "Layout Design", percentage: 90, color: "#FFDB58" },
      { skill: "Hardware Simulation", percentage: 87, color: "#FFDB58" }
    ]
  }, 
  {
    title: "All-Pairs Shortest Path (APSP) in CUDA",
    technologies: "CUDA, OpenMPI, Git",
    date: "April 2023",
    description: [
      "Developed a high-performance blocked All-Pairs Shortest Path (APSP) algorithm using CUDA, focusing on parallelization techniques to significantly enhance computational efficiency. Leveraged the power of GPUs to handle large-scale graph datasets with thousands of nodes, achieving substantial speedups compared to traditional CPU-based implementations.",
      "Implemented Floyd-Warshall’s algorithm as the foundation for the APSP solution, optimizing the process through dynamic memory management, shared memory streams, and dynamic load balancing. This approach ensured efficient utilization of GPU resources, reducing execution time while maintaining accuracy.",
      "Incorporated OpenMPI for distributed memory parallelization, further enhancing performance by enabling concurrent processing across multiple processors. This combination of CUDA and OpenMPI allowed for scalability across different hardware configurations, making the solution adaptable to various computational environments.",
      "Conducted extensive testing and benchmarking to validate the performance improvements. The CUDA implementation demonstrated significant reductions in computation time compared to sequential and non-blocked approaches, with a noticeable improvement in cache locality and reduced communication overhead.",
      "Gained in-depth knowledge of GPU programming, parallel algorithms, and distributed systems, equipping me with the skills necessary for high-performance computing roles, algorithm design, and software optimization in a variety of technical domains."
    ],
    skills: [
      { skill: "GPU Programming", percentage: 90, color: "#FFDB58" },
      { skill: "CUDA", percentage: 95, color: "#FFDB58" },
      { skill: "Parallel Algorithms", percentage: 90, color: "#FFDB58" },
      { skill: "OpenMPI", percentage: 85, color: "#FFDB58" },
      { skill: "Performance Optimization", percentage: 88, color: "#FFDB58" }
    ]
  },  
  {
    title: "Parallel Sudoku Solver",
    category: "Software Development/Systems",
    technologies: "C++, OpenMP, DevCloud",
    date: "February 2023",
    description: [
      "Engineered a highly efficient parallel Sudoku solver in C++, leveraging OpenMP to optimize performance for multi-threaded environments. This project focused on maximizing computational efficiency through parallel processing, significantly reducing the time required to solve complex Sudoku puzzles.",
      "Implemented a robust backtracking algorithm for puzzle solving, adapted for concurrent processing across multiple threads. This approach ensured that the solver could efficiently explore and prune the solution space, minimizing unnecessary computations.",
      "Conducted comprehensive benchmarks comparing the performance of sequential and parallel versions of the solver. Results demonstrated a substantial reduction in computation time on various datasets, with the parallel version achieving up to X times faster processing compared to the sequential implementation.",
      "Analyzed scalability by varying thread counts and problem sizes, which revealed effective load balancing and parallel execution. This analysis underscored the solver's ability to maintain high performance across different computational environments, highlighting its robustness and adaptability.",
      "Through this project, gained in-depth knowledge of parallel programming, optimization techniques, and performance benchmarking, all of which are critical skills for roles in high-performance computing, software development, and algorithm design."
    ],
    skills: [
      { skill: "Parallel Programming", percentage: 90, color: "#FFDB58" },
      { skill: "C++", percentage: 95, color: "#FFDB58" },
      { skill: "OpenMP", percentage: 85, color: "#FFDB58" },
      { skill: "Algorithm Optimization", percentage: 90, color: "#FFDB58" },
      { skill: "Performance Benchmarking", percentage: 87, color: "#FFDB58" }
    ]
  },   
  {
    title: "Visual Question Answering",
    category: "AI/ML",
    technologies: "Encoders, Computer Vision, NLP, Python, MUTAN, LSTM, CNN",
    date: "April 2022",
    description: [
      "Developed a robust Visual Question Answering (VQA) network model that processes visual and textual data by encoding images using a Convolutional Neural Network (CNN) and queries using a Long Short-Term Memory (LSTM) network. This dual-modality approach ensures that both visual and textual information is effectively captured and analyzed.",
      "Engineered the VQA model to perform advanced fusion techniques, including the integration of the MUTAN fusion method, which combines question and image embeddings across multiple feed-forward layers. This method significantly enhances the interaction between visual and textual data, leading to more accurate and context-aware answers.",
      "Achieved a notable 93% accuracy in VQA response generation by optimizing the fusion and encoding layers. This improvement was realized through extensive experimentation and fine-tuning of the model parameters, ensuring that the system consistently delivers precise and relevant answers.",
      "The VQA system demonstrates strong generalization across diverse datasets, making it well-suited for applications in areas such as automated customer support, interactive systems, and AI-driven educational tools."
    ],
    skills: [
      { skill: "Natural Language Processing (NLP)", percentage: 80, color: "#FFDB58" },
      { skill: "Computer Vision", percentage: 85, color: "#FFDB58" },
      { skill: "Python", percentage: 95, color: "#FFDB58" },
      { skill: "Deep Learning", percentage: 90, color: "#FFDB58" },
      { skill: "Advanced Fusion Techniques", percentage: 85, color: "#FFDB58" }
    ]
  },  
  {
    title: "Single Video Moment Retrieval",
    category: "AI/ML",
    technologies: "SVMR, Python, XML, Encoders, Computer Vision, ResNet, GPUs",
    date: "March 2022",
    description: [
      "Engineered a sophisticated system for Single Video Moment Retrieval (SVMR) capable of accurately locating specific time spans within videos based on user queries and image inputs. This project involved developing a complex pipeline that integrates multiple advanced machine learning models and fusion techniques.",
      "Utilized advanced fusion techniques to effectively combine information from both video embeddings and textual queries. The system processes these embeddings through multiple feed-forward layers, ensuring precise temporal alignment and high contextual relevance.",
      "Leveraged ResNet for video feature extraction and fine-tuned RoBERTa for text feature representation, ensuring robust and reliable performance across diverse datasets. This combination enabled the system to achieve a significant 92.3% accuracy rate, reflecting its efficiency in detecting relevant video components in response to user queries.",
      "Optimized the system for deployment on GPUs, utilizing Colab for streamlined development and training. The project involved extensive experimentation with various hyperparameters to maximize model performance while maintaining computational efficiency.",
      "Demonstrated the system’s effectiveness through rigorous testing, validating its capability to generate precise time spans within videos that correspond to user queries, with minimal error and high interpretability."
    ],
    skills: [
      { skill: "Natural Language Processing (NLP)", percentage: 80, color: "#FFDB58" },
      { skill: "Computer Vision", percentage: 85, color: "#FFDB58" },
      { skill: "Python", percentage: 95, color: "#FFDB58" },
      { skill: "Machine Learning", percentage: 90, color: "#FFDB58" },
      { skill: "Deep Learning", percentage: 85, color: "#FFDB58" }
    ]
  },  
  {
    title: "Operating System Process Simulator",
    category: "Software Development/Systems",
    technologies: "C++, C, Multi-threading, Performance Optimization",
    date: "February 2021",
    description: [
      "Developed a highly efficient multi-threaded operating system process simulator in C/C++ that effectively manages critical system tasks such as process scheduling, memory management, and disk operations. This simulator ensures optimal resource utilization and seamless process execution.",
      "Engineered core system functions including process simulation, disk-to-memory data transfers, and sophisticated page handling mechanisms. Optimized the simulator to handle complex operations like timer interrupts, disk interrupts, page faults, and process state transitions with high reliability.",
      "Conducted in-depth performance evaluations to assess and improve the impact of various buffer sizes and degrees of parallelism on system throughput. Achieved a significant 25% reduction in execution time by fine-tuning these parameters.",
      "Collected and analyzed comprehensive execution statistics, including context switches, disk interrupts, Translation Lookaside Buffer (TLB) hits/misses, and page faults. Attained a remarkable 95% accuracy in simulating real-world process behaviors."
    ],
    skills: [
      { skill: "C++", percentage: 90, color: "#FFDB58" },
      { skill: "C", percentage: 85, color: "#FFDB58" },
      { skill: "Multi-threading", percentage: 80, color: "#FFDB58" },
      { skill: "Performance Optimization", percentage: 85, color: "#FFDB58" }
    ]
  },  
  {
    title: "Tone-Control Karaoke Circuit",
    category: "Hardware/Embedded Systems",
    technologies: "MultiSim, Design Tools, PCB Design, Layout Design",
    date: "December 2020",
    description: [
      "Led the design, simulation, and construction of a comprehensive tone-control Karaoke circuit, aimed at enhancing both sound quality and user interaction. This project involved end-to-end development, from initial concept through to functional deployment on a breadboard.",
      "Developed a modular five-block circuit system, streamlining the design for improved modification capabilities. Each block was designed for a specific function, enabling easy adjustments and upgrades for various use cases.",
      "Engineered the Mixer/Karaoke (B1) block, implementing adaptive input amplitudes to support customized sound mixing. Integrated operational amplifiers provided precise signal control, achieving balanced and high-fidelity audio output.",
      "Designed and implemented the Baxandall Tone Control (B2) block, which featured variable bass and treble controls. These controls allowed users to fine-tune audio output according to their preferences, offering a personalized listening experience.",
      "Constructed the Volume Control (B3) block using voltage divider principles, ensuring a smooth and consistent transition from mute to maximum volume. This design guaranteed reliable volume adjustments without distortion.",
      "Enhanced user experience through a 4-level LED Volume Display (B4), offering real-time visual feedback on audio levels. This feature added an intuitive and interactive element to the user interface.",
      "Optimized the circuit’s final output with an Attenuator and Output Driver (B5) block. This ensured that output levels were kept within a specified range, effectively minimizing distortion and protecting downstream components."
    ],
    skills: [
      { skill: "Electronics and Circuits", percentage: 95, color: "#FFDB58" },
      { skill: "MultiSim", percentage: 93, color: "#FFDB58" },
      { skill: "PCB Design", percentage: 97.5, color: "#FFDB58" },
      { skill: "Operational Amplifiers", percentage: 90, color: "#FFDB58" },
      { skill: "Signal Processing", percentage: 85, color: "#FFDB58" }
    ]
  },
  {
    title: "Design Space Exploration",
    technologies: "Xilinx, FPGA, Assembly Language Coding, MIPs",
    date: "January 2020 – March 2020",
    description: [
      "Led a comprehensive Design Space Exploration (DSE) project, focusing on an 18-dimensional processor pipeline and memory hierarchy. Utilized SimpleScalar as the evaluation engine to analyze and optimize design points, balancing both performance and energy efficiency across 1,000+ design configurations.",
      "Employed heuristic-based approaches to intelligently navigate the vast design space, pruning non-optimal configurations and prioritizing high-impact design points. This process significantly accelerated the identification of optimal designs, ensuring effective use of computational resources.",
      "Conducted in-depth performance assessments using dual optimization functions—focusing on both the geometric mean of normalized execution time and the energy-delay product (EDP)—to identify the best-performing and most energy-efficient designs.",
      "Validated the exploration results using five data set design points, refining heuristics for targeted design exploration. The insights gained from this process informed the creation of custom heuristics that effectively balance performance and energy goals.",
      "Gained expertise in FPGA-based design, MIPS architecture, and advanced simulation techniques, equipping me with critical skills in hardware design optimization, performance analysis, and energy-efficient computing."
    ],
    skills: [
      { skill: "Design Space Exploration (DSE)", percentage: 90, color: "#FFDB58" },
      { skill: "FPGA Design", percentage: 85, color: "#FFDB58" },
      { skill: "Assembly Language Coding", percentage: 80, color: "#FFDB58" },
      { skill: "Performance Optimization", percentage: 88, color: "#FFDB58" },
      { skill: "Energy Efficiency Analysis", percentage: 87, color: "#FFDB58" }
    ]
  },
  
  
  // Add other projects similarly
];


export function Projects() {
  const [visibleProjectIndex, setVisibleProjectIndex] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  const toggleProjectDetails = (index) => {
    if (visibleProjectIndex === index) {
      setVisibleProjectIndex(null);
    } else {
      setVisibleProjectIndex(index);
    }
  };

  const handleFilterClick = (category) => {
    if (category === 'All') {
      setFilteredProjects(projectData);
    } else {
      const filtered = projectData.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <Section>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading>Projects</Heading>
        <List>
        <FilterContainer>
          <FilterButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleFilterClick('All')}>
            <BsFillGridFill style={{ marginRight: '8px' }} /> All Projects
          </FilterButton>
          <FilterButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleFilterClick('AI/ML')}>
            <IoMdCodeWorking style={{ marginRight: '8px' }} /> AI/ML
          </FilterButton>
          <FilterButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleFilterClick('Hardware/Embedded Systems')}>
            <IoMdCodeWorking style={{ marginRight: '8px' }} /> Hardware/Embedded Systems
          </FilterButton>
          <FilterButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleFilterClick('Software Development/Systems')}>
            <IoMdCodeWorking style={{ marginRight: '8px' }} /> Software Development/Systems
          </FilterButton>
          <FilterButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleFilterClick('Academic/Research')}>
            <IoMdCodeWorking style={{ marginRight: '8px' }} /> Academic/Research
          </FilterButton>
          </FilterContainer>
        </List>

        <List>
          {filteredProjects.map((project, index) => (
            <ListItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectSummary>
                <div>
                  <ProjectTitle><FaAward style={{ marginRight: '8px', color: '#FFD700' }} /> {project.title}</ProjectTitle>
                  <ProjectTech><i>Technologies: {project.technologies} | {project.date}</i></ProjectTech>
                </div>
                <ToggleButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleProjectDetails(index)}
                >
                  {visibleProjectIndex === index ? 'Hide Details' : 'Show Details'}
                </ToggleButton>
              </ProjectSummary>

              {visibleProjectIndex === index && (
                <ProjectDetails
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <DescriptionContainer>
                    <ul>
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </DescriptionContainer>
                  <SkillBarsContainer>
                    {project.skills.map((skill, i) => (
                      <SkillBarWrapper key={i}>
                        <SkillName>{skill.skill}</SkillName>
                        <SkillBarContainer>
                          <SkillBar skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                        </SkillBarContainer>
                      </SkillBarWrapper>
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




