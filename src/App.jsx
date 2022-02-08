import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

const Contenedor = styled.div`
  margin: 10px;
  @media (min-width: 990px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1000px;
    margin: auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {

        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
      }
      cotizarCripto()
    }
  }, [monedas]);


  return (
    <>
      <Header resultado={resultado} />
      <Contenedor>
          <Formulario
            setMonedas={setMonedas}
          />
          <Resultado
            resultado={resultado}
          />
      </Contenedor>
    </>
  )
}

export default App
