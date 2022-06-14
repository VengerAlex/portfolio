import hero_person from "../assets/hero_person.svg";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="md:px-20 px-1 flex flex-wrap">
        <div className="md:w-1/2 w-full px-5 md:pt-20">
          <div className="text-gray-300 text-xl uppercase py-5">
            Web Developer
          </div>
          <div className="text-gradient font-bold pb-5 text-7xl">
            Ivan Mukoed
          </div>
          <div className="text-gray-200 pb-5">
            Hi! My name is Ivan Mukoed, I'm a frontend developer, and I love to
            help my clients and their websites reach their maximum potential by
            making beautiful, modern and self-selling products!
          </div>
          <a
            href="mailto:1rydler@gmail.com"
            className="w-36 flex justify-center items-center rounded-md bg-gradient text-black p-3 font-bold transition hover:cursor-pointer hover:scale-105"
          >
            Contact me
          </a>
        </div>
        <div className="md:w-1/2 w-full pl-20 pt-20 hidden md:block">
          <img src={hero_person} alt="Ivan Mukoed" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
