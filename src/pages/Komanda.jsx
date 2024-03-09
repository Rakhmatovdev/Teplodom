const Komanda = () => {
  return (
    <div className="bg-stone-100">
      <div className="container md   mx-auto  ">
        <div className="text-xl flex justify-between items-center pt-20">
          <h1 className="text-2xl font-semibold ">Наши команда</h1>
          <div className="text-lg text-sky-600 hover:underline underline-offset-1 hover:text-sky-500">&gt;</div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-8">
          <div className="w-[255px] h-[295px] bg-white rounded-xl">
            <div className=" mx-auto my-7 w-[155px] h-[156px]">
              <img className="rounded-full" src="/photos/person.jpg" alt="" />
            </div>
            <div className="text-center text-lg">Jasur Rakhmatov</div>
            <div className="text-center text-sm text-stone-400 mt-2">
              Frontend Developer
            </div>
          </div>
          <div className="w-[255px] h-[295px] bg-white rounded-xl">
            <div className=" mx-auto my-7 w-[155px] h-[156px]">
              <img className="rounded-full" src="/photos/person2.jpg" alt="" />
            </div>
            <div className="text-center text-lg">Farrux Rakhmatov</div>
            <div className="text-center text-sm text-stone-400 mt-2">
              Android Developer
            </div>
          </div>
          <div className="w-[255px] h-[295px] bg-white rounded-xl">
            <div className=" mx-auto my-7 w-[155px] h-[156px]">
              <img className="rounded-full" src="/photos/person3.jpg" alt="" />
            </div>
            <div className="text-center text-lg">Omadbek Abdullayev</div>
            <div className="text-center text-sm text-stone-400 mt-2">
              Frontend Developer
            </div>
          </div>
          <div className="w-[255px] h-[295px] bg-white rounded-xl">
            <div className=" mx-auto my-7 w-[155px] h-[156px]">
              <img className="rounded-full" src="/photos/person4.jpg" alt="" />
            </div>
            <div className="text-center text-lg">Elmurod Murodov</div>
            <div className="text-center text-sm text-stone-400 mt-2">
              Frontend Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komanda;
