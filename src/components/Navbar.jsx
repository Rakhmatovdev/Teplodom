import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../features/FirstSlice";

const Navbar = () => {
  const dispatch=useDispatch()
  const searchValue=useSelector(state=>state.todo.search)
  return (
    <div className=" container mt-12 mx-auto">
      <div className="">
        <div className="flex items-center justify-between  ">
          <NavLink to="/" className="flex">
            <img className="bg-cover " src="/photos/logo.png" alt="user" />
            <div className="flex flex-col ml-1">
              <span className="text-2xl font-extrabold text-orange-500 ">
                TEPLODOM
              </span>
              <span className="text-sm ml-1 text-black">
                Интернет магазин <br />
                строй материалов
              </span>
            </div>
          </NavLink>
          <label className=" hidden  md:flex flex-row  border-2 h-[45px] rounded-xl pr-10 font-medium items-center">
            <img
              src="/photos/search.png"
              alt=""
              className="inline-flex h-[26px]"
              
            />
            <input
              type="text"
              className="pr-20 py-2"
              autoComplete="off"
              placeholder="Поиск..."
              value={searchValue}
              onChange={(e)=>dispatch(setSearchValue(e.target.value))}
            />
          </label>

          <NavLink to="like" className="gap-4 flex items-center text-black">
            <div className=" p-2 rounded-full bg-slate-50">
              <i className="fa-regular fa-heart fa-lg"></i>{" "}
            </div>
            <NavLink to="backet" className=" p-2 rounded-full bg-slate-50 text-black">
              <i className="bx bxs-shopping-bags fa-lg"></i>
            </NavLink>
            <NavLink to="user" className="flex gap-2 items-center  p-2 rounded-full bg-slate-50 text-black">
              <i className="fa-regular fa-user fa-lg"></i>
              <span className="hidden lg:flex"> Профиль</span>
            </NavLink>{" "}
          </NavLink>
        </div>
        <div className="flex md:hidden items-center justify-between mt-3">
          <div className="">
            <i className="fa-solid fa-bars fa-lg"></i>
          </div>     
            <label className=" flex   flex-row  border-2 h-[45px] rounded-xl pr-10 font-medium items-center">
              <img
                src="/photos/search.png"
                alt=""
                className="inline-flex h-[30px]"
              />
              <input
                type="text"
                className="pr-20 py-2"
                autoComplete="off"
                placeholder="Поиск..."
              />
            </label>
          <div className=""><i className='bx bx-bar-chart-square fa-xl' ></i></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
