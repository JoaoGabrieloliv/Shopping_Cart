export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho </h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJbmjfTlajs0wbpv8LPq2Mb7dTYj69-GLwRVBiNmzxhiR0CieuoHgxF6hmP8uUSWlk6AR0tTsSPzw3yGApTmAm4xJgFge4nb_YI09xVi9sheV41n3ZwL3GfJM"
          alt="Logo do produto"
          className="w-28"
        />

        <strong>PREÇO: R$1.000</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">Sub-total: R$1.000</strong>
      </section>

      <p className="font-bold mt-4">Total: R$1.000</p>
    </div>
  );
}
