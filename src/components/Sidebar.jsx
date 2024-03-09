import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className={`flex flex-col pt-[30px] absolute z-10 bg-white  w-full h-screen px-2 top-0 left-0 rounded-r-[15px] sidebar`}>
          <div className=" flex items-center justify-between">
            <div className=" flex justify-start items-center gap-1">
              <img src="/photos/logo.png" alt="navbar logo" className="  w-[49px] h-[49px] sm:w-[70px] sm:h-[70px] object-contain" />
              <div className=" flex flex-col items-center">
                <h2 className=" text-[14]  sm:text-[24px] font-bold text-orange-500">TEPLODOM</h2>
                <p className=" flex flex-col text-[9.1px] items-center font-normal sm:text-[13px] leading-[105%]">
                  <span>Интернет магазин</span> <span>строй материалов</span>{" "}
                </p>
              </div>
            </div>
            <div className=" h-[44px] w-[44px] bg-slate-200  rounded-full flex items-center justify-center  cursor-pointer">
              {/* <img src="/photos/like.png" alt="like icon" className=" h-[16px] w-[16px]" onClick={() => setNav((prev) => !prev)} /> */}
            </div>
          </div>
          <div className="my-10 flex flex-col ">
            {/* {links.map(({ id, title, link }) => (
              <Link key={id} to={link} className={`py-3  text-[18px] font-bold ${id == links.length ? "" : "border-b-2  border-black pr-4"} active:-rotate-1  focus:-rotate-1 transition-all duration-300 `}>
                {title}
              </Link>
            ))} */}
          </div>
        </section>
  )
}

export default Sidebar