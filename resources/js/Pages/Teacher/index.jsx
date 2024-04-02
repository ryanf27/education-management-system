import React from "react";
import Dashboard from "../Dashboard";
import { Head, Link } from "@inertiajs/react";

const Index = () => {
    return (
        <Dashboard>
            <Head title="Teacher Dashboard" />
            <div className="container mx-auto p-6">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
                    {/* Example for adding a quick access or settings link */}
                    <Link href="" className="text-blue-600 hover:text-blue-800">
                        Settings
                    </Link>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Upcoming Assignments Widget */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Upcoming Assignments
                        </h3>
                        <ul>
                            {/* Placeholder for dynamic list */}
                            <li className="mb-2">
                                Algebra Chapter 5: March 10th
                            </li>
                            <li className="mb-2">
                                Biology Lab Report: March 12th
                            </li>
                            <li>World History Essay: March 15th</li>
                        </ul>
                    </div>

                    {/* Class Announcements Widget */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Class Announcements
                        </h3>
                        {/* Example announcement */}
                        <p>Parent-teacher meetings scheduled for March 20th.</p>
                    </div>

                    {/* Quick Access to Grading */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Grading Access
                        </h3>
                        <Link
                            href=""
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Grade Assignments
                        </Link>
                    </div>
                </div>

                <div className="mt-8">
                    {/* Recent Grades Section */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Recent Grades
                        </h3>
                        {/* Placeholder for dynamic content */}
                        <p>Algebra Test 4: Average Grade - 88%</p>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Index;
