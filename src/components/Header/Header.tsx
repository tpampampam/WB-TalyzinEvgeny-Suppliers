import { useDevice } from "../../hooks/useDevice";
import HeaderMobile from "../Mobile/HeaderMobile";
import Navigation from "./Navigation";
import Logo from "../Body/Logo";
 
const Header = () => {
    const isMobile = useDevice()

    return(
        <header className="header">
            {isMobile ? (
                    <HeaderMobile/>
                ) : (
                    <Navigation/>
                )
            }
            <div className="header__logo">
                <Logo/>
            </div>
        </header>
    )
}
export default Header;