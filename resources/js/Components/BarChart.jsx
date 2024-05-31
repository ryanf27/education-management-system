import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Label,
    CartesianGrid,
} from "recharts";

const BarChartComponent = ({ title, data }) => {
    if (!data || !Array.isArray(data)) {
        return <p className="text-gray-700">No data available for chart.</p>;
    }

    return (
        <div className="w-full">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {title}
            </h3>
            <div className="w-full h-96">
                <ResponsiveContainer width={750} height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis
                            dataKey="x-var"
                            angle={45}
                            textAnchor="start"
                            tick
                            height={80}
                            position="insideBottom"
                        >
                            <Label
                                value="Class"
                                offset={-10}
                                position="bottom"
                                color="red"
                            />
                        </XAxis>
                        <YAxis>
                            <Label
                                value="score"
                                angle={-90}
                                position="insideLeft"
                            />
                        </YAxis>
                        <Bar dataKey="y-var" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartComponent;
