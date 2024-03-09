import Flickity from "react-flickity-component";
function Flickityn() {
  function Carousel() {
    return (
      <Flickity className="lg:container mx-auto mt-[20px] sm:mt-[60px]">
        <div
          className={`w-full h-[307px]   sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row xs:flex-row items-center lg:px-4 rounded-2xl `}
          style={{ backgroundImage: `url(${`./photos/h1.png`})` }}
        >
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white line-clamp-2 w-[121px] sm:w-full sm:text-[48px]">
              Пеноплекс Основа
            </h2>
            <p className=" hidden sm:block text-white max-w-[645px] mt-4 ">
              {" "}
              Пеноплэкс» — российская компания, производитель тепло- и
              гидроизоляционных, а также декоративно-отделочных материалов на
              основе полимеров, основной вид продукции — теплоизоляционные плиты
              из экструзионного пенополистирола
            </p>
            <p className=" block text-white sm:hidden w-[145px] line-clamp-4 mt-[12px]">
              производитель тепло- и гидроизоляционных материалов.
            </p>
          </div>
          <img
            src={`./photos/h2.png`}
            alt="Пеноплекс"
            className=" object-contain w-[150px] h-[151px] sm:h-[391px] sm:w-[317px]"
          />
        </div>
        <div
          className={` w-full h-[307px] sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row xs:flex-row items-center lg:px-4 px-3 rounded-2xl`}
          style={{
            backgroundImage: ` url(${`./photos/h3.png`})`,
            objectFit: "cover",
          }}
        >
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white  max-w-[129px]  sm:text-[48px]">
              Гипсакартон
            </h2>
            <p className="  text-white max-w-[645px] mt-4  line-clamp-4 sm:line-clamp-0">
              {" "}
              Cтроительный материал, представляющий собой лист, состоящий из
              двух слоёв строительной бумаги (картона) и сердечника из слоя
              затвердевшего гипсового теста с наполнителями.
            </p>
          </div>
          <img
            src={`./photos/h4.png`}
            alt="Пеноплекс"
            className=" object-contain w-[150px] h-[151px] sm:h-[391px] sm:w-[317px]"
          />
        </div>

        <div
          className={`w-full h-[307px]  sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row xs:flex-row items-center lg:px-4 px-3 rounded-2xl`}
          style={{ backgroundImage: `url(${`./photos/h5.png`})` }}
        >
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white line-clamp-2 w-[121px] sm:w-full sm:text-[48px]">
              Basalt wool тепло и тихо
            </h2>
            <p className=" hidden sm:block text-white max-w-[645px] mt-4 ">
              {" "}
              Cтроительный материал, представляющий собой лист, состоящий из
              двух слоёв строительной бумаги (картона) и сердечника из слоя
              затвердевшего гипсового теста с наполнителями.
            </p>
            <p className=" block text-white sm:hidden w-[145px] line-clamp-4 mt-[12px]">
              Cтроительный материал, представляющий собой лист состоящий из двух
              слоёв
            </p>
          </div>
          <div className=" flex justify-center items-center flex-col  relative">
            <img
              src={`./photos/h6.png`}
              alt="Пеноплекс"
              className=" sm:absolute  sm:top-32 object-contain w-[220px] h-[251px] sm:h-[391px] sm:w-[317px]"
            />
            <img
              src={`./photos/h7.png`}
              alt="Пеноплекс"
              className=" hidden  sm:block object-contain w-[120px] h-[151px] sm:h-[391px] sm:w-[317px]"
            />
          </div>
        </div>
        <div
          className={`w-full h-[307px]  sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row xs:flex-row items-center lg:px-4 px-3 rounded-2xl`}
          style={{ backgroundImage: `url(${`./photos/h8.png`})` }}
        >
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white line-clamp-2 w-[121px] sm:w-full sm:text-[48px]">
              Финская Фанера
            </h2>
            <p className=" hidden sm:block text-white max-w-[645px] mt-4 ">
              {" "}
              многослойный строительный материал, изготавливаемый путём
              склеивания специально подготовленного шпона. Для повышения
              прочности фанеры слои шпона накладываются так.
            </p>
            <p className=" block text-white sm:hidden w-[145px] line-clamp-4 mt-[12px]">
              Этоть материал изготавливаемый путём склеивания специально
              подготовленного шпона.
            </p>
          </div>
          <img
            src={`./photos/h9.png`}
            alt="Пеноплекс"
            className=" object-contain w-[105x] h-[151px] sm:h-[391px] sm:w-[317px]"
          />
        </div>
      </Flickity>
    );
  }
  return (
    <div className=" ">
      <Carousel />
    </div>
  );
}

export default Flickityn;
