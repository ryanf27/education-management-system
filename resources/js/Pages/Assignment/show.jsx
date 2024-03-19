import React from "react";
import { Link } from "@inertiajs/react"; // Asumsi Anda menggunakan Inertia.js untuk navigasi
import Dashboard from "../Dashboard";

const Show = ({ assignment }) => {
    return (
        <Dashboard>
            <div className="container mx-auto p-4">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
                        <h1 className="text-xl font-semibold">
                            {assignment.title}
                        </h1>
                        <Link
                            href={route("assignments.index")}
                            className="text-sm bg-blue-700 hover:bg-blue-600 rounded-lg p-2"
                        >
                            Back
                        </Link>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-700 text-lg mb-4">
                            {assignment.description}
                        </p>
                        <p className="text-gray-600">
                            Deadline:{" "}
                            <span className="text-gray-800 font-medium">
                                {assignment.deadline}
                            </span>
                        </p>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right">
                        <button className="py-2 px-4 text-xs font-semibold text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200">
                            Edit Assignment
                        </button>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Show;
