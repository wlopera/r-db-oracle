import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/img/logo_wlopera.gif";

const Navbar = () => {
  // Agrego funcion para pasar el nabvar solo cuando el scroll este funcionando
  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").classList.add("shadow");
        document.getElementById("navbar").classList.add("bg-white");
      } else {
        document.getElementById("navbar").classList.add("shadow");
        document.getElementById("navbar").classList.remove("bg-white");
      }
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <nav
      id="navbar"
      className="hidden md:flex w-full py-1 bg-gray-100 top-0 z-40 fixed"
    >
      <div className="hidden lg:block px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14">
          <Link to="/" className="ml-4 mt-2">
            <img src={logo} width={140} height={120} className="" />
            {/* <img
              src={
                "https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png"
              }
              width={160}
              height={40}
              className=""
            /> */}
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/database"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300  ease-in-out mx-4"
            >
              Base de datos
            </NavLink>
            <NavLink
              to="/encrypt"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300  ease-in-out mx-4"
            >
              Encriptar Constraseñas
            </NavLink>
            <NavLink
              to="/about"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300  ease-in-out mx-4"
            >
              Nosotros
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
