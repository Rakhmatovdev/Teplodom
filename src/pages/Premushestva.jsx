const Premushestva = () => {
  return (
    <div className="bg-stone-100">
      <div className="container mx-auto">
        <h1 className="text-2xl tracking-wider font-semibold pt-20">
          Наши преимущества
        </h1>
        <div className="flex flex-wrap justify-center items-center  ">
          <div className="flex gap-6 w-[400px] pt-16">
            <div className="bg-blue-200 w-14 rounded-full px-1 scale-125     ">
              <img
                src="/photos/service/star.svg"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <span className="text-xl">
              50 000 довольных <br />
              клиентов по всей страна
            </span>
          </div>
          <div className="flex gap-6 w-[400px] pt-16 items-center ">
            <div className="bg-fuchsia-300 flex items-center  w-14 h-14  rounded-full px-1 scale-125      ">
              <img
                src="/photos/service/plain.svg"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <span className="text-xl">
              99% заказов приходит <br />в назначенное время
            </span>
          </div>
          <div className="flex gap-6 w-[400px] pt-16 items-center">
            <div className="bg-sky-200 w-14 h-14 flex items-center rounded-full px-1 scale-125      ">
              <img
                src="/photos/service/shop.svg"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <span className="text-xl">
              5 лет на рынке
              <br />
              инструмента и техники
            </span>
          </div>
          <div className="flex gap-6 w-[400px] pt-16 items-center">
            <div className="bg-orange-200 w-14 h-14 rounded-full px-1 scale-125  flex  items-center   ">
              <img
                src="/photos/service/box.svg"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <span className="text-xl">
              Боле 5 000 позиций <br />
              товаров на складах
            </span>
          </div>
          <div className="flex gap-6 w-[400px] pt-16 items-center">
            <div className="bg-green-200 w-14 h-14 flex items-center  rounded-full px-1 scale-125      ">
              <img
                src="/photos/service/trusk.svg"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <span className="text-xl">
              Боле 5 000 позиций <br />
              товаров на складах
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premushestva;
