import React from 'react';
import styled from 'styled-components';

const SkillBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const SkillLabel = styled.label`
  flex: 1;
  color: #555;
`;

const ProgressContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  width: 100%;
`;

const Progress = styled.div`
  background-color: #6c757d; /* Professional shade */
  height: 100%;
  width: ${props => props.percentage}%;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const PercentageLabel = styled.span`
  margin-left: 10px;
  color: #555;
`;

const SkillBar = ({ skill, percentage }) => {
  return (
    <SkillBarContainer>
      <SkillLabel>{skill}</SkillLabel>
      <ProgressContainer>
        <ProgressBar>
          <Progress percentage={percentage}></Progress>
        </ProgressBar>
        <PercentageLabel>{percentage}%</PercentageLabel>
      </ProgressContainer>
    </SkillBarContainer>
  );
};

export default SkillBar;
