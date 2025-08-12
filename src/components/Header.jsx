function Header() {
  return (
    <nav className="flex justify-between items-center w-full h-24 px-20 lg:px-30 shadow-md">
      <h1 className="font-bold text-2xl hover:cursor-pointer">Where in the world?</h1>
      <button className="flex items-center gap-2 hover:text-[#494949] cursor-pointer">
        <img className="h-5 w-5 object-scale-down" src="src/assets/light-mode-icon.png" alt="Light mode" />
        <p className="font-semibold text-lg">Dark Mode</p>
      </button>
    </nav>
  );
}

export default Header;
