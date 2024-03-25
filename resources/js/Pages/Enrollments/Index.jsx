import React from "react";
import Dashboard from "../Dashboard"; // Assuming you have a Dashboard component
import { Head, Link } from "@inertiajs/react";

const Index = ({ enrollments }) => {
    console.log(enrollments);

    return (
        <Dashboard>
            <Head title="Enrollments" />
            <h2 className=" text-2xl">Enrollment List</h2>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-6">
                <table className="w-full text-sm text-left text-gray-900 border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50 font-medium text-xs uppercase border-b border-gray-200">
                        <tr>
                            <th scope="col" className="w-20 py-3 px-6">
                                Student Name
                            </th>
                            <th scope="col" className="w-20 py-3 px-6">
                                Class Name
                            </th>
                            <th
                                scope="col"
                                className="w-40 py-3 px-6 text-center"
                            >
                                Enrolled At
                            </th>
                            <th scope="col" className="w-12 py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => (
                            <tr
                                className="border-b border-gray-200"
                                key={enrollment.class_id}
                            >
                                <td className="py-4 px-6">
                                    {enrollment.student_id}
                                </td>
                                <td className="py-4 px-6">
                                    {enrollment.class_id}
                                </td>
                                <td className="py-4 px-6 text-center">
                                    {new Date(
                                        enrollment.created_at
                                    ).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </td>
                                <td className="py-4 px-6">
                                    <Link
                                        href={`/enrollments/${enrollment.id}/edit`}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {enrollments.length === 0 && (
                    <div className="text-center py-4 bg-gray-200 rounded-md mt-4">
                        No enrollments found.
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;
