import { useState } from 'react'
import calls from '../utils/APICallsInterceptor'

const Filters = ({ setData, setLoading }) => {

    const [ month, setMonth ] = useState('')
    const currentYear = new Date().getFullYear();
    const [ year, setYear ] = useState(currentYear)
    const [ error, setError ] = useState(null)

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
      }
    
    const handleYearChange = (e) => {
    setYear(e.target.value)
    }

    const handleClick = async () => {
        setLoading(true)
        await calls.get(`/comisiones/${year}/${month}`)
    .then(response => {
        setData(response.data);
        setLoading(false)
        setError(null)
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error.response.data.error)
        setLoading(false)
    });
    }

    const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4]
    
    const months = [
    { month: "Enero", id: 1 },
    { month: "Febrero", id: 2 },
    { month: "Marzo", id: 3 },
    { month: "Abril", id: 4 },
    { month: "Mayo", id: 5 },
    { month: "Junio", id: 6 },
    { month: "Julio", id: 7 },
    { month: "Agosto", id: 8 },
    { month: "Septiembre", id: 9 },
    { month: "Octubre", id: 10 },
    { month: "Noviembre", id: 11 },
    { month: "Diciembre", id: 12 }
    ]

  return (
    <>
        <div className='flex flex-row gap-4 justify-center m-4'>
            <label className='text-xl self-center'>Período: </label>
            <select className='p-2 border-blue-200 border-2 rounded-md' value={month} onChange={handleMonthChange}>
            <option value={""} disabled>Seleccione</option>
            {months.map(m => {
                return (<option value={m.id} key={m.id}>{m.month}</option>)
            })}
            </select>
            <select className='p-2 border-blue-200 border-2 rounded-md' value={year} onChange={handleYearChange}>
            {years.map(y => {
                return (<option value={y} key={y}>{y}</option>)
            })}
            </select>
            <button type='submit' className='bg-blue-200 rounded-md p-2 hover:bg-blue-400 disabled:pointer-events-none disabled:bg-gray-200' onClick={handleClick} disabled={!month}>Aplicar</button>
        </div>
        { month && 
        <p className='mb-2'>Período seleccionado: <span className='font-bold'>{month === '1' ? (
        "22 de Diciembre al 21 de Enero de " + year
        ) : (
        `22 de ${months[month-2].month} al 21 de ${months[month-1].month} de ${year}`
        )}</span></p>
        }
        {" "}
        {error && <div className='bg-red-500 p-2 text-white rounded-md text-center mx-auto mt-4 w-[50%] md:w-[35%] lg:w-[25%]'>{error}</div>}
    </>
  )
}

export default Filters