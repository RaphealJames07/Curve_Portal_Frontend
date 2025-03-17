import {FaCalendarAlt} from "react-icons/fa";
import {FaUserDoctor} from "react-icons/fa6";
import {HiMiniUserGroup} from "react-icons/hi2";
import {PiStarHalfFill} from "react-icons/pi";
import StudentDoughnutChart from "./charts/StudentDoughnutChart";

const StudentHome = () => {
    const studentData = {
        frontend: 120,
        backend: 322,
        productDesign: 67,
    };
    return (
        <div className="w-full h-max flex flex-col gap-4 ">
            <div className="w-full h-max flex justify-between gap-8">
                <div className="w-1/4 h-28 rounded-lg border bg-[#fff1cd] flex items-center justify-center gap-6">
                    <span className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                        <HiMiniUserGroup size={25} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold ">
                        Total Students{" "}
                        <span className="text-2xl font-normal">230</span>
                    </p>
                </div>
                <div className="w-1/4 h-28 rounded-lg border bg-[#fff1cd] flex items-center justify-center gap-6">
                    <span className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                        <FaUserDoctor size={25} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold ">
                        Total Staff{" "}
                        <span className="text-2xl font-normal">4</span>
                    </p>
                </div>
                <div className="w-1/4 h-28 rounded-lg border bg-[#fff1cd] flex items-center justify-center gap-6">
                    <span className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                        <FaCalendarAlt size={25} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold ">
                        Current Week
                        <span className="text-2xl font-normal">8</span>
                    </p>
                </div>
                <div className="w-1/4 h-28 rounded-lg border bg-[#fff1cd] flex items-center justify-center gap-6">
                    <span className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                        <PiStarHalfFill size={25} />
                    </span>
                    <p className="w-max h-max flex flex-col gap-2 font-semibold ">
                        Average rating
                        <span className="text-2xl font-normal">18%</span>
                    </p>
                </div>
            </div>
            <div className="w-full h-max flex gap-4">
                <div className="w-96 rounded-md h-96 border-2 p-2 ">
                    <StudentDoughnutChart data={studentData} />
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default StudentHome;
