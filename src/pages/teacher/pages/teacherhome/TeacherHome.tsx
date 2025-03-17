import {FaCalendarAlt} from "react-icons/fa";
import {FaPlus, FaUserDoctor} from "react-icons/fa6";
import {HiMiniUserGroup} from "react-icons/hi2";
import {PiStarHalfFill} from "react-icons/pi";
import DoughnutHomeTeacher from "./components/DoughnutHomeTeacher";
import ColumnHomeTeacher from "./components/ColumnHomeTeacher";
import CalendarSchemeHomeTeacher from "./components/CalendarSchemeHomeTeacher";

const TeacherHome = () => {
    const studentData = {
        frontend: 120,
        backend: 322,
        productDesign: 67,
    };
    return (
        <div className="w-full h-max flex flex-col gap-6 ">
            <div className="w-full h-max flex justify-between gap-20 text-sm">
                <div className="w-1/4 h-24 rounded-lg bg-[#fff1cd] flex items-center justify-start px-4 gap-6">
                    <span className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                        <HiMiniUserGroup size={20} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold text-gray-600">
                        Total Students{" "}
                        <span className="text-xl font-normal">230</span>
                    </p>
                </div>
                <div className="w-1/4 h-24 rounded-lg bg-[#fff1cd] flex items-center justify-start px-4 gap-6">
                    <span className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                        <FaUserDoctor size={20} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold text-gray-600">
                        Total Staff{" "}
                        <span className="text-xl font-normal">4</span>
                    </p>
                </div>
                <div className="w-1/4 h-24 rounded-lg bg-[#fff1cd] flex items-center justify-start px-4 gap-6">
                    <span className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                        <FaCalendarAlt size={20} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold text-gray-600">
                        Current Week
                        <span className="text-xl font-normal">8</span>
                    </p>
                </div>
                <div className="w-1/4 h-24 rounded-lg bg-[#fff1cd] flex items-center justify-start px-4 gap-6">
                    <span className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                        <PiStarHalfFill size={20} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold text-gray-600">
                        Average rating
                        <span className="text-xl font-normal">18%</span>
                    </p>
                </div>
            </div>
            <div className="w-full h-max flex gap-10">
                <div className="w-96 rounded-md h-96 border-2 p-4 ">
                    <DoughnutHomeTeacher data={studentData} />
                </div>
                <div className="w-[calc(100%-24rem)] h-96 rounded border-2 p-4">
                    <div className="w-full h-10 flex justify-between text-sm text-gray-700">
                        <p className="text-lg font-medium">Attendance</p>
                        <div className="w-max h-max flex items-center gap-5">
                            <select
                                name=""
                                id=""
                                className="w-max h-8 rounded border border-gray-400 px-2"
                            >
                                <option value="">Week 1</option>
                                <option value="">Week 1</option>
                                <option value="">Week 1</option>
                            </select>
                            <select
                                name=""
                                id=""
                                className="w-max h-8 rounded border border-gray-400 px-2"
                            >
                                <option value="">All Student</option>
                                <option value="">Frontend Student</option>
                                <option value="">Backend Student</option>
                                <option value="">Design Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-[clac(100%-2.5rem)] p-2">
                        <ColumnHomeTeacher />
                    </div>
                </div>
            </div>
            <div className="w-full h-max flex gap-10">
                <div className="w-[calc(100%-24rem)] h-96 rounded border-2 p-4">
                    <div className="w-full h-10 flex justify-between text-sm text-gray-700">
                        <p className="text-lg font-medium">Notice Board</p>
                        <div className="w-max h-max flex items-center gap-5">
                            <button className="w-max h-max flex items-center justify-center p-2 cursor-pointer rounded bg-primary-color text-white">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-96 rounded-md h-96 border-2 p-4">
                    <CalendarSchemeHomeTeacher/>
                </div>
            </div>
        </div>
    );
};

export default TeacherHome;
