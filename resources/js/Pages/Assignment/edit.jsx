import React, { useState } from "react";
import { router } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { format } from "date-fns";

const edit = ({ assignment }) => {
    const [values, setValues] = useState({
        title: assignment.title,
        description: assignment.description,
        deadline: assignment.deadline,
    });

    const formattedDate = format(new Date(assignment.deadline), "yyyy-MM-dd");
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
        router.put(route("assignments.update", assignment.id), values);
    };

    return (
        <Dashboard>
            <div className="container mx-auto p-4">
                <div className="max-w-3xl mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    >
                        <h2 className="block text-gray-700 text-xl font-bold mb-2">
                            Edit Assignment
                        </h2>

                        {/* Title Field */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="title"
                            >
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="Title"
                                value={values.title}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Description Field */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                placeholder="Description"
                                value={values.description}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Deadline Field */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="deadline"
                            >
                                Deadline
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="deadline"
                                type="date"
                                value={formattedDate}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Update Assignment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
};

export default edit;
