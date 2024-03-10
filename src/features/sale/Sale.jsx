import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { message } from 'antd';
import { getProducts } from "../products/ProductSlice";
import { addBacket } from "../backet/BacketSlice";
import { addLike } from "../like/LikeSlie";

const Sale = () => {
  const dispatch = useDispatch();
  const data=useSelector(state=>state.products.products)
  useEffect(()=>{
    dispatch(getProducts(204))
  },[])

  const handleBacket=(product)=>{
    dispatch(addBacket(product))
    message.open({
      type: "success",
      content: "добавлено в корзину",
    });
  }

  const handleLike=(product)=>{
    dispatch(addLike(product))
    message.open({
      type: "success",
      content: "добавлено в избранное",
    });
  }






  return (<div className="bg-stone-100">
    <div className="container mx-auto">
      <div className="text-2xl pt-14 pb-8 font-semibold tracking-wider"> Товары по акции</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_1fr] gap-x-20 gap-y-16 pb-8">
          {data.map((product) => {
            return (
              <div
                className="bg-white rounded-2xl w-[255px] h-[401px] relative"
                key={product.id}
              >
                <NavLink to={`/products/${product.id}`} className="">
                  <img src="/photos/sale.png" alt="" className="absolute -top-2 -left-[9px] " />
                  <img
                    className="mx-auto my-4 bg-cover w-[177px] h-[177px]"
                    src={product.image}
                    alt=""
                  />
                </NavLink>
                <h1 className="text-sm w-[240px] px-4 absolute top-56">
                  {product.name}
                </h1>
                <h2 className="px-4  pt-[70px] font-bold text-red-500 line-through text-sm">
                  {Math.floor(product.price / 1000*1.1)}
                  <span> 000</span> sum
                </h2>
                <h2 className="px-4   font-bold">
                  {Math.floor(product.price / 1000)}
                  <span> 000</span> sum
                </h2>
                <div className="flex px-4 mt-3 gap-2 text-white ">
                  <button
                    className="flex items-center flex-1 rounded-lg  gap-1  orange px-7 py-2 "
                    onClick={() => handleBacket(product)}
                  >
                    <i className='bx bxs-shopping-bags fa-xl'></i>        
                    <span className="text-lg">В корзину</span>
                  </button>
                  <button
                    className="orange rounded-lg   px-2"
                    onClick={() =>handleLike(product)}
                  >
                  <i className="fa-regular fa-heart fa-xl "></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
    </div>
 </div> );
};

export default Sale;
