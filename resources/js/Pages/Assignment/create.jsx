import React, { useState } from "react";
import Dashboard from "../Dashboard";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

const Create = ({ subjects, teachers, classes }) => {
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
                            value={values.deadline}
                            required
                        />
                    </div>
                    <div className="">
                        <InputLabel
                            htmlFor="subject_id"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Subject
                        </InputLabel>
                        <SelectInput
                            id="subject_id"
                            onChange={handleChange}
                            value={values.subject_id}
                            required
                        >
                            <option value="">Select a subject</option>
                            {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                    {subject.name}
                                </option>
                            ))}
                        </SelectInput>
                        <InputLabel
                            htmlFor="subject_id"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Class
                        </InputLabel>
                        <SelectInput
                            id="classes_id"
                            onChange={handleChange}
                            value={values.classes_id}
                            required
                        >
                            <option value="">Select a class</option>
                            {classes.map((cls) => (
                                <option key={cls.id} value={cls.id}>
                                    {cls.name}
                                </option>
                            ))}
                        </SelectInput>
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

export default Create;
