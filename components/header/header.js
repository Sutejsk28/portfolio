import React ,{useRef, useEffect} from 'react'
import {Container} from 'reactstrap'
import Link from 'next/link'

import classes from './header.module.css' 

import {navLinks} from '../data/links'

function Header(){

    const headerRef = useRef(null);

    const menuRef = useRef(null);
  
    const headerFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(`${classes.header__shrink}`);
      } else {
        headerRef.current.classList.remove(`${classes.header__shrink}`);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", headerFunc);
  
      return () => window.removeEventListener("scroll", headerFunc);
    }, []);
  
    const toggleMenu = () =>
      menuRef.current.classList.toggle(`${classes.menu__active}`);
  

  return (
    <header className={`${classes.header}`} ref={headerRef}>
        <Container>
            <div className={`${classes.nav__wrapper}`} >


                <div className={`${classes.logo}`} >
                    <h1><span>S</span>utej</h1>
                </div>

                <div className={`${classes.navigation}`} ref={menuRef} onClick={toggleMenu} >
                    <div className={`${classes.nav__menu}`} >
                        {
                            navLinks.map( (item,index)=>{
                                return (<Link href={item.path} key={index}>
                                    <a>{item.display}</a>
                                </Link>)
                            })
                        }
                        <div className={`${classes.nav__right}`} >
                            <p className='d-flex align-items-center gap-2 mb-0'>{" "}
                                <i className="ri-phone-line"></i>
                                +918310298135
                            </p>
                        </div>
                    </div>
                </div>

                <span className={`${classes.mobile__menu}`}>
                    <i className="ri-menu-line" onClick={toggleMenu}></i>
                </span>

            </div>
        </Container>
    </header>
  )
}

export default Header