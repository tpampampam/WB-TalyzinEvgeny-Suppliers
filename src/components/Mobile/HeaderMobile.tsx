import { useState } from "react";
import Logo from "../Body/Logo";
import Navigation from "../Header/Navigation";
import CloseIcon from '../../images/Union.svg'
import HeaderIcons from "./HeaderIcons";
import Hamburger from "./Hamburger";


const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="header__mobile">
           <div className="header__mobile-item" onClick={toggleMenu}> 
                {isOpen ? <img src={CloseIcon} alt='close'/> :<Hamburger/>}
            </div>
           <div className="header__mobile-item">
                <Logo/>
           </div>
           <div className="header__mobile-item">
                <HeaderIcons/>
           </div>
            {isOpen &&  <Navigation isOpen={setIsOpen}/>}
        </div>
    )
}
export default HeaderMobile;