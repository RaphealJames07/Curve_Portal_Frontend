import {CiMenuKebab} from "react-icons/ci";

const AttendanceT = () => {
    return (
        <div className="w-full h-max flex flex-col gap-4">
            <p className="text-lg font-medium flex flex-col">
                Frontend Attendance{" "}
                <span className="text-xs font-normal">19 Students</span>
            </p>
            <div className="w-full h-max ">
                <div className="w-full h-10 bg-sky-50 flex items-center text-sm p-2 px-4">
                    <p className="w-[30%]">Student</p>
                    <p className="w-[20%]">Clock in Time</p>
                    <p className="w-[20%]">Clock in Score</p>
                    <p className="w-[20%]">Date</p>
                    <p className="w-[20%]">Status</p>
                    <p className="w-[10%]">Option</p>
                </div>
                <div className="w-full h-screen border rounded mt-2 flex flex-col gap-2 p-2 ">
                    <div className="w-full h-14 bg-red-50 flex items-center text-xs p-2 font-medium ">
                        <p className="w-[30%] h-max flex items-center gap-4 ">
                            <div className="w-10 h-10 rounded-full bg-black"></div>
                            <p>John Chukwugozie Amos</p>
                        </p>
                        <p className="w-[20%] h-max">9:15 AM</p>
                        <p className="w-[20%] h-max">20%</p>
                        <p className="w-[20%] h-max">12 February 2025</p>
                        <p className="w-[20%] h-max">Absent</p>
                        <p className="w-[10%] h-max">
                            <CiMenuKebab className="cursor-pointer" size={23} />
                        </p>
                    </div>
                    <div className="w-full h-14 bg-red-50 flex items-center text-xs p-2 font-medium ">
                        <p className="w-[30%] h-max flex items-center gap-4 ">
                            <div className="w-10 h-10 rounded-full bg-black"></div>
                            <p>John Chukwugozie Amos</p>
                        </p>
                        <p className="w-[20%] h-max">9:15 AM</p>
                        <p className="w-[20%] h-max">20%</p>
                        <p className="w-[20%] h-max">12 February 2025</p>
                        <p className="w-[20%] h-max">Absent</p>
                        <p className="w-[10%] h-max">
                            <CiMenuKebab className="cursor-pointer" size={23} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceT;
