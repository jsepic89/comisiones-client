import { useContext, useState } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(false)
    const navigate = useNavigate();
    const [ user, setUser ] = useContext(UserContext)

    if (user){
      return <Navigate to={'/'} />
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {username, password})
          const token = response.data.token;
          setError(false)
          localStorage.setItem('token', token);
          localStorage.setItem('user', response.data.user.displayName)
          setUser(response.data.user)
          navigate('/')
        } catch (err) {
          setError(true)
          setUsername("");
          setPassword("");
        }
    }

    const handleUserChange = (e) => {
      setUsername(e.target.value)
      setError(false)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
      setError(false)
    }
  
    return ( 
      <div className='flex flex-col items-center justify-center sm:h-[80vh]'>        
        <div className="w-[70%] md:w-[50%] lg:w-[35%] h-fit p-4 bg-blue-100 min-w-fit rounded-md border-2 border-slate-400">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl">Iniciar sesión</h1>
            <form action="" className="flex flex-col gap-4 justify-center w-[80%] sm:w-[60%]">
                <input onChange={handleUserChange} value={username} type="email" autoComplete='username' placeholder="Email" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-blue-400'/>
                <input onChange={handlePasswordChange} value={password} type="password" autoComplete='current-password' placeholder="Contraseña" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-blue-400'/>
                {error && <div className='bg-red-500 p-2 text-white rounded-md text-center'>Usuario o contraseña inválidos</div>}
                <button 
                  onClick={handleSubmit}
                  className='sm:w-[60%] sm:self-center mt-2 text-md sm:text-lg md:text-xl px-8 py-2 bg-blue-200 rounded-md p-2 hover:bg-blue-400 disabled:pointer-events-none disabled:bg-gray-200'
                  disabled={!username || !password}
                  >Ingresar
                </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default Login