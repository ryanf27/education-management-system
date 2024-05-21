import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarChartComponent = ({ title, data, width = 700, height = 300 }) => {
    if (!data || !Array.isArray(data)) {
        return <p className="text-gray-700">No data available for chart.</p>;
    }

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <BarChart width={width} height={height} data={data}>
                <XAxis
                    dataKey="title"
                    tick={{ angle: -45, textAnchor: "end" }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default BarChartComponent;
