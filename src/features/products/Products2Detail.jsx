import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";

const Products2Detail = () => {
  const {p2Id}=useParams()
  console.log(p2Id);
  const {data}=useFetch(`http://localhost:7777/products2?id=${p2Id}`)
 
  return (
    <div className="container mx-auto my-20">
{data?.map((product)=>{
return (<div key={product.id}>
<div className='border-2 flex gap-3 justify-center  flex-wrap shadow-lg shadow-cyan-400 ' key={product.id}>
         <div className="">  <img className='mx-auto bg-cover w-full h-[200px]' src={product.image} alt="" />
          
            <h1 className=' font-bold mt-2 text-2xl'>Name: {product.name}</h1>
            <h1 className='font-bold mt-2 text-green-400'>Price: {product.price} sum</h1>
            </div> 
            <h2 className="text-xl w-[600px] mt-2 ">{product.body}</h2>
          </div>
</div>)
})}
    </div>
  )
}

export default Products2Detail