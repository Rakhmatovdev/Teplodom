const Brend = () => {
  return (
    <div>
        <div className="bg-stone-100">
            <div className="container mx-auto pt-28">
                <div className="flex justify-between items-center text-xl">
                    <div className=" text-2xl font-semibold tracking-wider">Бренды</div>
                    <div className=""><span> </span> <span className="text-lg text-sky-600 hover:underline underline-offset-1 hover:text-fuchsia-500">&gt;</span>  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-10 pb-4">
                    <div className=" w-[193px] h-[181px] rounded-2xl bg-white">
                        <img src="photos/brand/image1.png" alt="" className="mx-auto my-2" />
                    </div>
                    <div className=" w-[193px] h-[181px] rounded-2xl bg-white">
                        <img src="photos/brand/image2.png" alt="" className="mx-auto my-2" />
                    </div>
                    <div className=" w-[193px] h-[181px] rounded-2xl bg-white">
                        <img src="photos/brand/image3.png" alt="" className="mx-auto my-2" />
                    </div>
                    <div className=" w-[193px] h-[181px] rounded-2xl bg-white">
                        <img src="photos/brand/image4.png" alt="" className="mx-auto my-2" />
                    </div>
                    <div className=" w-[193px] h-[181px] rounded-2xl bg-white">
                        <img src="photos/brand/image5.png" alt="" className="mx-auto my-2" />
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Brend