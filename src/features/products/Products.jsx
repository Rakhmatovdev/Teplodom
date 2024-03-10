import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addBacket } from "../backet/BacketSlice";
import { addLike } from "../like/LikeSlie";
import { message } from "antd";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { pId } = useParams();
  useEffect(() => {
    dispatch(getProducts(pId));
  }, []);

//Backet
const handleBacket=(product)=>{
  dispatch(addBacket(product))
  message.open({
    type: "success",
    content: "добавлено в корзину",
  });
}

//Like
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
        <h1 className="text-xl font-semibold pt-10 ">Товары</h1>
        <ul className="flex flex-wrap  gap-3 justify-between   py-12">
          {products?.map((product) => {
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
                    className="flex items-center flex-1 rounded-lg    bg-yellow-400 px-7 py-2 "
                    onClick={() =>handleBacket(product)}
                  >
                    <img src="/photos/backet.png" alt="backet" />
                    <span className="text-lg">В корзину</span>
                  </button>
                  <button
                    className="bg-yellow-400 rounded-lg   px-2"
                    onClick={() =>handleLike(product)}
                  >
                    <img src="/photos/like1.png" alt="like" />
                  </button>
                </div>
              </div>
            );
          })}
        </ul>{" "}
      </div>
    </div>
  );
};

export default Products;
