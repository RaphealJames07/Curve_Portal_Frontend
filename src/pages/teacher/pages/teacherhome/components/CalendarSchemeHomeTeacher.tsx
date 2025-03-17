import React from "react";
import {Calendar, Tooltip} from "antd";
import type {Dayjs} from "dayjs";
// import dayjs from "dayjs";
import "antd/dist/reset.css";

interface SchemeDataType {
    classDay: number;
    date: string; // Date format should be DD-MM-YYYY
    dayText: string;
    subject: string[];
}

const frontendSchemeData: SchemeDataType[] = [
    {
        classDay: 1,
        date: "10-03-2025",
        dayText: "Monday",
        subject: ["Intro HTML", "Javascript Data Types"],
    },
    {
        classDay: 2,
        date: "12-03-2025",
        dayText: "Wednesday",
        subject: ["Intro CSS", "Javascript Array Methods"],
    },
    {
        classDay: 3,
        date: "14-03-2025",
        dayText: "Friday",
        subject: ["Media Query", "Javascript Async & Await"],
    },
];

// Function to check if a date has a class
const getClassesForDate = (date: Dayjs) => {
    const formattedDate = date.format("DD-MM-YYYY"); // Convert date to match scheme format
    return frontendSchemeData.find((entry) => entry.date === formattedDate);
};

const CalendarSchemeHomeTeacher: React.FC = () => {
    return (
        <div className="w-full h-full ">
            <h2 className="text-lg font-semibold text-center mb-4">
                Frontend Calendar
            </h2>
            <Calendar
                fullscreen={false}
                cellRender={(value) => {
                    const classInfo = getClassesForDate(value);
                    return classInfo ? (
                        <Tooltip
                            title={classInfo.subject.join(", ")} // Tooltip showing subjects
                            placement="top"
                        >
                            <div className="flex justify-center items-center">
                                <div className="w-6 h-6 bg-primary-color rounded -z-10"></div>{" "}
                            </div>
                        </Tooltip>
                    ) : null;
                }}
            />
        </div>
    );
};

export default CalendarSchemeHomeTeacher;
