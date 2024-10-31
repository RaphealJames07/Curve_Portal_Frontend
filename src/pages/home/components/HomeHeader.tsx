import {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import logo from "../../../assets/curve_logo_1.png";
import navmenu from "../assets/menu-list.json";
import {GiHamburgerMenu} from "react-icons/gi";
import {Drawer} from "antd";

const HomeHeader = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [openSideBar, setOpenSideBar] = useState<boolean>(false);

    return (
        <div className="w-full h-max relative">
            {!scrolled ? (
                // Initial Header
                <div className="w-full h-16 flex shadow-lg items-center justify-between px-40 phone:px-4">
                    <div className="w-max h-max flex gap-10 items-center">
                        <div className="w-max h-max">
                            <img
                                src={logo}
                                alt="The Curve Africa Logo"
                                className="w-16"
                            />
                        </div>
                        <nav className="w-max h-max flex phone:hidden">
                            <ul className="w-max h-max flex gap-3 text-primary-text">
                                {navmenu.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.link}
                                            className={`px-4 py-2 transition-all duration-700 rounded ${
                                                location.pathname === item.link
                                                    ? "bg-primary-color text-white"
                                                    : "hover:text-primary-color"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="w-max h-max flex items-center gap-4">
                        <p className="phone:hidden">Already a member?</p>
                        <button className="w-max h-max font-semibold px-4 py-2 rounded bg-secondary-color text-white">
                            Login
                        </button>
                        <GiHamburgerMenu
                            size={25}
                            className="ml-3 hidden phone:flex text-secondary-color"
                            onClick={() => setOpenSideBar(true)}
                        />
                    </div>
                </div>
            ) : (
                // Scrolled Header
                <div className="w-full h-16 flex shadow-md items-center justify-between px-40 phone:px-4 bg-secondary-color transition-all duration-500 fixed left-0 top-0 z-20 ">
                    <div className="w-max h-max flex gap-10 items-center">
                        <div className="w-max h-max">
                            <img
                                src={logo}
                                alt="The Curve Africa Logo"
                                className="w-16"
                            />
                        </div>
                        <nav className="w-max h-max flex phone:hidden">
                            <ul className="w-max h-max flex gap-3 text-white">
                                {navmenu.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.link}
                                            className={`px-4 py-2 rounded transition-all duration-700 ${
                                                location.pathname === item.link
                                                    ? "bg-primary-color text-white"
                                                    : "hover:text-primary-color"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="w-max h-max flex items-center gap-3">
                        <p className="text-white phone:hidden">
                            Already a member?
                        </p>
                        <button className="w-max h-max font-semibold px-3 py-1 rounded bg-white text-secondary-color">
                            Login
                        </button>
                        <GiHamburgerMenu
                            size={25}
                            className="ml-3 hidden phone:flex text-white"
                            onClick={() => setOpenSideBar(true)}
                        />
                    </div>
                </div>
            )}
            <>
                <Drawer
                    open={openSideBar}
                    onClose={() => setOpenSideBar(false)}
                    placement="left"
                    maskClosable={true}
                    closeIcon={false}
                    width={300}
                    title={
                        <img
                            src={logo}
                            alt="The Curve Africa Logo"
                            className="w-16"
                        />
                    }
                >
                    <div className="w-full h-full flex flex-col gap-4 ">
                        <div className="w-full h-max"></div>
                    </div>
                </Drawer>
            </>
        </div>
    );
};

export default HomeHeader;
