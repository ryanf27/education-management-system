import React from "react";
import Dashboard from "../Dashboard";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const Index = ({ classmates, assignments }) => {
    return (
        <Dashboard>
            <Head title="Student Dashboard" />
            <div className="container mx-auto p-6">
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Student Dashboard
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Top Class Rank */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            Top Class Rank
                        </h3>
                        {/* Placeholder content */}
                        <p className="text-gray-700">
                            Your current rank:{" "}
                            <span className="font-bold">5th</span>
                        </p>
                    </div>

                    {/* Classmates List */}
                    <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            test
                        </h3>
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
                                            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
                                        >
                                            <h4 className="font-semibold text-lg mb-2">
                                                {assignment.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-4">
                                                {assignment.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm">
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

                    {/* classmate list */}
                    <div className="mt-2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
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
