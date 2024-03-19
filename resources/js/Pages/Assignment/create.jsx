import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { router } from "@inertiajs/react";

const CreateAssignment = ({ subjects, teachers, classes }) => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        deadline: "",
        subject_id: "",
        teacher_id: teachers,
        classes_id: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("assignments.store"), values);
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto py-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            onChange={handleChange}
                            value={values.title}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            onChange={handleChange}
                            value={values.description}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            onChange={handleChange}
                            value={values.deadline}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject_id"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Subject
                        </label>
                        <select
                            id="subject_id"
                            onChange={handleChange}
                            value={values.subject_id}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select a subject</option>
                            {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                    {subject.name}
                                </option>
                            ))}
                        </select>
                        <label
                            htmlFor="subject_id"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Class
                        </label>
                        <select
                            id="classes_id"
                            onChange={handleChange}
                            value={values.classes_id}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select a class</option>
                            {classes.map((cls) => (
                                <option key={cls.id} value={cls.id}>
                                    {cls.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Assignment
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default CreateAssignment;
