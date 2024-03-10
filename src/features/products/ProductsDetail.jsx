import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "./ProductSlice";
import { addBacket } from "../backet/BacketSlice";
import { addLike } from "../like/LikeSlie";
import { message } from "antd";

const ProductsDetail = () => {
  const { pId } = useParams();
  const detail = useSelector((state) => state.products.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(pId));
  }, []);

  const handleBasket = (item) => {
    dispatch(addBacket(item));
    message.open({
      type: "success",
      content: "добавлено в корзину",
    });
  };
  const handleLike = (item) => {
    dispatch(addLike(item));
    message.open({
      type: "success",
      content: "добавлен в избранное ",
    });
  };

  return (
    <>
      <div className="container mx-auto my-20">
        {detail?.map((product) => {
          return (
            <div key={product.id}>
              <div className="rounded-xl bg-white flex gap-3 justify-center  flex-wrap">
                <div className="px-4 py-4  w-[428px] h-[400px]">
                  
                  <img
                    className=" h-[356px] xs:w-[420px] xs:h-[393.4px]  mb-2 bg-cover"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="px-4 py-4 flex-1 relative">
                  <h1 className=" hidden sm:block  text-[30px] font-semibold mb-[30px]">
                    {product.name}
                  </h1>
                  <h2 className="text-[20px] font-normal mb-[33px] ">
                    {product.body}
                  </h2>
                  <div className=" flex gap-[14px] items-center mb-[33px]">
                    <img
                      src="/photos/size.svg"
                      alt="dasdasdada "
                      className=" w-[28px] h-[21px]"
                    />
                    <p className="text-[20px] font-normal">
                      (1.185*0.585)(20мм)
                    </p>
                  </div>

                  <div className=" flex items-center gap-2  mb-[20px]">
                    <span className=" text-[28px] text-red-500 font-medium">
                      {product.price} cум{" "}
                    </span>
                    <span className=" line-through text-gray-500 font-normal text-[18px]">
                      {product.price + product.price * 0.1} сум
                    </span>
                  </div>
                  <div className=" flex gap-[10px]">
                    <img
                      src="/photos/wallet.svg"
                      className=" w-[50px] h-[50px] bg-[#FEB12A]  rounded-md py-2 px-2  object-contain border-black "
                      alt=" logo"
                    />
                    <img
                      src="/photos/calendar.svg"
                      className=" w-[50px] h-[50px] border-[2px]  rounded-md py-2 px-2 object-contain border-black "
                      alt=" logo"
                    />
                    <img
                      src="/photos/backet.png"
                      onClick={() => handleBasket(product)}
                      className=" cursor-pointer w-[50px] h-[50px] border-[2px]  rounded-md py-2 px-2  object-contain border-black "
                      alt=" logo"
                    />
                    <img
                      src="/photos/like1.png"
                      onClick={() => handleLike(product)}
                      className=" cursor-pointer w-[50px] h-[50px] border-[2px]  rounded-md py-2 px-2  object-contain border-black "
                      alt=" logo"
                    />
                    <div className=" flex items-center border-2 border-gray-500 rounded-md px-2 gap-1">
                      <button className="text-[25px]  h-full font-semibold cursor-pointer">
                        -
                      </button>
                      <p className=" flex items-center text-[20px] border-x-[1px]  h-full  border-black px-2 font-semibold cursor-pointer">
                        2
                      </p>
                      <button className="text-[25px] h-full  font-semibold cursor-pointer">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsDetail;
