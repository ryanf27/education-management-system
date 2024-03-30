import React, { useState } from "react";
import Dashboard from "../Dashboard";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

const Create = ({ classes, teacherId }) => {
    const [values, setValues] = useState({
        class_id: "",
        day: "",
        start_time: "",
        end_time: "",
        teacher_id: teacherId,
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
        router.post(route("schedules.store"), values);
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto py-10">
                <h2 className="text-2xl font-semibold mb-5">
                    Create schedules
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <InputLabel
                        htmlFor="class_id"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Class
                    </InputLabel>
                    <SelectInput
                        id="class_id"
                        onChange={handleChange}
                        value={values.class_id}
                        required
                    >
                        <option value="">Select a class</option>
                        {classes.map((cls) => (
                            <option key={cls.id} value={cls.id}>
                                {cls.name}
                            </option>
                        ))}
                    </SelectInput>
                    <InputLabel
                        htmlFor="day"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Day
                    </InputLabel>
                    <SelectInput
                        id="day"
                        onChange={handleChange}
                        value={values.day}
                        required
                    >
                        <option value="">Select a day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </SelectInput>

                    <div>
                        <InputLabel
                            htmlFor="start_time"
                            className="block text-sm font-medium text-gray-700"
                        >
                            start time
                        </InputLabel>
                        <TextInput
                            type="time"
                            id="start_time"
                            onChange={handleChange}
                            value={values.start_time}
                            required
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="end_time"
                            className="block text-sm font-medium text-gray-700"
                        >
                            end time
                        </InputLabel>
                        <TextInput
                            type="time"
                            id="end_time"
                            onChange={handleChange}
                            value={values.end_time}
                            required
                        />
                    </div>

                    <div>
                        <PrimaryButton type="submit">
                            Create Schedule
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;
