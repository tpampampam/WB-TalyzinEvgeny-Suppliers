import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MENU } from "../../utils/constants";

interface NavigationProps {
    isOpen?: (value: boolean) => void
}

const Navigation: FC<NavigationProps> = ({isOpen}) => 
(
    <nav className="menu">
        {MENU.map(({link, name}) => (
            <div key={link} className="menu-item">
                <NavLink
                    to={`/${link}`}
                    className={({isActive}) => (isActive ? 'active' : '')}
                    onClick={() => isOpen && isOpen(false)}
                >
                    {name}
                </NavLink>
            </div>
        ))}
    </nav>
)

export default Navigation;