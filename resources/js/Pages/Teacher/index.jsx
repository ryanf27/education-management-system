import React, { useState } from "react";
import Dashboard from "../Dashboard";
import Modal from "@/Components/Modal";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [values, setValues] = useState({
        score: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const score = values.score;

        router.put(route("submissions.grade", selectedSubmission.id), {
            grade: score,
            _method: "put",
        });

        closeModal();
    };

    const openModal = (submission) => {
        setSelectedSubmission(submission);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedSubmission(null);
        setIsModalOpen(false);
    };

    return (
        <Dashboard>
            <Head title="Teacher Dashboard" />
            <div className="container mx-auto p-6">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Upcoming Assignments
                        </h3>
                        <ul>
                            <li className="mb-2">
                                Algebra Chapter 5: March 10th
                            </li>
                            <li className="mb-2">
                                Biology Lab Report: March 12th
                            </li>
                            <li>World History Essay: March 15th</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Class Announcements
                        </h3>
                        <p>Parent-teacher meetings scheduled for March 20th.</p>
                    </div>

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
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Recent Grades
                        </h3>
                        <p>Algebra Test 4: Average Grade - 88%</p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Submission Details
                        </h3>
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Student Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Assignment Title
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Deadline
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Score
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((d, i) => (
                                    <tr key={i}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {d.student_name}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {d.assignment_title}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {new Date(
                                                d.submission_date
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {d.score}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button
                                                onClick={() => openModal(d)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Grade
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Modal */}
                <Modal show={isModalOpen} onClose={closeModal}>
                    {selectedSubmission && (
                        <form
                            onSubmit={handleSubmit}
                            className="text-gray-100 mx-auto p-6  rounded-lg shadow-lg"
                        >
                            <h2 className="text-xl font-bold mb-4  ">
                                Grade Submission
                            </h2>
                            <p>Student: {selectedSubmission.student_name}</p>
                            <p>
                                Assignment:{" "}
                                {selectedSubmission.assignment_title}
                            </p>
                            <div className="mb-4">
                                <label
                                    className="block text-sm font-bold mb-2"
                                    htmlFor="score"
                                >
                                    Score
                                </label>
                                <input
                                    id="score"
                                    name="score"
                                    onChange={handleChange}
                                    value={values.score}
                                    type="number"
                                    min="0"
                                    max="100"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </Modal>
            </div>
        </Dashboard>
    );
};

export default Index;
