import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import Dashboard from "../Dashboard";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

const Create = () => {
    const [values, setValues] = useState({
        title: "",
        body: "",
        expiry_date: "",
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
        router.post(route("announcement.store"), values);
    };
    return (
        <>
            <Dashboard>
                <div className="max-w-4xl mx-auto py-10">
                    <h2 className="text-2xl font-semibold mb-5">
                        Create Announcment
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
                                id="title"
                                onChange={handleChange}
                                value={values.title}
                                placeholder="Enter the title"
                                required
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="body"
                                className="block text-sm font-medium text-gray-700"
                            >
                                body
                            </InputLabel>
                            <textarea
                                id="body"
                                onChange={handleChange}
                                value={values.body}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows="3"
                                placeholder="Enter..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="deadline"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Expiry date
                            </InputLabel>
                            <TextInput
                                type="date"
                                id="expiry_date"
                                onChange={handleChange}
                                value={values.expiry_date}
                                required
                            />
                        </div>

                        <div>
                            <PrimaryButton type="submit">
                                Create Announcment
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Dashboard>
        </>
    );
};

export default Create;
