import React from "react";
import Dashboard from "../Dashboard";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ assignments }) => {
    const handleDelete = (id) => {
        router.delete(route("assignments.destroy", id));
    };

    return (
        <Dashboard>
            <Head title="Assignment" />
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold">Assignments</h1>
                    <Link
                        href={route("assignments.create")}
                        className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                        Add New Assignment
                    </Link>
                </div>

                {assignments.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-200 text-gray-600">
                                <tr>
                                    <th className="px-3 py-2 text-left">
                                        Title
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        Description
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        Deadline
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-300">
                                {assignments.map((assignment) => (
                                    <tr key={assignment.id}>
                                        <td className="px-3 py-2">
                                            <Link
                                                href={route(
                                                    "assignments.show",
                                                    assignment.id
                                                )}
                                                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                            >
                                                {assignment.title}
                                            </Link>
                                        </td>
                                        <td className="px-3 py-2">
                                            {assignment.description}
                                        </td>
                                        <td className="px-3 py-2">
                                            {assignment.deadline}
                                        </td>
                                        <td className="px-3 py-2 flex items-center space-x-2">
                                            <Link
                                                href={route(
                                                    "assignments.edit",
                                                    assignment.id
                                                )}
                                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
                                                role="button"
                                                aria-label="Edit assignment"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(assignment.id)
                                                }
                                                className="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring ring-red-300 disabled:opacity-25 transition ease-in-out duration-150"
                                                aria-label="Delete assignment"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-4">
                        <p>No assignments created yet.</p>
                        <Link
                            href="/assignments/create"
                            className="btn btn-primary mt-4"
                        >
                            Create Your First Assignment
                        </Link>
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;
