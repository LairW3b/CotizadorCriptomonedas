import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useMonedas from '../hook/useMonedas'
import Error from './Error'
import { monedas } from '../data/monedas'

const Contenedor = styled.form`
  display: flex;
  flex-wrap: wrap;
  /* @media (min-width: 991px){

  } */
  margin-bottom: 10px;
`

const InputSubmit = styled.input`
  width: 90%;
  margin: 15px;
  padding: 12px;
  border-style: none;
  border-radius: 5px;
  background-color: #1985e4;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  @media (min-width: 990px) {
    width: 95%;
  }
`

const Formulario = ({ setMonedas }) => {

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useMonedas('Elige tu Moneda', monedas)
  const [criptomoneda, SelectCriptomoneda] = useMonedas('Elige tu Criptomoneda', criptos);

  useEffect(() => {
    const consultaAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map(cripto => {
        const obj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return obj
      })
      setCriptos(arrayCriptos)
    }
    consultaAPI()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([moneda, criptomoneda].includes('')) {
      setError(true)
      return
    }

    setError(false)

    setMonedas({
      moneda,
      criptomoneda
    })
  }

  return (
      <Contenedor onSubmit={handleSubmit}>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit
          type='submit'
          value='Cotizar'
        />
      </Contenedor>
  )
};

export default Formulario;
