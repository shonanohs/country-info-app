import { Link } from "react-router-dom";
import darkIcon from "../assets/dark-mode.png";
import lightIcon from "../assets/light-mode.png";

export default function Header() {
  function toggleTheme() {
      document.getElementById("html").classList.toggle("dark")
  }

  return (
    <nav className="flex justify-between items-center h-24 px-10 lg:px-32 shadow-md bg-white dark:bg-[#2d3742]">
      <h1 className="font-bold text-2xl hover:cursor-pointer dark:text-white"><Link to="/">Where in the world?</Link></h1>
      <button className="flex items-center gap-2 hover:cursor-pointer" onClick={() => toggleTheme()}>
          <img
            className="h-5 w-5 block dark:hidden"
            src={darkIcon}
            alt="Dark mode icon"
          />
          <img
            className="h-5 w-5 hidden dark:block"
            src={lightIcon}
            alt="Light mode icon"
          />
        <p className="font-semibold text-md dark:text-white">Dark Mode</p>
      </button>
    </nav>
  );
}
