import React from "react";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts"; // Importing ApexOptions for TypeScript support

const ColumnHomeTeacher: React.FC = () => {
    // Student data per session (Monday, Wednesday, Friday)
    const series = [
        {
            name: "Frontend",
            data: [8, 8, 9], // Monday, Wednesday, Friday
        },
        {
            name: "Backend",
            data: [9, 10, 8], // Monday, Wednesday, Friday
        },
        {
            name: "Product Design",
            data: [10, 8, 10 ], // Monday, Wednesday, Friday
        },
    ];

    // ApexChart options
    const options: ApexOptions = {
        chart: {
            type: "bar",
            height: 320,
        },
        
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: 10,
                borderRadius: 4,
                borderRadiusApplication: "end",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Monday", "Wednesday", "Friday"], // Days
        },
        yaxis: {
            title: {
                text: "$ (AM)", // Changed title to '$ (AM)'
            },
            min: 7, // 7:00 AM
            max: 10, // 10:00 AM
            tickAmount: 12, // Generates 15-min intervals
            labels: {
                formatter: (value) => {
                    const hour = Math.floor(value);
                    const minute = (value - hour) * 60;
                    const formattedTime = new Date(
                        0,
                        0,
                        0,
                        hour,
                        minute
                    ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    return formattedTime;
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: (val) => `${val} AM`, // Format tooltip
            },
        },
        colors: ["#1E40AF", "#16A34A", "#D97706"], // Tailwind colors (Blue, Green, Yellow)
        legend: {
            position: "top",
        },
    };

    return <Chart options={options} series={series} type="bar" height={320} />;
};

export default ColumnHomeTeacher;
