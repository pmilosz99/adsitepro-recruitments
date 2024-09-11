export function HeroSection() {
    return (
      <section className="xl:mt-32 xl:mb-96 xl:mx-32 max-sm:m-8">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY</h1>
        <p className="text-md text-gray-700 mb-8 my-10">Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym przeżyciem.</p>
        <div className="space-x-4">
          <button className="bg-blue-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-300 active:bg-blue-200">Zobacz zdjęcia</button>
          <button className="border border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 active:bg-blue-100">Zadzwoń do nas</button>
        </div>
        <img className="absolute xl:right-56 max-sm:right-24 h-3/5 object-contain top-0 -z-10" src="/bg.svg"/>
        <img className="absolute right-0 h-3/5 object-contain bottom-20 -z-10" src="/hero-content.png"/>
      </section>
    );
}
