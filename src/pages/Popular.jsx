import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/ProductSlice";
import { addBacket } from "../features/backet/BacketSlice";
import { addLike } from "../features/like/LikeSlie";

const Popular = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getProducts(200));
  }, []);
  return (
    <div className="bg-stone-100">
      <div className="container mx-auto pt-20">
        <div className="flex justify-between text-xl py-4">
          <h1 className="font-semibold tracking-wider  text-2xl  ">Популярные товары</h1>
          <NavLink to={"/new"}>
            <span className="text-lg text-sky-600 hover:underline underline-offset-1 hover:text-sky-500">Смотреть все &gt;</span>
          </NavLink>
        </div>
        <div className="flex flex-wrap mt-8 gap-4 justify-between">
          {data.map((product) => {
            return (
              <div
                className="bg-white rounded-2xl w-[255px] h-[401px] relative"
                key={product.id}
              >
                <NavLink to={`/products/${product.id}`} className="">
                  <img
                    className="mx-auto my-4 bg-cover w-[177px] h-[177px]"
                    src={product.image}
                    alt=""
                  />
                </NavLink>
                <h1 className="text-sm w-[240px] px-4 absolute top-60">
                  {product.name}
                </h1>
                <h2 className="px-4  pt-24 font-bold">
                  {Math.floor(product.price / 1000)}
                  <span> 000</span> sum
                </h2>
                <div className="flex px-4 mt-3 gap-2 text-white ">
                  <button
                    className="flex items-center flex-1 rounded-lg  gap-1  bg-yellow-400 px-7 py-2 "
                    onClick={() => dispatch(addBacket(product))}
                  >
                    <i className='bx bxs-shopping-bags fa-xl'></i>        
                    <span className="text-lg">В корзину</span>
                  </button>
                  <button
                    className="bg-yellow-400 rounded-lg   px-2"
                    onClick={() => dispatch(addLike(product))}
                  >
                  <i className="fa-regular fa-heart fa-xl "></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Popular;
