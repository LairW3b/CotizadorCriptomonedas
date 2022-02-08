import styled from '@emotion/styled';
import { useState} from 'react'

const Label = styled.label`
  display: block;
  margin: 15px;
  color: #fff;
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
`
const Select = styled.select`
  display: block;
  width: 90%;
  height: 40px;
  margin: 0 auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #1985e4;
  @media (min-width: 990px){
    width: 95%;
  }
`

const useMonedas = (label, opciones) => {

  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
     <Label>{label}</Label> 
     <Select
      value={state}
      onChange={ e => setState( e.target.value)}
     >
       <option value="">Selecciona</option>
       {opciones.map(opcion => (
         <option
          key={opcion.id}
          value={opcion.id}
         >
           {opcion.nombre}
         </option>
       ))}
     </Select>
    </>
  )

  return [ state, SelectMonedas ]

};

export default useMonedas;
