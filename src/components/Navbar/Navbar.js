import styles from "./Navbar.module.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { navMenuItems } from "./NavItems";
import logo from "../../assets/svg/dakeb-logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`${styles.navContainer}`}>
      <nav className={`p-4 ${styles.navbarItems}`}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose size={25} color="#157145" />
          ) : (
            <AiOutlineMenu size={25} color="#157145" />
          )}
        </div>
        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu, idx) => (
            <span
              key={idx}
              className={`block relative font-semibold border-b-4 border-transparent text-base md:text-xl lg:text-[#333333] cursor-pointer hover:text-[#DEA90A] hover:lg:text-primary-green-50 hover:lg:border-primary-green-50   transition- duration-200 ${
                router.pathname === menu.url
                  ? "lg:border-primary-green-50 lg:text-primary-green-50"
                  : ""
              } ${
                menu.title === "Get started"
                  ? "lg:hidden"
                  : menu.title === "Register"
                  ? "lg:hidden"
                  : ""
              }`}
              onClick={() => {
                navigate(menu.url);
                console.log(menu.url);
                setMenu(false);
                if (menu.title === "Gallery") {
                  setDropdown(!dropdown);
                }
              }}
              onMouseEnter={() => {
                if (menu.title === "Gallery") {
                  setDropdown(!dropdown);
                }
              }}
            >
              {menu.title}
            </span>
          ))}
          {dropdown && (
            <div
              className="bg-white text-black inline-flex flex-col gap-3 font-medium text-left p-3 min-w-[150px] max-w-[300px] shadow absolute top-[52%] lg:top-12  left-[53%] rounded"
              onMouseLeave={() => setDropdown(false)}
            >
              <div
                className="cursor-pointer text-lg"
                onClick={() => {
                  navigate("/gallery/pictures");
                  setDropdown(!dropdown);
                  setMenu(false);
                }}
              >
                Picture
              </div>
              <div
                className="cursor-pointer text-lg"
                onClick={() => {
                  navigate("/gallery/videos");
                  setDropdown(!dropdown);
                  setMenu(false);
                }}
              >
                Video
              </div>
            </div>
          )}
        </div>
        <div
          className={`hidden lg:flex gap-8 justify-center font-semibold mr-2`}
        >
          <button className="border border-primary-blue w-[132px] h-[48px] rounded-[10px]  hover:bg-primary-green hover:text-primary-light bg-primary-light transition-all duration-200">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
