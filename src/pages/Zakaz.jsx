import { Fragment } from "react";
import { useHook } from "../context/AuthContext";

const Zakaz = () => {
  const { oform, zakaz } = useHook();
  //add to complite

  console.log(oform);
  console.log(zakaz);
  return (
    <div
      className="container card d-flex gap-3 card-group w-100 mt-2 mb-2 justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      {zakaz.length <= 0 && (
        <button
          disabled
          className="d-flex justify-content-center align-items-center w-100"
          style={{ opacity: "0.2", textAlign: "center", fontSize: "100px" }}
        >
          <div>No Product</div>
        </button>
      )}
      <div className="card card-group justify-content-around align-items-center">
        <div className="zakaz">
          {zakaz &&
            zakaz.map((product, index) => {
              return (
                <Fragment key={index}>
                  <div className=" mb-5" key={product.id}>
                    <div className="card card-box ">
                      <div className="card-image ">
                        <img
                          src={product.image || product.thumbnail}
                          alt=""
                          id="imgs"
                        />
                      </div>

                      <div className="card-title p-4 justify-content-around">
                        <div className="">
                          <h4 className="fw-bolder mb-5 ">{product.title}</h4>
                          <h4 className="fw-bolder mb-5 ">{product.price}$</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
        </div>
        <div className="oform">
          {oform &&
            oform.map((user, key) => {
              return (
                <div key={user.tel}>
                  <div className="card-title card mt-5">
                    <h3>Name: {user.name}</h3>
                    <h3>Lname: {user.lname}</h3>
                    <h3>Number: {user.tel}</h3>
                    <h3>Counts: {user.count}</h3>
                    <h3>Where: {user.where}</h3>
                    <h4>Price: {user.count * zakaz[key].price}$</h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Zakaz;
