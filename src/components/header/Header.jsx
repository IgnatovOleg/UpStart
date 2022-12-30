import React from "react";
import cl from "./Header.module.css"
import Logo from "./HeaderLogo/Logo"
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import TitleHeading from "./TitleHeading/TitleHeading";

const Header = () => {

    return(
        <div className={cl.bg}>
            <div className={cl.barWrapper}>
                <div className={cl.barContainer}>

                    <div className={cl.logo}>
                        <Logo/>
                    </div>
                    <div className={cl.gap}></div>

                    <div className={cl.menu}>
                        <HeaderMenu/>
                    </div>

                    <div className={cl.titleHeading}>
                        <TitleHeading/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;