import styled from '@emotion/styled';
import React from 'react';
import cripto from '../img/cripto.png'
import link from '../img/linkedin.png'
import git from '../img/git.png' 
import gmail from '../img/gmail.png'

const Stylefooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #010814;
  margin: auto;
  padding: 20px;
  color: #fff;
  width: 1000px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #1c212a;
`
const Ancor = styled.a`
  text-decoration: none;
  color: #fff;
  width: 70px;
`
const Img = styled.img`
  width: 120px;
  margin-left: 35px;
`
const Contacto = styled.div`
  display: grid;
`
const Enlaces = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  justify-content: center;
  gap: 15px;
`
const ImgLinkedin = styled.img`
  width: 85px;
`
const ImgGit = styled.img`
  width: 70px;
`
const ImgGmail = styled.img`
  width: 70px;
`
const Cripto = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: auto;
`

const Footer = () => {
  return (
    <Stylefooter>
      <Cripto>
        <Ancor 
          href="https://www.cryptocompare.com/" 
          target="_blank"
        >
          <Img src={cripto} alt="logo criptocompare" />
        </Ancor>
        <p>API by Crypto Compare</p>
      </Cripto>
      <Contacto>
        <div>
          <h2>Contacto:</h2>
        </div>

        <Enlaces>
          <Ancor 
            href='https://www.linkedin.com/in/lair-rico-g-825328199/' 
            target="black"
          >
            <ImgLinkedin src={link} alt='logo linkedin'/>
          </Ancor>
     
          <Ancor
            href='https://github.com/LairW3b'
            target="_blank"
          >
            <ImgGit src={git} alt='logo github'/>
          </Ancor>
      
          <Ancor
            href='mailto:lair.w3b@gmail.com'
          >
            <ImgGmail src={gmail} alt='logo gmail'/>
          </Ancor>
        </Enlaces>

      </Contacto>

    </Stylefooter>
  )
};

export default Footer;
