export default function Header() {
  function toggleTheme() {
      document.getElementById("html").classList.toggle("dark")
  }

  return (
    <nav className="flex justify-between items-center h-24 px-10 lg:px-32 shadow-md bg-white dark:bg-[#2d3742]">
      <h1 className="font-bold text-2xl hover:cursor-pointer dark:text-white">Where in the world?</h1>
      <button className="flex items-center gap-2 hover:text-[#494949] cursor-pointer" onClick={() => toggleTheme()}>
          <img
            className="h-5 w-5 block dark:hidden"
            src="src/assets/dark-mode.png"
            alt="Dark mode icon"
          />
          <img
            className="h-5 w-5 hidden dark:block"
            src="src/assets/light-mode.png"
            alt="Light mode icon"
          />
        <p className="font-semibold text-md dark:text-white">Dark Mode</p>
      </button>
    </nav>
  );
}
