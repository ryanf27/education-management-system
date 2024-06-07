import React, { useState } from "react";
import Dashboard from "../Dashboard";
import Modal from "@/Components/Modal";
import { Head, router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGraduate,
    faClipboardList,
    faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    LineChart,
    Line,
} from "recharts";

const Index = ({ schedules, submissions }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [values, setValues] = useState({
        score: "",
    });

    const attendanceRecords = [
        { date: "2023-06-01", present: 110, absent: 5, late: 5 },
        { date: "2023-06-02", present: 115, absent: 3, late: 2 },
        { date: "2023-06-03", present: 108, absent: 7, late: 5 },
    ];

    const performanceOverview = [
        { name: "Average Grade", value: 85 },
        { name: "Highest Grade", value: 98 },
        { name: "Lowest Grade", value: 70 },
    ];

    const behavioralReports = [
        { date: "2023-06-01", incidents: 2, rewards: 5 },
        { date: "2023-06-02", incidents: 3, rewards: 6 },
        { date: "2023-06-03", incidents: 1, rewards: 4 },
    ];

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
                    <h1 className="text-3xl font-medium text-gray-800">
                        Teacher Dashboard
                    </h1>
                </header>

                {/* Row of three widgets */}
                <div className="flex flex-col md:flex-row gap-5 justify-around mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center md:w-1/3">
                        <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="text-indigo-400 text-4xl mb-2"
                        />
                        <h4 className="text-lg font-semibold text-indigo-400">
                            Students
                        </h4>
                        <p className="text-2xl font-semibold">20</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center md:w-1/3">
                        <FontAwesomeIcon
                            icon={faClipboardList}
                            className="text-indigo-400 text-4xl mb-2"
                        />
                        <h4 className="text-lg font-semibold text-indigo-400">
                            Assignments to Grade
                        </h4>
                        <p className="text-2xl font-semibold">12</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center md:w-1/3">
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            className="text-indigo-400 text-4xl mb-2"
                        />
                        <h4 className="text-lg font-semibold text-indigo-400">
                            Classes
                        </h4>
                        <p className="text-2xl font-semibold">4</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                        Schedule
                    </h3>
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Class
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Room
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Day
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Start Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedules.map((d, i) => (
                                <tr key={i}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {d.class}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {d.room}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {d.day}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {d.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600">
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
                            {submissions.map((d, i) => (
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
                                            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                                        >
                                            Evaluate Assignment
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Attendance Records */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                        Attendance Records
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={attendanceRecords}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="present" fill="#82ca9d" />
                            <Bar dataKey="absent" fill="#ff8042" />
                            <Bar dataKey="late" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Performance Overview & Behavioral Reports */}
                <div className="flex flex-col md:flex-row gap-5 mb-10">
                    {/* Performance Overview */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex-1">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            Performance Overview
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={performanceOverview}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Behavioral Reports */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex-1">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            Behavioral Reports
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={behavioralReports}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="incidents"
                                    stroke="#ff7300"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="rewards"
                                    stroke="#387908"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Submission Details */}

                {/* Modal */}
                <Modal show={isModalOpen} onClose={closeModal}>
                    {selectedSubmission && (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h2 className="text-xl font-bold mb-4 text-indigo-600">
                                Grade Submission
                            </h2>
                            <p className="text-gray-700">
                                Student: {selectedSubmission.student_name}
                            </p>
                            <p className="text-gray-700">
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
