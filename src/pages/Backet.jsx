import { Fragment } from "react";
import { useHook } from "../context/AuthContext";
import Modal from "../components/Modal";
import deleteI from "../photos/delete.svg";

const Backet = () => {
  const { backet, deleteBacket,show,setShow,addZakaz } = useHook();
  //add to complite
const handeComplite=(data)=>{
setShow(true)
addZakaz(data)
}
  
  return (
    <div   className="container card d-flex gap-3 card-group w-100 mt-2 mb-2 justify-content-between"
    style={{ minHeight: "100vh" }}>
      
      {backet.length <= 0 && (
        <button disabled className="d-flex justify-content-center align-items-center w-100" style={{opacity:"0.2",textAlign:"center",fontSize:"100px"}}><div >No Product</div></button>
      )}
        {backet &&
          backet.map((product, index) => {
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
                    <div className="card-title p-4  ">
                      <div className="">
                        <h2 className="fw-bolder mb-5 ">
                          {product.title.slice(0, 10)}
                        </h2>
                        <div className="d-flex gap-2">
                          <button className="btn btn-info text-light" onClick={()=>handeComplite(product)}>
                            Оформить
                          </button>
                          <button
                            className="btn btn-outline"
                            onClick={() => deleteBacket(product.id)}
                          >
                            <img src={deleteI} alt={deleteI} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
         {show &&  <Modal/>}
      </div>
 
  );
};

export default Backet;
