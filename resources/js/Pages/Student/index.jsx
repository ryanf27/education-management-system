import React from "react";
import Dashboard from "../Dashboard";
import { Head } from "@inertiajs/react";

const index = () => {
    return (
        <Dashboard>
            <Head title="Teacher Dashboard" />
            <div className="container mx-auto p-6">
                <header className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Student Dashboard</h1>
                    {/* Profile / Settings Dropdown Here */}
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Main Dashboard Widgets Here */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">
                            Upcoming Assignments
                        </h3>
                        {/* List of assignments */}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">
                            Class Announcements
                        </h3>
                        {/* Announcement Section */}
                    </div>
                    {/* Tambahkan lebih banyak widget di sini */}
                </div>

                <div className="mt-6">
                    {/* Additional Dashboard Sections */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">
                            Recent Grades
                        </h3>
                        {/* ... */}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default index;
