import { NavLink } from "react-router-dom";
import { useHook } from "../context/AuthContext";

const Category = () => {
  const { setSearchValue } = useHook();
  return (
    <div>
      <nav className="container mt-4 mb-3">
        <div className=" ">
          <div className="pages d-flex gap-3 align-items-center justify-content-between btn-outline-warning ">
            <NavLink
              to={"/phone"}
              className={"btn btn-outline-warning align-items-center"}
            >
              Smartphones
            </NavLink>
            <NavLink to={"/laptop"}
              className={"btn btn-outline-warning text"}

            >
              Laptops
            </NavLink>
            <NavLink to={"/parfume"}
              className={"btn btn-outline-warning"}
            >
              Parfume
            </NavLink>
            <NavLink to={"/skincare"}
              className={"btn btn-outline-warning "}
            >
              Skincare
            </NavLink> 
            <NavLink to={"/watch"}
              className={"btn btn-outline-warning "}
            
            >
              Watch
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Category;
