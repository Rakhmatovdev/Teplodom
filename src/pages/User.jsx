import { NavLink } from "react-router-dom";
import user from "../photos/userR.jpeg";
import { useHook } from "../context/AuthContext";
import UserModal from "../components/UserModal";
const User = () => {
  const { userValue, setShow, show, setUserValue } = useHook();

  return (
    <div className="container mt-2 mb-2">
      <h1 className="text-center text-secondary">Личный кабинет</h1>

      <div className="user-wrap d-flex align-items-center mt-3 mb-3 gap-5">
        <div className="user-image">
          <img
            src={userValue.data?.url ? userValue.data.url : user}
            alt=""
            width={"260px"}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="user-des card" style={{ width: "100%" }}>
          <h2 className="user-name text-primary mt-2">
            Full name: {userValue.data?.name ? userValue.data.name : "Jasur"}
            {userValue.data?.lname
              ? userValue.data.lname.toUpperCase().slice(0, 1)
              : "R"}
          </h2>
          <h2 className="user-number text-info mt-2">
            Tell:{" "}
            {userValue.data?.tel
              ? "+" + userValue.data.tel
              : "+998(94)-976-09-26"}
          </h2>
          <h2 className="user-date text-success">
            Birthday:{" "}
            {userValue.data?.date ? userValue.data.date : "2003-26-02"}
          </h2>
          <button
            className="user-male btn btn-light d-flex text-secondary"
            disabled
          >
            <div>Gender:</div>{" "}
            <div>
              {userValue.data?.gender ? userValue.data.gender : "Person"}
            </div>
          </button>
        </div>
      </div>
      <div className="card">
        <NavLink
          to={"/zakaz"}
          className="card card-group justify-content-between mt-2"
        >
          <div className="name">Mои заказы</div> <div className="icon">></div>{" "}
        </NavLink>
        <NavLink
          to={"/like"}
          className="card card-group justify-content-between mt-2"
        >
          <div className="name">Mои отзывы</div> <div className="icon">></div>{" "}
        </NavLink>
        <button className="card card-group justify-content-between mt-2">
          <div className="name">Mои чаты</div> <div className="icon">></div>{" "}
        </button>
        <button
          className="card card-group justify-content-between mt-2"
          onClick={() => setShow(true)}
        >
          <div className="name">Мой профиль</div> <div className="icon">></div>{" "}
        </button>
        <button className="card card-group justify-content-between mt-2">
          <div className="name">Настройка</div> <div className="icon">></div>{" "}
        </button>
        <select name="til" id="" className="  mt-2 form-control form-select">
          <option value="uz">Uzbek tili</option>
          <option value="ru">Руский язык</option>
          <option value="en">English Language</option>
        </select>
        <select name="davlat" id="" className="  mt-2 form-control form-select">
          <option value="uz">Uzbekistan</option>
          <option value="ru">Руссия</option>
          <option value="en">England</option>
        </select>

        <button
          className="btn btn-control btn-outline-dark mt-4"
          onClick={() =>
            setUserValue({
              namer: "",
              lname: "",
              tel: 998,
              date: "",
              gender: "",
              url: "",
            })
          }
        >
          Выйти
        </button>
        {show && <UserModal />}
      </div>
    </div>
  );
};

export default User;
