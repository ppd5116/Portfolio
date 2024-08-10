import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

export function Footer() {
  return (
    <FooterContainer>
      &copy; 2024 Pallavi Das. All rights reserved.
    </FooterContainer>
  );
}
