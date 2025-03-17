import {Outlet} from "react-router";
import DashboardHeader from "./components/DashboardHeader";
import DashboardNav from "./components/DashboardNav";

const TeacherOutlet = () => {
    return (
        <>
            <div className="w-full h-screen  flex">
                <div className="w-56 h-full">
                    <DashboardNav />
                </div>
                <div className="w-[calc(100%-14rem)] h-full border-l ">
                    <DashboardHeader />
                    <div className="w-full h-[calc(100%-4rem)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:cursor-pointer dark:[&::-webkit-scrollbar-track]:bg-slate-100 dark:[&::-webkit-scrollbar-thumb]:bg-[#023047] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full px-6 py-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherOutlet;
