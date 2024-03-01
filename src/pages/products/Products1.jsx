import { useFetch } from "../../hooks/useFetch"
import { NavLink } from 'react-router-dom';

const Products1 = () => {
  const {data,loading,error}=  useFetch("http://localhost:7777/products")
  return (
    <div className="container mx-auto">
        <ul className='flex flex-wrap gap-3 justify-between my-12'>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data?.map((product) => {
          return (
            <NavLink to={`/products/${product.id}`} className='border-2 w-[300px] h-[250px]' key={product.id}>
            <img className='mx-auto bg-cover w-full h-[200px]' src={product.image} alt="" />
            <h1 className='text-center'>{product.name}</h1>
          </NavLink>
          )
        })}
   </ul> </div>
  )
}

export default Products1