import { useEffect } from "react";
import { getCategory } from "./CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const RootCategory = () => {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (<div className="bg-stone-100">
    <div className="container mx-auto">
      <div className="flex justify-between mt-14 text-xl">
        <div className="font-semibold text-2xl tracking-wider   ">Категории</div>
        <NavLink to={"category"} className="text-lg text-sky-600 hover:underline underline-offset-1 hover:text-fuchsia-500 ">
          Все &gt;
        </NavLink>
      </div>
      <ul className=" flex overflow-hidden snap-proximity  gap-3 justify-between mt-8 pb-10 snap-x">
        {category.slice(0, 6).map((category) => {
          return (
            <NavLink
              to={`/products/products1/${category.categoryId}`}
              className="snap-center rounded-2xl bg-white flex flex-col py-2 w-[160px] h-[202px] "
              key={category.id}
            >
              <img
                className="mx-auto bg-cover w-[130px] h-[110px] "
                src={category.image}
                alt=""
              />
              <h1 className="text-center flex-1 flex mt-3 items-center mx-auto">
                <span>{category.name}</span>
              </h1>
            </NavLink>
          );
        })}
      </ul>
    </div>
    
    </div> );
};

export default RootCategory;
