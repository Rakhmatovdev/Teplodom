import { useState } from "react"
import { useHook } from "../context/AuthContext"

function Modal() {
  const {show,setShow,
    addOform}=useHook()
  const [inputValue,setInputValue]=useState({
  name:"",
  lname:"",
  tel:998,
  count:0,
  where:""
  })
const handleSubmit=()=>{
  setShow(false)
  addOform(inputValue)
}
  return(<>
    {show && <div className="modall-backdrop">
        <div className="modall">
         <div className="d-flex align-items-center justify-content-between" >
          <h3 className="card-name">Modal registratsiya</h3>
          <button className="btn btn-danger" onClick={()=>setShow(false)}>X</button>
         </div>
       <form className="form-control mt-2 mb-2" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name..." className="form-control mb-2 mt-2" value={inputValue.name} onChange={(e)=>setInputValue(prev=>({...prev,name:e.target.value}))}/>
        <input type="text" placeholder="Last Name..." className="form-control mb-2" value={inputValue.lname} onChange={(e)=>setInputValue(prev=>({...prev,lname:e.target.value}))}/>
        <input type="number" placeholder="Telefon Number..." className="form-control mb-2" value={inputValue.tel} onChange={(e)=>setInputValue(prev=>({...prev,tel:e.target.value}))}/>
        <input type="number" placeholder="Counts..." className="form-control mb-2" value={inputValue.count} onChange={(e)=>setInputValue(prev=>({...prev,count:e.target.value}))}/>
        <input type="text" placeholder="Where..." className="form-control mb-2" value={inputValue.where} onChange={(e)=>setInputValue(prev=>({...prev,where:e.target.value}))}/>
      <button type="button" className="btn btn-info" onClick={handleSubmit}>Submit</button>
       </form> 
           <button className="btn btn-secondary" onClick={()=>setShow(false)}>
           Close</button>
        </div>
    </div>}
  </>)
}

export default Modal