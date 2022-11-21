
import styles from './Navbar.module.css'
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { navMenuItems } from "./NavItems";
import logo from '../../assets/svg/dakeb-logo.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useNavigate();
  const [scrollBg, setScrollBg] = useState(false)

  const changeBg = () => {
    if (window.scrollY >= 20) {
      setScrollBg(true);
    }else {
      setScrollBg(false)
    }
  };

    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBg);
    }
 
  

  return (
    <div className={`${styles.navContainer} ${scrollBg ? 'bg-black/30 shadow-sm' : ''}`}>
      <nav className={`p-4 ${styles.navbarItems}`}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose size={25} color="#157145" /> : <AiOutlineMenu size={25} color="#157145" />}
        </div>
        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu, idx) => (
            <span
            key={idx}
              className={`block p-2 font-semibold text-base md:text-xl !text-primary-light cursor-pointer hover:bg-green-200 rounded-[10px] transition-all duration-200 ${
                router.pathname === menu.url
                  ? "bg-green-200"
                  : "text-primary-dark"
              } ${menu.title === 'Get started' ? 'lg:hidden' : menu.title === 'Register' ? 'lg:hidden': '' }`}
              onClick={() => {
                router.push(menu.url)
                setMenu(false)
              }}
            >
              {menu.title}
            </span>
          ))}
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

export default Navbar