import Dashboard from "../Dashboard";
import { router } from "@inertiajs/react";
import { useState } from "react";

const Create = ({ studentClass, student_id }) => {
    const [values, setValues] = useState({
        student_id: student_id || "",
        class_id: studentClass.id,
    });

    // Submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("enrollments.store"), values);
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>Your ID : {student_id}</div>

                    {studentClass && (
                        <div className="mt-10 border-t pt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                            <h2 className="text-xl font-semibold mb-4 px-4">
                                Class Enrollment Summary
                            </h2>
                            <div className="px-4 py-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {studentClass.name}
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                        Grade: {studentClass.grade}
                                    </p>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                        Subject: {studentClass.subject.name}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-900">
                                        Duration: 3 months
                                    </p>
                                    <p className="text-sm text-gray-900">
                                        Fee: $300
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Confirm Enrollment
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;
