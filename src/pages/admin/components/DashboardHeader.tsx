import {IoMdNotifications} from "react-icons/io";
import profile from "../../../assets/pfp.jpg";

const DashboardHeader = () => {
    return (
        <div className="w-full h-16  flex items-center justify-between px-6 border-b shadow-sm">
            <div className="w-max h-max font-semibold text-lg">
                Welcome back Sanuel Walters
            </div>
            <div className="w-max h-max flex gap-8 items-center">
                <span>
                    <IoMdNotifications size={20} className="cursor-pointer" />
                </span>
                <div className="w-max h-max flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-1 px-2 transition-all duration-500 rounded-full">
                    <span className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center">
                        <img
                            src={profile}
                            alt=""
                            className="w-full h-full rounded-full object-contain"
                        />
                    </span>
                    <div className="w-max h-max flex flex-col ">
                        <p className="font-medium text-sm">Abraham Lincoln</p>
                        <span className="text-xs font-medium text-gray-600">
                            Admin
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
