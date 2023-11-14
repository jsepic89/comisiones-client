import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Encargados = () => {

    const [ user, setUser ] = useContext(UserContext)

  return (
    <div>Encargados</div>
  )
}

export default Encargados