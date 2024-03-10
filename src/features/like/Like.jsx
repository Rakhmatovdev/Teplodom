import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeLike } from "./LikeSlie";
import { addBacket } from "../backet/BacketSlice";
import { message } from 'antd';
const Like = () => {
  const data = useSelector((state) => state.like.like);
  const dispatch = useDispatch();

  const handleBacket=(product)=>{
    dispatch(addBacket(product))
    message.open({
      type: "success",
      content: "добавлено в корзину",
    });
  }
  const handleLike=(product)=>{
    dispatch(removeLike(product))
    message.open({
      type: "error",
      content: "удалено в избранное",
    });
  }


  return (
    <div className="bg-stone-100">
      <div className="container mx-auto">
      <h1 className="pt-8 text-3xl">Избранные товары</h1>
        <div className="flex flex-wrap gap-3 justify-start  py-12">
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
                    className="flex items-center flex-1 rounded-lg  gap-2  bg-yellow-400 px-7 py-2 "
                    onClick={() => handleBacket(product)}
                  >
                    <i className='bx bxs-shopping-bags fa-xl'></i>        
           <span className="text-lg">В корзину</span>
                  </button>
                  <button
                    className="border-2 text-stone-200 hover:border-red-500 hover:text-red-500   rounded-lg   px-2"
                    onClick={() => handleLike( product.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
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

export default Like;
