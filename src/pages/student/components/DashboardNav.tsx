import logo from "../../../assets/curve_logo_1.png";
import {MdOutlineReplayCircleFilled, MdSpaceDashboard} from "react-icons/md";
import {FaChartSimple, FaUsers, FaUserTie, FaBook} from "react-icons/fa6";
import {BsFillCalendar2CheckFill} from "react-icons/bs";
import {FaCalendarAlt} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const DashboardNav = () => {
    return (
        <div className="w-full h-full flex flex-col ">
            <div className="w-full h-[calc(100%-8rem)] overflow-y-auto  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:cursor-pointer dark:[&::-webkit-scrollbar-track]:bg-slate-100 dark:[&::-webkit-scrollbar-thumb]:bg-[#023047] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="w-full h-24 flex items-center justify-center border-b">
                    <img src={logo} alt="" className="w-20" />
                </div>
                <div className="w-full h-max flex flex-col gap-2 ">
                    <div className="w-full h-9 bg-primary-color flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-white">
                        <span>
                            <MdSpaceDashboard size={16} />
                        </span>
                        <p>Dashboard</p>
                    </div>
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700 ">
                        <span>
                            <FaBook size={16} />
                        </span>
                        <p>Attendance</p>
                    </div>
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                        <span>
                            <FaChartSimple size={16} />
                        </span>
                        <p>Analytics Board</p>
                    </div>
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                        <span>
                            <FaUserTie size={16} />
                        </span>
                        <p>Staff</p>
                    </div>
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                        <span>
                            <FaUsers size={16} />
                        </span>
                        <p>Students</p>
                    </div>
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                        <span>
                            <BsFillCalendar2CheckFill size={16} />
                        </span>
                        <p>Check In</p>
                    </div>

                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                        <span>
                            <FaCalendarAlt size={16} />
                        </span>
                        <p>Calendar</p>
                    </div>
                    <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                        <span>
                            <MdOutlineReplayCircleFilled size={16} />
                        </span>
                        <p>Alumni(s)</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-32 flex flex-col items-center justify-center gap-3">
                <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
                    <span>
                        <IoMdSettings size={16} />
                    </span>
                    <p>Settings</p>
                </div>
                <div className="w-full h-9 flex items-center gap-2 pl-6 text-xs font-medium cursor-pointer text-gray-700">
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
