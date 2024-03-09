import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../features/user/UserSlice";

const Navbar = () => {
  const dispatch=useDispatch()
  const searchValue=useSelector(state=>state.user.search)
  return (
    <div className=" container  mt-16 mx-auto">
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
          <label className=" hidden  md:flex flex-row  border-2 h-[56px] rounded-2xl  px-4 pr-40 font-medium items-center bg-white">
            <img
              src="/photos/search.png"
              alt=""
              className="inline-flex h-[26px]"
              
            />
            <input
              type="text"
              className=" py-2 outline-none px-2 "
              autoComplete="off"
              placeholder="Поиск..."
          
              value={searchValue}
              onChange={(e)=>dispatch(setSearchValue(e.target.value))}
            />
          </label>

          <div  className="gap-4 flex items-center text-black">
            <NavLink to="like" className=" px-4 py-3.5 rounded-full bg-slate-50 focus:bg-orange-500 focus:text-white ">
              <i className="fa-regular fa-heart fa-lg"></i>{" "}
            </NavLink>
            <NavLink to="backet" className=" px-4 py-3.5 rounded-full bg-slate-50 text-black focus:bg-orange-500 focus:text-white">
              <i className="bx bxs-shopping-bags fa-lg"></i>
            </NavLink>
            <NavLink to="user" className="flex gap-4 items-center  px-4 py-3.5 rounded-full bg-slate-50 text-black focus:bg-orange-500 focus:text-white">
              <i className="fa-regular fa-user fa-lg"></i>
              <span className="hidden lg:flex"> Профиль</span>
            </NavLink>{" "}
          </div>
        </div>
        <div className="flex md:hidden items-center justify-between mt-3">
          <div className="" onClick={()=>dispatch()}>
            <img src="/photos/Bar.png" alt="" />
          </div>     
            <label className=" flex bg-white  flex-row  border-2 h-[44px] rounded-2xl pr-10 font-medium items-center">
              <img
                src="/photos/search.png"
                alt=""
                className="inline-flex h-[26px] px-2"
              />
              <input
                type="text"
                className="pr-20 py-2 outline-none "
                autoComplete="off"
                placeholder="Поиск..."
              />
            </label>
          <div className=""><img src="/photos/sidebar.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
