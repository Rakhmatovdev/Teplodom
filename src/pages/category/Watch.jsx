
import { NavLink } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'
import { Fragment } from 'react';
import like from "../../photos/like.svg"
import { useDispatch } from 'react-redux';
import { addBacket, addLike, addSale } from '../../router/FirstSlice';

const Watch = () => {
    const dispatch=useDispatch()
    const {data,loading,error}=useFetch('https://dummyjson.com/products/category/mens-watches')
  return (
    <div className='container'>
  {loading && <h1>...</h1>}
        {error && <h1>{error}</h1>}
        <div className="wrapper d-flex flex-wrap justify-content-between">

{data?.products.map((product) => {
          return (
            <Fragment key={product.id}>
              <div className="card m-2">
                <div className="card-image">
               <NavLink to={`/sale`}>   <img
                    src={product.thumbnail}
                    alt={product.title}
                    id="imgs"
                    className="cover"
                    width={"100"}
                 onClick={()=>dispatch(addSale(product))}
                  /></NavLink>
                </div>
                <div className="card-titlee h3 mt-2">{product.title.slice(0, 10)}</div>
                <div className="card-price mt-2 text-danger">Price: {product.price} $</div>
                <div className="buttons d-flex gap-2 mt-3">
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(addBacket(product))}
                  >
                    <div className="fa fa-basket-shopping"></div> В корзину
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(addLike(product))}
                  >
              
                 <img src={like} alt="" />
                  </button>
                </div>
              </div>
            </Fragment>
          );
        })}
        </div>
    </div>
  )
}

export default Watch