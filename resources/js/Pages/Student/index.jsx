import React from "react";
import Dashboard from "../Dashboard";
import BarChart from "@/Components/BarChart";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faClipboardList,
    faUserGraduate,
    faChalkboardTeacher,
    faSchool,
} from "@fortawesome/free-solid-svg-icons";

const Index = ({ classmates, assignments, chartData }) => {
    return (
        <Dashboard>
            <Head title="Student Dashboard" />
            <div className="container mx-auto p-6">
                <header className="mb-6">
                    <h1 className="text-3xl font-medium text-gray-800">
                        Student Dashboard
                    </h1>
                </header>

                {/* Row of three widgets */}
                <div className="flex flex-col md:flex-row gap-5 justify-around mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center md:w-1/3">
                        <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="text-indigo-400 text-4xl mb-2"
                        />
                        <h4 className="text-lg font-semibold  text-indigo-400">
                            Students
                        </h4>
                        <p className="text-2xl font-semibold">3500</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center md:w-1/3">
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            className="text-indigo-400 text-4xl mb-2"
                        />
                        <h4 className="text-lg font-semibold  text-indigo-400">
                            Teachers
                        </h4>
                        <p className="text-2xl font-semibold">150</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center md:w-1/3">
                        <FontAwesomeIcon
                            icon={faSchool}
                            className="text-indigo-400 text-4xl mb-2"
                        />
                        <h4 className="text-lg font-semibold  text-indigo-400">
                            Classes
                        </h4>
                        <p className="text-2xl font-semibold">50</p>
                    </div>
                </div>

                {/* chart */}
                <div className="flex flex-col md:flex-row flex-wrap gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex-1 md:flex-none md:w-3/4">
                        <BarChart
                            title="Assignment Performance"
                            data={chartData}
                        />
                    </div>

                    {/* Classmates List */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex-1">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            Upcoming Events
                        </h3>
                        {/* Placeholder for events or schedule */}
                        <div className="flex flex-col space-y-4">
                            {/* Example Event 1 */}
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <h5 className="text-lg font-semibold">
                                    Math Exam
                                </h5>
                                <p className="text-sm text-gray-700">
                                    March 15, 2024, at 10:00 AM
                                </p>
                            </div>
                            {/* Example Event 2 */}
                            <div className="p-4 bg-green-100 rounded-lg">
                                <h5 className="text-lg font-semibold">
                                    Science Project Presentation
                                </h5>
                                <p className="text-sm text-gray-700">
                                    March 20, 2024, at 01:00 PM
                                </p>
                            </div>
                            {/* Example Event 3 */}
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <h5 className="text-lg font-semibold">
                                    hackathon
                                </h5>
                                <p className="text-sm text-gray-700">
                                    June 15, 2024, at 10:00 AM
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link
                                href="/"
                                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                            >
                                View Full Schedule
                            </Link>
                        </div>
                    </div>
                </div>

                {/* class info */}
                <div className="mt-10">
                    {/* Assignment List */}
                    <div className="mt-10">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                    className="mr-2"
                                />
                                Assignment List
                            </h3>
                            {assignments && assignments.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {assignments.map((assignment, index) => (
                                        <Link
                                            href={route("submissions.create")}
                                            key={index}
                                            className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                        >
                                            <h4 className="font-semibold text-lg mb-2 text-gray-800">
                                                {assignment.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-4">
                                                {assignment.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-600">
                                                <span className="flex items-center">
                                                    <FontAwesomeIcon
                                                        icon={faCalendarAlt}
                                                        className="text-indigo-500 mr-2"
                                                    />
                                                    {assignment.deadline}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-700">
                                    No assignments found.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Classmate List */}
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            Classmates
                        </h3>
                        {classmates && classmates.length > 0 ? (
                            <div className="overflow-auto max-h-64">
                                <ul>
                                    {classmates.map((classmate, index) => (
                                        <li
                                            key={index}
                                            className="py-2 border-b border-gray-200 last:border-0"
                                        >
                                            <a
                                                href="#"
                                                className="text-gray-800 hover:text-indigo-600 transition duration-300"
                                            >
                                                {classmate.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-gray-700">
                                No classmates found.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Index;
