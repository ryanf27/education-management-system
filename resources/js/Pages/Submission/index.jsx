import React from "react";
import Dashboard from "../Dashboard";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ submissions }) => {
    const handleDelete = (id) => {
        router.delete(route("assignments.destroy", id));
    };

    return (
        <Dashboard>
            <Head title="Assignment" />
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold">Submissions</h1>
                </div>

                {submissions.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-200 text-gray-600">
                                <tr>
                                    <th className="px-3 py-2 text-left">
                                        Assignment Name
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        Assignment Title
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        Submitted On
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-300">
                                {submissions.map((submission) => (
                                    <tr key={submission.id}>
                                        <td className="px-3 py-2">
                                            {submission.student_name}
                                        </td>
                                        <td className="px-3 py-2">
                                            <Link
                                                href={route(
                                                    "assignments.show",
                                                    submission.assignment_id
                                                )}
                                                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                            >
                                                {submission.assignment_title}
                                            </Link>
                                        </td>
                                        <td className="px-3 py-2">
                                            {submission.created_at}
                                        </td>
                                        <td className="px-3 py-2 flex items-center space-x-2">
                                            <Link
                                                href={route(
                                                    "submissions.show",
                                                    submission.id
                                                )}
                                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
                                                role="button"
                                                aria-label="View submission"
                                            >
                                                View
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(submission.id)
                                                }
                                                className="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring ring-red-300 disabled:opacity-25 transition ease-in-out duration-150"
                                                aria-label="Delete submission"
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
                        <p>No submissions received yet.</p>
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;
