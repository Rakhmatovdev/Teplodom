import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <nav className="container mx-auto mt-12 ">
        <div className=" ">
          <div className="gap-3 items-center justify-between hidden md:flex">
            <NavLink
              to={"/sale"}
              className={"btn-orange"}
            >
              Товары по акции
            </NavLink>
            <NavLink to={"/new"} className={"btn-orange"}>
            Новинки
            </NavLink>
            <NavLink to={"/postavshik"} className={"btn-orange"}>
            Поставщикам
            </NavLink>
            <NavLink to={"/contacts"} className={"btn-orange"}>
            Контакты
            </NavLink>
            <NavLink to={"/vozvrat"} className={"btn-orange"}>
            Возврат товара
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Category;
