import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const NavBar = () => {

    const [ user, setUser ] = useContext(UserContext)

    const handleClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        setUser(null)
    }


  return (
    <>
        {
            user &&
            <div className='flex flex-row justify-end'>
                <button type='submit' className='bg-blue-200 rounded-md p-2 hover:bg-blue-400 disabled:pointer-events-none disabled:bg-gray-200' onClick={handleClick}>Cerrar sesión</button>
            </div>
        }
    </>
  )
}

export default NavBar