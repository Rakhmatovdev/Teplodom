import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/ProductSlice";
import { addBacket } from "../features/backet/BacketSlice";
import { addLike } from "../features/like/LikeSlie";
import { message } from 'antd';

const NewProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getProducts(200));
  }, []);

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



  return (
    <div className="bg-stone-100">
      <div className="container mx-auto">
        <div className="flex justify-between text-xl py-8">
          <h1 className="font-semibold tracking-wider  text-2xl  ">Новинки на сайте</h1>
          <NavLink to={"/new"}>
            <span className="text-lg text-sky-600 hover:underline underline-offset-1 hover:text-fuchsia-500  ">Смотреть все &gt;</span>
          </NavLink>
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
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
    </div>
  );
};
export default NewProducts;
