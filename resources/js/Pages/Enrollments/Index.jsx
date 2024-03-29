import React from "react";
import Dashboard from "../Dashboard";
import PrimaryButton from "@/Components/PrimaryButton";
import MainHeader from "@/Components/MainHeader";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ enrollments }) => {
    const handleDelete = (id) => {
        router.delete(route("enrollments.destroy", id));
    };

    const handleDetail = (id) => {
        router.get(route("enrollments.show", id));
    };

    const headers = [
        { id: "student_name", label: "student name" },
        { id: "class_name", label: "Class Name" },
        { id: "created_at", label: "Enroll Date" },
    ];

    return (
        <Dashboard>
            <Head title="Enrollments" />

            <div className="container mx-auto p-4">
                <MainHeader>
                    <h2 className="text-2xl">Enrollments</h2>
                    <PrimaryButton>
                        <Link href={route("courses.index")}>
                            Add New Enrollment
                        </Link>
                    </PrimaryButton>
                </MainHeader>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr className="bg-gray-800 text-xs font-medium text-gray-50 uppercase tracking-wider">
                                {headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-3 py-4 text-left"
                                    >
                                        {header.label}
                                    </th>
                                ))}
                                <th className="px-3 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {Object.keys(enrollments).map((key) => {
                                return (
                                    <tr key={key}>
                                        {headers.map((header) => (
                                            <td
                                                key={header.id}
                                                className="px-3 py-2"
                                            >
                                                {enrollments[key][header.id]}
                                            </td>
                                        ))}
                                        <td className="px-3 py-2 flex items-center space-x-2">
                                            <button
                                                onClick={() =>
                                                    handleDetail(
                                                        enrollments[key].id
                                                    )
                                                }
                                                className="bg-gray-400 text-white px-3 py-1 rounded mr-3"
                                            >
                                                Detail
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        enrollments[key].id
                                                    )
                                                }
                                                className="bg-red-600 text-white px-3 py-1 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Dashboard>
    );
};

export default Index;
