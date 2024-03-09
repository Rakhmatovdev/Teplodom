import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeBacket } from "./BacketSlice";
const Backet = () => {
  const data = useSelector((state) => state.backet.backet);
  const dispatch = useDispatch();
  return (
    <div className="bg-stone-100">
      <div className="container mx-auto">
        <h1 className="pt-8 text-3xl">Корзинка</h1>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start py-12">
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
                  <button className="flex items-center gap-2 flex-1 rounded-lg    bg-yellow-400 px-7 py-2 ">
                  <i className="fa-solid fa-file-contract fa-lg"></i>
                    <span className="text-lg">Оформить</span>
                  </button>
                  <button
                    className="border-2 text-stone-200 hover:border-red-500 hover:text-red-500   rounded-lg   px-2"
                    onClick={() => dispatch(removeBacket(product.id))}
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

export default Backet;
