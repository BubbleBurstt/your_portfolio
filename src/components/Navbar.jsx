const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-start md:items-center justify-between">
      <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        BN
      </span>

      <div className="flex items-center justify-center gap-8">
        <span className="flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:text-blue-500">
          <img src="/assets/home.png" alt="Home_Icon" width={50} height={50} />
          <span>Home</span>
        </span>
        <span className="flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:text-blue-500">
          <img src="/assets/user.png" alt="About_Icon" width={40} height={40} />
          <span>About Me</span>
        </span>
        <span className="flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:text-blue-500">
          <img
            src="/assets/phone.png"
            alt="Contact_Icon"
            width={50}
            height={50}
          />
          <span>Contact Me</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
