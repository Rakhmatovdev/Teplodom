import { Fragment } from "react";
import { useHook } from "../context/AuthContext";
import trash from "../photos/delete.svg"
const Like = () => {
  const { like, deleteLike,addToBacket } = useHook();
  return (
    <div
      className="container card d-flex gap-3 card-group w-100 mt-2 mb-2 justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      {like.length <= 0 && (
        <button disabled className="d-flex justify-content-center align-items-center w-100" style={{opacity:"0.2",textAlign:"center",fontSize:"100px"}}><div >No Like</div></button>
      )}
      {like &&
        like.map((product, index) => {
          return (
            <Fragment key={index}>
              <div className=" mb-5" key={product.id}>
                <div className=" card ">
                  <div className="card-image ">
                    <img
                      src={product.image || product.thumbnail}
                      alt=""
                      id="imgs"
                    />
                  </div>
                  <div className="card-title p-4  ">
                    <div className="">
                      <h2 className="fw-bolder mb-5 ">
                        {product.title.slice(0, 10)}
                      </h2>
                      <div className="d-flex gap-2"></div>
                      <div className="buttons d-flex gap-2">
                        {" "}
                        <button
                          className="btn btn-warning   w-100"
                          onClick={() => addToBacket(product)}
                        >
                        В корзину
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => deleteLike(product.id)}
                        >
                          <img src={trash} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default Like;
