import styled from '@emotion/styled';
import React from 'react';

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
`
const Img = styled.img`
  width: 200px;
  height: 200px;
`

const Precio = styled.h3`
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 25px;
`
const Texto = styled.p`
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
`
const Resultado = ({ resultado }) => {
  const {
    PRICE,
    HIGHDAY,
    LOWDAY,
    CHANGEPCT24HOUR,
    IMAGEURL,
    LASTUPDATE
  } = resultado

  return (
    <>
      {IMAGEURL ? (
        <Contenedor>
          <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
          <div>
            <Precio>Precio: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto: <span>{HIGHDAY}</span></Texto>
            <Texto>{`Precio más bajo: ${LOWDAY}`}</Texto>
            <Texto> {`Variación últimas 24 hrs: ${CHANGEPCT24HOUR}`} </Texto>
            <Texto> {`Ultima actualización: ${LASTUPDATE}`} </Texto>
          </div>
        </Contenedor>
      ) : (
        <Contenedor>
          <Img
            src='https://www.cryptocompare.com/media/37746251/btc.png'
            alt="imagen cripto"
          />
        </Contenedor>
      )
      }
    </>
  )
};

export default Resultado;
