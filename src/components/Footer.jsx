const Footer = () => {
  return (
    <div className="bg-slate-700 p-3">
      <div className="container flex flex-col text-white mx-auto">
        <div className="flex justify-between pt-12 flex-wrap md:m-0">
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-between ">
              <img src="/photos/logof.svg" alt="" className="w-20" />
              <div className=" flex-col flex ml-2">
                <span className="text-xl font-extrabold">TEPLODOM</span>
                <span className="text-sm w-60">
                  Интернет магазин <br />
                  строй материалов
                </span>
              </div>
            </div>
            <span className="mt-2  gap-2 items-start  hidden lg:flex">
              <i className="fa-solid fa-location-dot mt-1"></i> <i>ул.Уста Ширин, рынок{" "}
              <br />
              Джамий, дом 134</i>
            </span>
          </div>
          <div className="flex flex-col leading-8 w-60">
            <div className="font-black">Быстрые ссылки</div>
            <div className="">Мастерам</div>
            <div className="">Оформление заказа</div>
            <div className="">Пользовательское соглашение</div>
          </div>
          <div className="flex flex-col leading-8 w-60  mt-4 md:mt-0">
            <div className="font-black">Полезное</div>
            <div className="">О нас</div>
            <div className=""> Поставщикам</div>
            <div className=""> Возврат товара</div>
          </div>
          <div className="flex flex-col leading-8 w-60  mt-4 md:mt-0">
            <div className="font-black  "> Возврат товара</div>
            <div className="">
              <i className="fa-solid fa-phone"></i> +998 94 976 09 26
            </div>
            <div className="">
              <i className="fa-solid fa-phone"></i> +998 93 228 09 06
            </div>
            <div className="flex gap-3 mt-2">
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>
          <div className="flex leading-8 w-60 mt-4 gap-1 md:hidden">  <i className="fa-solid fa-location-dot mt-2"></i> <i>ул.Уста Ширин, рынок{" "}
              <br />
              Джамий, дом 134</i> </div>
        </div>
       <div className="text-center pb-4 pt-4">&copy;2021 Teplodom. Все права защищены</div> 
      </div>
    </div>
  );
};

export default Footer;
