import { translations } from "@/lang/translations";

export default function Navbar() {
  const { navbar } = translations;

  return (
    <nav className="h-screen w-28 sticky top-0 bg-primary text-base flex items-center justify-center group   hover:pl-3">
      <ul className="h-min w-full flex flex-col items-center list-none text-center">
        {navbar.items.map((item, index) => (
          <li
            key={item.name}
            className="text-white w-4 text-start flex justify-start opacity-25 transition-all duration-700 ease-in-out hover:opacity-90 hover:pl-4 group-hover:w-full group-hover:px-2 mb-6"
          >
            <a
              href={item.href}
              className="text-white no-underline flex justify-start items-center transition-all duration-700 ease-in-out group-hover:justify-start"
            >
              <span className="text-white text-xl font-bold transition-all duration-700 ease-in-out">
                {item.name.charAt(0)}
              </span>
              <span className="text-white text-lg transition-all duration-700 ease-in-out text-0 opacity-0 group-hover:text-lg group-hover:opacity-100 ml-2 group-hover:inline">
                {item.name.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {navbar.languageToggle === "no" ? (
        <a
          href="https://en.sitedesign.no/"
          className="absolute bottom-8 left-10 text-xl text-base/40 hover:text-base hover:cursor-pointer transition-colors duration-700 ease-in-out"
        >
          EN
        </a>
      ) : (
        <a
          href="https://sitedesign.no/"
          className="absolute bottom-8 left-10 text-xl text-base/40 hover:text-base hover:cursor-pointer transition-colors duration-700 ease-in-out"
        >
          NO
        </a>
      )}
    </nav>
  );
}
