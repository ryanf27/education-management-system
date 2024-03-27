import React, { useState } from "react";
import { router } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

import { format } from "date-fns";

const Edit = ({ assignment }) => {
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
            <div className="max-w-4xl mx-auto py-10">
                <h2 className="text-2xl font-semibold mb-5">
                    Create Assignment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <InputLabel
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </InputLabel>

                        <TextInput
                            type="text"
                            id="title"
                            onChange={handleChange}
                            value={values.title}
                            placeholder="Title.."
                            required
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </InputLabel>
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
                        <InputLabel
                            htmlFor="deadline"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Deadline
                        </InputLabel>
                        <TextInput
                            type="date"
                            id="deadline"
                            onChange={handleChange}
                            value={formattedDate}
                            required
                        />
                    </div>

                    <div>
                        <PrimaryButton type="submit">
                            Create Assignment
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default Edit;
