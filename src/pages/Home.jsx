import { NavLink } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
// import Flickityn from './Flickity';
const Home = () => {
const {data,loading,error}=useFetch("http://localhost:7777/category")
  return (
    <div className='container mx-auto'>
      <ul className='flex flex-wrap gap-3 justify-between mt-4 mb-10'>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data?.map((category) => {
          return (
            <NavLink to={`/products/${category?.category}`} className='border-2 w-[300px] h-[250px] shadow-lg shadow-cyan-400' key={category.id}>
              <img className='mx-auto bg-cover w-full h-[200px]' src={category.image} alt="" />
              <h1 className='text-center'>{category.name}</h1>
            </NavLink>
          );
        })}
      </ul>
{/* <Flickityn/> */}
    </div>
  )
}

export default Home