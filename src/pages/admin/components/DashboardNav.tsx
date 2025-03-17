import logo from "../../../assets/curve_logo_1.png";
import {MdSpaceDashboard} from "react-icons/md";
import {FaChartSimple, FaUsers} from "react-icons/fa6";
import {FaCalendarAlt} from "react-icons/fa";
import {IoMdSettings} from "react-icons/io";
import {IoLogOut} from "react-icons/io5";
import {NavLink} from "react-router-dom";

const DashboardNav = () => {
    return (
        <div className="w-full h-full flex flex-col ">
            <div className="w-full h-[calc(100%-8rem)] overflow-y-auto  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:cursor-pointer dark:[&::-webkit-scrollbar-track]:bg-slate-100 dark:[&::-webkit-scrollbar-thumb]:bg-[#023047] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="w-full h-24 flex items-center justify-center border-b">
                    <img src={logo} alt="Curve_Logo" className="w-20" />
                </div>
                <div className="w-full h-max flex flex-col gap-2 ">
                    <NavLink
                        to={"/admin/dashboard"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all duration-700 hover:bg-[#023047] hover:text-white"
                                : "text-gray-700 "
                        }
                    >
                        <div className="w-full h-9 bg-primary-color flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-white">
                            <span>
                                <MdSpaceDashboard size={16} />
                            </span>
                            <p>Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/admin/students"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all duration-700 hover:bg-[#023047] hover:text-white"
                                : "text-gray-700 "
                        }
                    >
                        <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer ">
                            <span>
                                <FaUsers size={16} />
                            </span>
                            <p>Students</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/admin/calendar"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all duration-700 hover:bg-[#023047] hover:text-white"
                                : "text-gray-700 "
                        }
                    >
                        <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer ">
                            <span>
                                <FaCalendarAlt size={16} />
                            </span>
                            <p>Calendar</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/admin/alumnis"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all duration-700 hover:bg-[#023047] hover:text-white"
                                : "text-gray-700 "
                        }
                    >
                        <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer ">
                            <span>
                                <FaChartSimple size={16} />
                            </span>
                            <p>Alumnis</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="w-full h-32 flex flex-col items-center justify-center gap-3">
                <NavLink
                    to={"/admin/settings"}
                    className={({isActive}) =>
                        !isActive
                            ? "transition-all duration-700 hover:bg-[#023047] hover:text-white w-full"
                            : "text-gray-700 w-full"
                    }
                >
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer ">
                        <span>
                            <IoMdSettings size={16} />
                        </span>
                        <p>Settings</p>
                    </div>
                </NavLink>

                <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer ">
                    <span>
                        <IoLogOut size={16} />
                    </span>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;
