const HeroSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between">
      <div>
        <span className="text-blue-400 text-xl">Welcome to the Site!!!</span>
        <h1 className="text-5xl md:text-7xl mt-8 text-blue-500 leading-tight">
          Hi! I am John Doe, a <br /> UI UX{" "}
          <span className="text-blue-600">Designer</span>
        </h1>

        <span className="flex md:w-140 mt-8 text-gray-600">
          I design intuitive, user-centered digital experiences that blend
          aesthetics with functionality. My work focuses on creating seamless
          interfaces that enhance user engagement and satisfaction.
        </span>

        <div className="flex gap-4 items-center mt-8">
          <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 text-xl rounded-md hover:bg-blue-600">
            Hire Me
          </button>
          <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 text-xl rounded-md hover:bg-blue-600">
            View Resume
          </button>
        </div>
      </div>
      <div>
        <img
          src="/assets/hero.png"
          alt="Hero-image"
          width={400}
          height={400}
          className="mt-16 md:mt-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
