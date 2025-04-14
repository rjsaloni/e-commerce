import { Link } from "react-router";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import { useState } from "react";
import logo from "../../assets/logo/logo_coffe.svg"; 

const Navbar = () => {
    const [openMenu, setMenu] = useState(false);

    return (
        <header className="header_component d-flex align-items-center justify-content-between">
            <div className="container">
                <div className="header_container d-flex align-items-center justify-content-between">

                    {/* logo wrapper  */}
                    <div className="logo_wrapper">
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                    </div>

                    {/* navbar wrapper  */}
                    <div className="header_right">
                        <Desktop openMenu={openMenu} setMenu={setMenu} />
                        <Mobile openMenu={openMenu} setMenu={setMenu} />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
