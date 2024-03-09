import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "./ProductSlice";

const ProductsDetail = () => {
  const { pId } = useParams();
  const detail = useSelector((state) => state.products.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(pId));
  }, []);
  return (
    <>
      <div className="container mx-auto my-20">
        {detail?.map((product) => {
          return (
            <div key={product.id}>
              <div className="rounded-xl bg-white flex gap-3 justify-center  flex-wrap">
                <div className="px-4 py-4">
                  {" "}
                  <img
                    className="mx-auto bg-cover w-[424px] h-[471px]"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="px-4 py-4 flex-1 relative">
                <h1 className=" font-bold text-center mt-2 text-2xl">
                  {product.name}
                </h1>
                <h2 className="text-xl  mt-2 absolute ">{product.body}</h2>

                <h1 className="font-bold mt-2 text-green-400">
                  Price: {product.price} sum
                </h1>
                
                <div className="flex mt-80 pt-4 pl-20">
                  <div className="p-4 border-2"></div>
                  <div className="p-4 border-2"></div>
                  <div className="p-4 border-2"><img src="/photos/backet.png" alt="" /></div>
                  <div className="p-4 border-2"><img src="/photos/like.png" alt="" /></div>
                  <div className="flex">
                  <div className="p-4 border-2">+</div>
                  <div className="p-4 border-2 w-4"><input className=" outline-none w-4" type="number"/></div>
                  <div className="p-4 border-2">-</div>
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
