import styled from '@emotion/styled';
import React from 'react';

const Img = styled.img`
  width: 200px;
  height: 200px;
`
const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Imagencripto = ({ resultado }) => {
  const { IMGEURL } = resultado
  return (
    <Contenedor>
      <Img
        src={`https://cryptocompare.com/${resultado.IMAGEURL}}`}
        alt="imagen cripto"
      />
    </Contenedor>
  )
};

export default Imagencripto;
