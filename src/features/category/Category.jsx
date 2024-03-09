import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCategory } from "./CategorySlice";

const Category = () => {
  const { category}=useSelector(state=>state.category)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCategory())
  },[])

  return (<div className="bg-stone-100">
    <div className=" container mx-auto">
      <h1 className="text-xl font-semibold pt-10 ">Категории</h1>
      <ul className='flex flex-wrap gap-3 justify-between mt-4 mb-10'>
        
    {category.map((category) => {
      return (
        <NavLink to={`/products/products1/${category?.categoryId}`} className='border-2 w-[264px] h-[255px] rounded-xl bg-white' key={category.id}>
          <img className='mx-auto bg-cover w-[201px] h-[171px] my-4' src={category.image} alt="" />
          <h1 className='text-center text-lg font-semibold'>{category.name}</h1>
        </NavLink>
      );
    })}
  </ul></div>
  </div>)
}

export default Category