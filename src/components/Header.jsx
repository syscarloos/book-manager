import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdLightMode } from "react-icons/md";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    return (localStorage.getItem('theme') == 'dark')
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const location = useLocation()
  return (
    <>
      <header className="max-w-140 relative w-full mx-auto flex justify-center items-center p-4 border-b border-slate-800 rounded-bl-lg rounded-br-lg">
        <Link to={location.pathname == '/' ? '/books' : '/'} className="bg-blue-700 dark:bg-[#162456] text-white px-4 py-1 rounded-md font-medium transition hover:bg-blue-900">{location.pathname == '/' ? 'Books' : 'Register book'}</Link>
        <div className="absolute right-10">
          <MdLightMode onClick={() => setIsDark(!isDark)} />
        </div>
      </header>
    </>
  )
}

export default Header;