import {useState, useEffect} from "react";
import {useLocation, Link, useNavigate} from "react-router-dom";
import logo from "../../../assets/curve_logo_1.png";
import navmenu from "../assets/menu-list.json";
import {GiHamburgerMenu} from "react-icons/gi";
import {Drawer} from "antd";
import {FaEye, FaEyeSlash} from "react-icons/fa6";

import {toast} from "react-toastify";
import axios from "axios";
import BtnLoader from "../../../components/BtnLoader";

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
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [revealPwd, setRevealPwd] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [forgetPwd, setForgetPwd] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const url = "https://curve-portal-backend.vercel.app/api/v1/users/login";
    const data = {email, password};

    const navigate = useNavigate()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogin = (e: any) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("Please fill all fields");
        } else {
            setLoading(true);
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response);
                    setLoading(false);
                    if(response?.status===200){
                        navigate(`/${response?.data?.data?.user?.role}/dashboard`)
                    }
                })
                .catch((err) => {
                    toast.error(err?.response?.data?.message);
                    setLoading(false);
                    console.log(err);
                });
        }
    };

    const pwdurl =
        "https://curve-portal-backend.vercel.app/api/v1/users/forgetPassword";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleForgetPwd = (e: any) => {
        e.preventDefault();
        if (!email) {
            return toast.error("Please fill all fields");
        } else {
            setLoading(true);
            axios
                .post(pwdurl, data)
                .then((response) => {
                    console.log(response);
                    toast.success(response?.data?.message);
                    setLoading(false);
                })
                .catch((err) => {
                    toast.error(err?.response?.data?.message);
                    setLoading(false);
                    console.log(err);
                });
        }
    };

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
                            D
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
                    <div className="w-max h-max flex items-center gap-4 relative">
                        <p className="phone:hidden">Already a member?</p>
                        <button
                            className="w-max h-max font-semibold px-4 py-2 rounded bg-secondary-color text-white"
                            onClick={() => {
                                setShowLogin(!showLogin);
                                setForgetPwd(false);
                            }}
                        >
                            Login
                        </button>
                        <GiHamburgerMenu
                            size={25}
                            className="ml-3 hidden phone:flex text-secondary-color"
                            onClick={() => setOpenSideBar(true)}
                        />
                        <div
                            className={`w-max h-max rounded bg-white  shadow-md border border-gray-300 text-black absolute right-[-22px] top-14 toggle-dropdown ${
                                showLogin ? " active" : ""
                            }`}
                        >
                            <div className="w-60 h-max flex flex-col gap-4 p-2">
                                <input
                                    type="email"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="w-full h-max flex rounded justify-between items-center border px-2 text-sm border-yellow-500 gap-2">
                                    <input
                                        type={`${
                                            revealPwd ? "text" : "password"
                                        }`}
                                        className="w-[80%] h-10 outline-none transition-all"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {!revealPwd ? (
                                        <FaEye
                                            size={18}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setRevealPwd(!revealPwd)
                                            }
                                        />
                                    ) : (
                                        <FaEyeSlash
                                            size={18}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setRevealPwd(!revealPwd)
                                            }
                                        />
                                    )}
                                </div>
                                <p
                                    className="text-xs underline"
                                    onClick={() => {
                                        setShowLogin(false);
                                        setForgetPwd(true);
                                    }}
                                >
                                    Forget your password?
                                </p>
                                <button
                                    className="w-full h-10 rounded-md bg-primary-color text-secondary-color font-semibold disabled:cursor-not-allowed disabled:bg-yellow-200"
                                    onClick={handleLogin}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BtnLoader />
                                        </div>
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`w-max h-max rounded bg-white  shadow-md border border-gray-300 text-black absolute right-[-22px] top-14 toggle-dropdown ${
                                forgetPwd ? " active" : ""
                            }`}
                        >
                            <div className="w-60 h-max flex flex-col gap-4 p-2">
                                <input
                                    type="email"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <p
                                    className="text-xs underline"
                                    onClick={() => {
                                        setShowLogin(true);
                                        setForgetPwd(false);
                                    }}
                                >
                                    Back to Login
                                </p>
                                <button
                                    className="w-full h-10 rounded-md bg-primary-color text-secondary-color font-semibold disabled:cursor-not-allowed disabled:bg-yellow-300"
                                    onClick={handleForgetPwd}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BtnLoader />
                                        </div>
                                    ) : (
                                        "Reset Password"
                                    )}
                                </button>
                            </div>
                        </div>
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
                    <div className="w-max h-max flex items-center gap-3 relative">
                        <p className="text-white phone:hidden">
                            Already a member?
                        </p>
                        <button
                            className="w-max h-max font-semibold px-3 py-1 rounded bg-white text-secondary-color"
                            onClick={() => {
                                setShowLogin(!showLogin);
                                setForgetPwd(false);
                            }}
                        >
                            Login
                        </button>
                        <GiHamburgerMenu
                            size={25}
                            className="ml-3 hidden phone:flex text-white"
                            onClick={() => setOpenSideBar(true)}
                        />
                        <div
                            className={`w-max h-max rounded bg-white  shadow-md border border-gray-300 text-black absolute right-[-22px] top-14 toggle-dropdown ${
                                forgetPwd ? " active" : ""
                            }`}
                        >
                            <div className="w-60 h-max flex flex-col gap-4 p-2">
                                <input
                                    type="email"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <p
                                    className="text-xs underline"
                                    onClick={() => {
                                        setShowLogin(true);
                                        setForgetPwd(false);
                                    }}
                                >
                                    Back to Login
                                </p>
                                <button
                                    className="w-full h-10 rounded-md bg-primary-color text-secondary-color font-semibold disabled:cursor-not-allowed disabled:bg-yellow-300"
                                    onClick={handleForgetPwd}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BtnLoader />
                                        </div>
                                    ) : (
                                        "Reset Password"
                                    )}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`w-max h-max rounded bg-white  shadow-md border border-gray-300 text-black absolute right-[-22px] top-14 toggle-dropdown ${
                                showLogin ? " active" : ""
                            }`}
                        >
                            <div className="w-60 h-max flex flex-col gap-4 p-2">
                                <input
                                    type="email"
                                    className="w-full h-10 rounded border pl-2 text-sm border-yellow-500 outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="w-full h-max flex rounded justify-between items-center border px-2 text-sm border-yellow-500 gap-2">
                                    <input
                                        type={`${
                                            revealPwd ? "text" : "password"
                                        }`}
                                        className="w-[80%] h-10 outline-none"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {!revealPwd ? (
                                        <FaEye
                                            size={18}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setRevealPwd(!revealPwd)
                                            }
                                        />
                                    ) : (
                                        <FaEyeSlash
                                            size={18}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setRevealPwd(!revealPwd)
                                            }
                                        />
                                    )}
                                </div>
                                <p
                                    className="text-xs underline"
                                    onClick={() => {
                                        setShowLogin(false);
                                        setForgetPwd(true);
                                    }}
                                >
                                    Forget your password?
                                </p>
                                <button
                                    className="w-full h-10 rounded-md bg-primary-color text-secondary-color font-semibold disabled:cursor-not-allowed disabled:bg-yellow-300"
                                    onClick={handleLogin}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BtnLoader />
                                        </div>
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                            </div>
                        </div>
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
