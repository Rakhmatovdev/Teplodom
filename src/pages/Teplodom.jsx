const Teplodom = () => {
  return (
    <div className="bg-stone-100">
      <div className="container mx-auto pt-16 pb-32">
        <h1 className="text-2xl font-semibold tracking-wide">
          Интернет магазин Теплодом
        </h1>
        <div className="flex flex-wrap items-center justify-between mt-8">
          <div className="w-[529px] h-[410px] text-lg  ">
            <p>
              Компания <strong> Teplodom</strong> является лидером строительных
              материалов на локальном рынке и предлагает широкий ассортимент
              строительных, отделочных материалов и товаров для дома всем
              клиентам Узбекистана.
            </p>
            <p className="mt-6">
              В каталоге на сайте Teplodom представлена продукция самых
              известных брендов от крупнейших мировых производителей, а также
              популярные отечественные торговые марки. Благодаря удобной
              навигации, легко найти необходимый товар и отложить его в корзину
              для оформления онлайн заказа.
            </p>
            <p className="mt-6">
              Высокое качество, экспертные знания, качественные ресурсы и
              улучшение производства с каждым днем является обязательным
              требованием для нашего бренда!
            </p>
          </div>
          <div className="">
            <img src="/photos/Teplodomf.png" alt="" className="w-[539px] h-[410px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teplodom;
