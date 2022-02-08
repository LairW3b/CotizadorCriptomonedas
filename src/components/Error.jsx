import styled from '@emotion/styled';
import React from 'react';

const Texto = styled.p`
  color: #fff;
  width: 95%;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  /* text-transform: uppercase; */
  padding: 15px;
  border-radius: 5px;
  background-color: #c73636;
`
const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
