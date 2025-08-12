export default function Header() {
  return (
    <nav className="flex justify-between items-center h-24 px-10 lg:px-32 shadow-md">
      <h1 className="font-bold text-2xl hover:cursor-pointer">Where in the world?</h1>
      <button className="flex items-center gap-2 hover:text-[#494949] cursor-pointer">
        <img className="h-5 w-5" src="src/assets/light-mode-icon.png" alt="Light mode" />
        <p className="font-semibold text-md">Dark Mode</p>
      </button>
    </nav>
  );
}
