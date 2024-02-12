import { NavLink } from "react-router-dom";
import { useHook } from "../context/AuthContext";
import like from "../photos/like.svg";
import user from "../photos/user.svg";

const Navbar = () => {
  const { searchValue, setSearchValue } = useHook();
  return (
    <div className="bg-info">
      <div className="container p-3 page-wrapper d-flex justify-content-between">
        <div className="page1 d-flex gap-3">
          <div className="button">Seller Control</div>
          <div className="button">Download</div>
          <NavLink to={"/contacts"} className="button">
            Follow us one
          </NavLink>
          <div className="fa fa-facebook"></div>
          <div className="fa fa-instagram-square"></div>
        </div>
        <div className="page2 d-flex gap-3">
          <div className="fa fa-info-circle"></div>
          <div className="button">Support</div>
          <div className="button">Register</div>
          <NavLink to={"login"} className="button">Login</NavLink>
          <NavLink to={"/user"} className="button d-flex align-items-center">
            <img src={user} alt="" /> User
          </NavLink>
        </div>
      </div>
      <div className="logow container d-flex justify-content-between p-3 align-items-center">
        <div className="logo d-flex gap-3 ">
          <div className="fa fa-bars"></div>

          <NavLink to={"/"} className="fa fa-shop">
            {" "}
            Jasurinc
          </NavLink>
        </div>

        <div className="fa fa-search d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск..."
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="icons d-flex gap-2 align-items-center">
          {" "}
          <NavLink to={"/backet"} className=" fa fa-basket-shopping"></NavLink>
          <NavLink to={"/like"}>
            <img src={like} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
