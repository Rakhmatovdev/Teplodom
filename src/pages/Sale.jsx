import { useState } from "react"
import { useHook } from "../context/AuthContext"
import wallet from '../photos/uiw_pay.png'
import page from '../photos/loadingpage.png'
import backet from '../photos/backet.svg'
import like from "../photos/like.svg"
import size from "../photos/size.png"

const Sale = () => {
  const [count, setCount] = useState(0) 
 const {sale,deleteSale,addToBacket,addToLike}= useHook()
 
  return (
  <div  className="container w-100 mt-2 mb-2 justify-content-between"
    style={{ minHeight: "100vh"}}>  
    {sale.length <= 0 && (    <button className=" d-flex justify-content-center align-items-center w-100" style={{opacity:"0.2",textAlign:"center",fontSize:"100px"}} disabled ><div >No Sale</div></button>
    )}
     
{sale?.map((product)=>{
return(<div className="card mt-2" key={product.id}>
       <div className=" card-wrapper d-flex gap-2">
 <div className="card-image">
  <img src={product.thumbnail || product.image} alt="" style={{maxWidth:"400px"}}/>
 </div>
       <div className="card-left">
        <div className="card-titlee h2 text-center">{product.title}</div>
        <div className="card-body h4">{product.description}</div>
        <div className="card-size offset-1 mt-2 mb-2"><img src={size} alt="" />   ({product.discountPercentage} * {product.stock}) ({Math.floor(product.stock || 40)-20}mm)</div>
        <div className="prices d-flex gap-3">
           <div className="card-pricee h2 text-danger offset-1">{product.price} $</div>
        <del className="card-sale fs-5 text-secondary">{Math.floor(product.price+product.rating) || product.price+3} $</del>
        </div>
       
        <div className="buttons d-flex gap-3 mt-3">
          <button className="btn btn-warning"><img src={wallet} alt="" /></button>
          <button className="btn btn-outline-warning" onClick={()=>deleteSale(product.id)}><img src={page} alt="" /></button>
          <button className="btn btn-outline-warning" onClick={()=>addToBacket(product)}><img src={backet} alt="" /></button>
          <button className="btn btn-outline-warning" onClick={()=>addToLike(product)}><img src={like} alt="" /></button>
          <div className="button-count btn-group">
            <button className="btn btn-info" onClick={()=>setCount(prev=>prev+=1)}>+</button>
            <input type="number" className="text-center" value={count} disabled style={{width:"46px"}} />
            <button className="btn btn-danger" onClick={()=>setCount(prev=>prev-=1)}>-</button>
          </div> 
        </div>
       </div>

       </div>
      
       </div>)


})}
       
    </div>
  )
}

export default Sale
