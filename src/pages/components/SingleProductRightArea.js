import React from "react";

export default function SingleProductRightArea({
  data,
  useState,
  handleAddToCart,
}) {
  const [quantity, setQuantity] = useState(0);
  return (
    <section className="w-full p-6 lg:pt-0 lg:mt-36 lg:pr-20 lg:py-10 2xl:pr-40 2xl:mt-36">
      <h4 className="font-bold text-orange mb-2 uppercase text-xs tracking-widest">
        Sneaker Company
      </h4>
      <h1 className="text-very-dark mb-4 font-bold text-3xl lg:text-4xl">
        {data.ssp.product.name}
      </h1>
      <div
        className="text-dark-grayish mb-6 text-base sm:text-lg"
        dangerouslySetInnerHTML={{ __html: data.ssp.product.content }}
      />

      <div className="flex items-center justify-between mb-6 sm:flex-col sm:items-start">
        <div className="flex items-center gap-4">
          <h3 className="text-very-dark font-bold text-3xl inline-block">
            {data.ssp.product.regularPrice}
          </h3>
          {/* <span className="inline-block h-fit py-0.5 px-2 font-bold bg-pale-orange text-orange rounded-lg text-sm">
                    50%
                  </span> */}
        </div>
        <p className="text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto">
          {data.ssp.product.salePrice ? data.ssp.product.salePrice : ""}
        </p>
      </div>
      <div className="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
        <div className="w-full h-10 text-sm bg-slate-400 p-2 flex  justify-between rounded-lg font-bold relatives sm:w-80 items-stretch">
          <div
            id="minus"
            className="plus-minus inline-flex items-center"
            onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
          >
            <div className="w-3 h-1 bg-orange absolute" id="minus" />
            <svg
              width={12}
              height={4}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </div>
          <span id="amount" className="select-none">
            {quantity}
          </span>
          <div
            id="plus"
            className="plus-minus"
            onClick={() => setQuantity(quantity + 1)}
          >
            <svg
              width={12}
              height={12}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="plus"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" id="plus" />
            </svg>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#FF7E1B] h-10 bg-orange py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-light shadow-md shadow-orange hover:brightness-125 transition select-none"
          id="add-cart"
        >
          <svg
            width={16}
            height={16}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="hsl(223, 64%, 98%)"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </section>
  );
}
