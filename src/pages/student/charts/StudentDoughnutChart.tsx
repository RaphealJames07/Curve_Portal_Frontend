import React from "react";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts"; // Import ApexOptions

interface StudentData {
    frontend: number;
    backend: number;
    productDesign: number;
}

const StudentDoughnutChart: React.FC<{data: StudentData}> = ({data}) => {
    const chartOptions: ApexOptions = {
        chart: {
            type: "donut", // Now recognized correctly
        },
        labels: [`Frontend ${data.frontend}`, `Backend ${data.backend}`, `Product Design ${data.productDesign}`],

        colors: ["#1E40AF", "#16A34A", "#D97706"], // Tailwind colors (blue, green, yellow)
        legend: {
            position: "bottom",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const chartSeries = [data.frontend, data.backend, data.productDesign];

    return (
        <div className="">
            <h2 className="text-lg font-semibold text-center mb-4">
                Total Students by Stack
            </h2>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="donut"
                height={320}
            />
        </div>
    );
};

export default StudentDoughnutChart;
