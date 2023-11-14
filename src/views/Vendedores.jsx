import { useState } from 'react'
import Spinner from '../components/Spinner';
import Table from '../components/Table';
import Filters from '../components/Filters';

const Vendedores = () => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)

  return (
    <div>
        <h1 className='font-bold text-xl mb-3 mt-6'>Tabla de comisiones de vendedores por período</h1>
        <Filters data={data} setData={setData} setLoading={setLoading}/>
        {" "}
        { loading ? <Spinner /> : <Table data={data} /> }
    </div>
  )
}

export default Vendedores