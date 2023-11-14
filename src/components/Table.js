import React from 'react'
import TableHeaders from './TableHeaders'

const Table = ({ data }) => {
  return (
    <table className='table-auto border border-separate border-slate-300 rounded-md mx-auto'>
        <thead>
        <tr>
            <TableHeaders data={data} />
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr key={index} className='hover:bg-slate-100'>
            <td className='border'>{item.Numero_Empleado}</td>
            <td className='border'>{item.Nombre_y_Apellido}</td>
            <td className='border'>$ {item.Comision_a_Pagar}</td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Table