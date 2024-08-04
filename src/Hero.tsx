function Hero() {
  return (
    <div className="mt-20 flex flex-col justify-center gap-5">
      <h1 className="font-semibold text-center text-3xl md:text-5xl text-[#5e5e5e]">
        Travel memories you'll never forget!
      </h1>

      <img
        src="/images/photo-grid.png"
        alt=""
        className="w-full px-2 md:w-2/3 mx-auto mt-5"
      />
    </div>
  );
}

export default Hero;
