const Hero = () => {
  return (
    <div className="h-[500px] mt-2 text-center relative flex flex-col justify-center items-center">
      <div className="w-full">
        <h1 className="text-4xl text-custBlack font-bold capitalxitize text-center brightness-200">
          Family-Friendly Meals that Everyone Will Love
        </h1>
        <p className="mt-2 text-[22px] text-red font-semibold text-center">
          Easy Meals brings so many recipes to your table.
        </p>
      </div>
      <div
        className="h-full w-full absolute top-0 left-0 brightness-50 bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      ></div>
    </div>
  );
};

export default Hero;
