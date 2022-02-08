import styled from '@emotion/styled';

const Cabezera = styled.header`
  max-width: 1200px;
  margin: auto;
  color: #fff;
  text-align: center;
  @media (min-width: 990px){
    font-size: 25px;
  }
`
const Contendor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
`
const Img = styled.img`
  width: 30%;
  height: 30%;
  @media (min-width: 990px){
    width: 10%;
    height: 10%;
  }
`

const Header = ({ resultado }) => {

  const { PRICE, IMAGEURL } = resultado

  return (
    <Cabezera>
      <hr />
      <Contendor>
        <Img
          src={IMAGEURL ? `https://www.cryptocompare.com${IMAGEURL}` : 'https://www.cryptocompare.com/media/37746251/btc.png'}
          alt="imagen cripto"
        />
        <h1>Cotiza Criptomonedas</h1>
        <Img
          src={PRICE ? `https://www.cryptocompare.com${IMAGEURL}` : 'https://www.cryptocompare.com/media/37746251/btc.png'}
          alt="imagen cripto"
        />
      </Contendor>
      <hr />
    </Cabezera>
  )
};

export default Header;
